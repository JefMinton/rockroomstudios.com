-- Drop the existing overly permissive upload policy
DROP POLICY IF EXISTS "Anyone can upload audition videos" ON storage.objects;

-- Create a more restrictive policy that validates file type
CREATE POLICY "Anyone can upload audition videos with validation"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'audition-videos'
  AND (storage.extension(name) IN ('mp4', 'mov', 'avi', 'webm', 'mkv', 'm4v'))
  AND (octet_length(name) < 500)
);