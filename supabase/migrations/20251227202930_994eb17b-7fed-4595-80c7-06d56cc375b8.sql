-- Allow anonymous users to submit enrollments (public form)
CREATE POLICY "Anyone can submit enrollment"
ON public.enrollments
FOR INSERT
TO anon
WITH CHECK (true);