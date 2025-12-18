-- Create enrollments table for all program applications
CREATE TABLE public.enrollments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Program type
  program_type TEXT NOT NULL CHECK (program_type IN ('band_practice', 'rock_band')),
  
  -- Applicant info
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  date_of_birth DATE NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  zip TEXT NOT NULL,
  
  -- Parent/Guardian info (for minors)
  parent_name TEXT,
  parent_email TEXT,
  parent_phone TEXT,
  
  -- Musical info
  primary_instrument TEXT NOT NULL,
  experience_level TEXT NOT NULL CHECK (experience_level IN ('beginner', 'intermediate', 'advanced')),
  years_playing INTEGER,
  musical_goals TEXT,
  other_instruments TEXT,
  
  -- Availability
  availability TEXT NOT NULL,
  
  -- How did you hear about us
  referral_source TEXT,
  
  -- RockBand specific - audition video
  audition_video_url TEXT,
  
  -- Status tracking
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'accepted', 'waitlisted', 'declined'))
);

-- Enable RLS but allow public inserts (anyone can apply)
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public enrollment form)
CREATE POLICY "Anyone can submit enrollment" 
ON public.enrollments 
FOR INSERT 
WITH CHECK (true);

-- Create storage bucket for audition videos (public for now since no auth)
INSERT INTO storage.buckets (id, name, public, file_size_limit)
VALUES ('audition-videos', 'audition-videos', true, 104857600);

-- Allow public uploads to audition-videos bucket
CREATE POLICY "Anyone can upload audition videos"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'audition-videos');

-- Allow public read of audition videos
CREATE POLICY "Anyone can view audition videos"
ON storage.objects
FOR SELECT
USING (bucket_id = 'audition-videos');