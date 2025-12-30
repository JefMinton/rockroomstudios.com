-- Add restrictive DELETE policy for editable_content table
CREATE POLICY "Admins can delete editable_content"
ON public.editable_content
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));