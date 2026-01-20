-- Remove anonymous enrollment and storage policies since enrollment is now manual via email
-- This eliminates the security risks of anonymous data submission and storage abuse

-- Drop the anonymous enrollment policy
DROP POLICY IF EXISTS "Anyone can submit enrollment" ON public.enrollments;

-- Drop the anonymous storage upload policy  
DROP POLICY IF EXISTS "Anyone can upload audition videos with validation" ON storage.objects;

-- Add a comment for documentation
COMMENT ON TABLE public.enrollments IS 'Enrollment data is now managed manually via direct email contact to jeff.a.minton@gmail.com. Anonymous submissions have been disabled for security.';

-- Keep the authenticated user policies for potential future use
-- Users can still submit if logged in (for admin data entry)
-- Admins still have full access for managing enrollments