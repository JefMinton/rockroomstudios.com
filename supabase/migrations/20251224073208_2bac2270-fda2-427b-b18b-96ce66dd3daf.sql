-- Drop the existing open INSERT policy
DROP POLICY IF EXISTS "Anyone can submit enrollment" ON public.enrollments;

-- Create new policy requiring authentication for enrollment submissions
CREATE POLICY "Authenticated users can submit enrollment" 
ON public.enrollments 
FOR INSERT 
TO authenticated
WITH CHECK (true);