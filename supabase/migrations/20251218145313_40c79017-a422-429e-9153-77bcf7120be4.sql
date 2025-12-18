-- 1. Make audition-videos bucket private
UPDATE storage.buckets 
SET public = false 
WHERE id = 'audition-videos';

-- 2. Drop existing public SELECT policy if it exists
DROP POLICY IF EXISTS "Anyone can view audition videos" ON storage.objects;

-- 3. Add admin-only SELECT policy for audition videos
CREATE POLICY "Only admins can view audition videos"
ON storage.objects
FOR SELECT
USING (
  bucket_id = 'audition-videos' AND
  has_role(auth.uid(), 'admin'::app_role)
);

-- 4. Add database constraints for input validation
ALTER TABLE enrollments
ADD CONSTRAINT check_first_name_length CHECK (char_length(first_name) BETWEEN 1 AND 50),
ADD CONSTRAINT check_last_name_length CHECK (char_length(last_name) BETWEEN 1 AND 50),
ADD CONSTRAINT check_email_length CHECK (char_length(email) BETWEEN 5 AND 254),
ADD CONSTRAINT check_email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
ADD CONSTRAINT check_phone_length CHECK (char_length(phone) BETWEEN 10 AND 20),
ADD CONSTRAINT check_address_length CHECK (char_length(address) BETWEEN 1 AND 200),
ADD CONSTRAINT check_city_length CHECK (char_length(city) BETWEEN 1 AND 100),
ADD CONSTRAINT check_state_length CHECK (char_length(state) BETWEEN 1 AND 50),
ADD CONSTRAINT check_zip_length CHECK (char_length(zip) BETWEEN 5 AND 10),
ADD CONSTRAINT check_date_of_birth CHECK (date_of_birth >= '1920-01-01' AND date_of_birth <= CURRENT_DATE);