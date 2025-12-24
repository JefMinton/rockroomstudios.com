-- Add UPDATE policy for authorized_admins table
CREATE POLICY "Admins can update authorized_admins" 
ON public.authorized_admins 
FOR UPDATE 
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));