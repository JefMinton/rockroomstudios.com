-- Create rate limiting function for enrollments
CREATE OR REPLACE FUNCTION check_enrollment_rate_limit()
RETURNS TRIGGER AS $$
DECLARE
  recent_count INTEGER;
BEGIN
  -- Check submissions from same email in last hour
  SELECT COUNT(*) INTO recent_count
  FROM enrollments
  WHERE email = NEW.email
    AND created_at > NOW() - INTERVAL '1 hour';
  
  IF recent_count >= 3 THEN
    RAISE EXCEPTION 'Too many enrollment attempts. Please try again later.';
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Attach trigger
CREATE TRIGGER enforce_enrollment_rate_limit
BEFORE INSERT ON enrollments
FOR EACH ROW
EXECUTE FUNCTION check_enrollment_rate_limit();

-- Add unique constraint to prevent duplicate enrollments per program
CREATE UNIQUE INDEX idx_unique_active_enrollment 
ON enrollments(email, program_type) 
WHERE status NOT IN ('declined');