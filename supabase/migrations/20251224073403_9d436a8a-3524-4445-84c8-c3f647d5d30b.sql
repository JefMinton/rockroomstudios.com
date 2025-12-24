-- Add user_id column to link enrollments to authenticated users
ALTER TABLE public.enrollments 
ADD COLUMN user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE;

-- Update existing enrollments to be orphaned (null user_id) - admins can still see them
-- New enrollments will require user_id

-- Drop the overly permissive INSERT policy
DROP POLICY IF EXISTS "Authenticated users can submit enrollment" ON public.enrollments;

-- Create strict INSERT policy requiring user_id matches authenticated user
CREATE POLICY "Users can submit their own enrollment" 
ON public.enrollments 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Add SELECT policy so users can view their own enrollments
CREATE POLICY "Users can view their own enrollments" 
ON public.enrollments 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

-- Add rate limiting per user (max 5 enrollments total per user to prevent spam)
CREATE OR REPLACE FUNCTION public.check_user_enrollment_limit()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  user_count INTEGER;
BEGIN
  SELECT COUNT(*) INTO user_count
  FROM enrollments
  WHERE user_id = NEW.user_id;
  
  IF user_count >= 5 THEN
    RAISE EXCEPTION 'Maximum enrollment limit reached for this account.';
  END IF;
  
  RETURN NEW;
END;
$$;

-- Create trigger for user enrollment limit
CREATE TRIGGER check_user_enrollment_limit_trigger
BEFORE INSERT ON public.enrollments
FOR EACH ROW
EXECUTE FUNCTION public.check_user_enrollment_limit();