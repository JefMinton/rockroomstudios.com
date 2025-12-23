-- Create authorized_admins table to whitelist allowed Google accounts
CREATE TABLE IF NOT EXISTS public.authorized_admins (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  added_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.authorized_admins ENABLE ROW LEVEL SECURITY;

-- Only authenticated admins can view the list
CREATE POLICY "Admins can view authorized_admins"
ON public.authorized_admins
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Only admins can add new admins
CREATE POLICY "Admins can insert authorized_admins"
ON public.authorized_admins
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Only admins can delete admins
CREATE POLICY "Admins can delete authorized_admins"
ON public.authorized_admins
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Insert the owner email as first authorized admin
INSERT INTO public.authorized_admins (email, name) 
VALUES ('jeff.a.minton@gmail.com', 'Jeff Minton')
ON CONFLICT (email) DO NOTHING;

-- Create editable_content table for inline editing
CREATE TABLE IF NOT EXISTS public.editable_content (
  id TEXT PRIMARY KEY,
  content JSONB NOT NULL DEFAULT '{}',
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_by UUID REFERENCES auth.users(id)
);

-- Enable RLS
ALTER TABLE public.editable_content ENABLE ROW LEVEL SECURITY;

-- Everyone can read content
CREATE POLICY "Anyone can view editable_content"
ON public.editable_content
FOR SELECT
USING (true);

-- Only admins can update content
CREATE POLICY "Admins can update editable_content"
ON public.editable_content
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Only admins can insert content
CREATE POLICY "Admins can insert editable_content"
ON public.editable_content
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Create a trigger function to auto-add admin role when authorized user signs in
CREATE OR REPLACE FUNCTION public.handle_authorized_admin_signup()
RETURNS TRIGGER AS $$
BEGIN
  -- Check if the new user's email is in authorized_admins
  IF EXISTS (
    SELECT 1 FROM public.authorized_admins WHERE email = NEW.email
  ) THEN
    -- Grant admin role
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, 'admin')
    ON CONFLICT (user_id, role) DO NOTHING;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create the trigger
DROP TRIGGER IF EXISTS on_auth_user_created_admin_check ON auth.users;
CREATE TRIGGER on_auth_user_created_admin_check
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_authorized_admin_signup();

-- Insert default site content
INSERT INTO public.editable_content (id, content) VALUES 
  ('hero', '{"title": "ROCK ROOM", "subtitle": "UNDERGROUND LIVE", "tagline": "PLAY TO LEARN", "description": "Where musicians become bands. Professional music education at Camp Hill''s iconic Underground Live venue."}'::jsonb),
  ('about', '{"title": "About Rock Room"}'::jsonb)
ON CONFLICT (id) DO NOTHING;