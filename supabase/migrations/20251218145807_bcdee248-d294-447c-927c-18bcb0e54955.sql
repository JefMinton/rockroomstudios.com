-- Add explicit deny policies for anonymous users on sensitive tables
-- Defense in depth: makes security intent explicit

-- Block anonymous read access to enrollments
CREATE POLICY "Block anonymous read of enrollments"
ON public.enrollments
FOR SELECT
TO anon
USING (false);

-- Block anonymous read access to user_roles
CREATE POLICY "Block anonymous read of user_roles"
ON public.user_roles
FOR SELECT
TO anon
USING (false);