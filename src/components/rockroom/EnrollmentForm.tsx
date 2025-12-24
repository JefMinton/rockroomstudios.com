import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { Loader2, Upload, X, LogIn } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const baseSchema = z.object({
  first_name: z.string().min(1, "First name is required").max(50),
  last_name: z.string().min(1, "Last name is required").max(50),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required").max(20),
  date_of_birth: z.string().min(1, "Date of birth is required"),
  address: z.string().min(1, "Address is required").max(200),
  city: z.string().min(1, "City is required").max(100),
  state: z.string().min(1, "State is required").max(50),
  zip: z.string().min(5, "ZIP code is required").max(10),
  parent_name: z.string().max(100).optional(),
  parent_email: z.string().email().optional().or(z.literal("")),
  parent_phone: z.string().max(20).optional(),
  primary_instrument: z.string().min(1, "Primary instrument is required"),
  experience_level: z.enum(["beginner", "intermediate", "advanced"]),
  years_playing: z.string().optional(),
  musical_goals: z.string().max(1000).optional(),
  other_instruments: z.string().max(500).optional(),
  availability: z.string().min(1, "Availability is required").max(500),
  referral_source: z.string().max(200).optional(),
});

type FormData = z.infer<typeof baseSchema>;

interface EnrollmentFormProps {
  programType: 'band_practice' | 'rock_band';
  title: string;
  description: string;
}

// Map database errors to user-friendly messages (prevents info leakage)
const getEnrollmentErrorMessage = (error: any): string => {
  const message = error?.message || '';
  
  if (message.includes('duplicate key') || message.includes('idx_unique_active_enrollment')) {
    return 'You have already submitted an enrollment for this program.';
  }
  if (message.includes('check_enrollment_rate_limit') || message.includes('Too many enrollment')) {
    return 'Too many enrollment attempts. Please try again in an hour.';
  }
  if (message.includes('violates check constraint')) {
    return 'Some information provided is invalid. Please check your inputs.';
  }
  if (message.includes('not-null constraint')) {
    return 'Please fill in all required fields.';
  }
  if (error.code === 'PGRST116' || error.code === '42501') {
    return 'Unable to submit enrollment. Please try again.';
  }
  
  return 'Something went wrong. Please try again or contact us for help.';
};

const EnrollmentForm = ({ programType, title, description }: EnrollmentFormProps) => {
  const { user, isLoading: authLoading } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm<FormData>({
    resolver: zodResolver(baseSchema),
    defaultValues: {
      experience_level: 'beginner'
    }
  });

  // Show login prompt if not authenticated
  if (!authLoading && !user) {
    return (
      <div className="rock-card p-6 md:p-8 rounded-sm text-center">
        <LogIn className="w-12 h-12 mx-auto mb-4 text-primary" />
        <h3 className="font-oswald text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-6">
          Please sign in or create an account to submit your enrollment application.
        </p>
        <Link 
          to="/admin/login" 
          className="btn-rock inline-block px-8 py-3 rounded-sm"
        >
          Sign In to Enroll
        </Link>
      </div>
    );
  }

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 100 * 1024 * 1024) {
        toast.error("Video must be under 100MB");
        return;
      }
      setVideoFile(file);
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      let audition_video_url = null;

      // Upload video if provided (for rock_band)
      if (programType === 'rock_band' && videoFile) {
        setUploadProgress(10);
        const fileExt = videoFile.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('audition-videos')
          .upload(fileName, videoFile);

        if (uploadError) throw uploadError;
        setUploadProgress(50);

        // Store the file path (not public URL) since bucket is private
        // Admins will access via signed URLs
        audition_video_url = fileName;
        setUploadProgress(70);
      }

      // Insert enrollment with user_id for RLS
      const { error } = await supabase.from('enrollments').insert({
        user_id: user.id,
        program_type: programType,
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        phone: data.phone,
        date_of_birth: data.date_of_birth,
        address: data.address,
        city: data.city,
        state: data.state,
        zip: data.zip,
        parent_name: data.parent_name || null,
        parent_email: data.parent_email || null,
        parent_phone: data.parent_phone || null,
        primary_instrument: data.primary_instrument,
        experience_level: data.experience_level,
        years_playing: data.years_playing ? parseInt(data.years_playing) : null,
        musical_goals: data.musical_goals || null,
        other_instruments: data.other_instruments || null,
        availability: data.availability,
        referral_source: data.referral_source || null,
        audition_video_url,
      });

      if (error) throw error;
      setUploadProgress(100);

      toast.success(
        programType === 'rock_band' 
          ? "Audition submitted! We'll review and contact you soon." 
          : "Enrollment submitted! We'll contact you to schedule your first free class."
      );
      reset();
      setVideoFile(null);
      setUploadProgress(0);
    } catch (error: any) {
      console.error('Enrollment error:', error);
      toast.error(getEnrollmentErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  const instruments = [
    "Guitar", "Bass", "Drums", "Vocals", "Keyboard/Piano", 
    "Saxophone", "Other Wind Instrument", "Other String Instrument", "Other"
  ];

  return (
    <div className="rock-card p-6 md:p-8 rounded-sm">
      <h3 className="font-oswald text-2xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-6">{description}</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Personal Information */}
        <div>
          <h4 className="font-oswald text-lg font-semibold mb-4 text-primary">Personal Information</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="first_name">First Name *</Label>
              <Input {...register('first_name')} id="first_name" className="bg-input border-border" />
              {errors.first_name && <p className="text-destructive text-xs mt-1">{errors.first_name.message}</p>}
            </div>
            <div>
              <Label htmlFor="last_name">Last Name *</Label>
              <Input {...register('last_name')} id="last_name" className="bg-input border-border" />
              {errors.last_name && <p className="text-destructive text-xs mt-1">{errors.last_name.message}</p>}
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input {...register('email')} type="email" id="email" className="bg-input border-border" />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <Label htmlFor="phone">Phone *</Label>
              <Input {...register('phone')} type="tel" id="phone" className="bg-input border-border" />
              {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone.message}</p>}
            </div>
            <div>
              <Label htmlFor="date_of_birth">Date of Birth *</Label>
              <Input {...register('date_of_birth')} type="date" id="date_of_birth" className="bg-input border-border" />
              {errors.date_of_birth && <p className="text-destructive text-xs mt-1">{errors.date_of_birth.message}</p>}
            </div>
          </div>
        </div>

        {/* Address */}
        <div>
          <h4 className="font-oswald text-lg font-semibold mb-4 text-primary">Address</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <Label htmlFor="address">Street Address *</Label>
              <Input {...register('address')} id="address" className="bg-input border-border" />
              {errors.address && <p className="text-destructive text-xs mt-1">{errors.address.message}</p>}
            </div>
            <div>
              <Label htmlFor="city">City *</Label>
              <Input {...register('city')} id="city" className="bg-input border-border" />
              {errors.city && <p className="text-destructive text-xs mt-1">{errors.city.message}</p>}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="state">State *</Label>
                <Input {...register('state')} id="state" className="bg-input border-border" />
                {errors.state && <p className="text-destructive text-xs mt-1">{errors.state.message}</p>}
              </div>
              <div>
                <Label htmlFor="zip">ZIP *</Label>
                <Input {...register('zip')} id="zip" className="bg-input border-border" />
                {errors.zip && <p className="text-destructive text-xs mt-1">{errors.zip.message}</p>}
              </div>
            </div>
          </div>
        </div>

        {/* Parent/Guardian (optional) */}
        <div>
          <h4 className="font-oswald text-lg font-semibold mb-2 text-primary">Parent/Guardian Info</h4>
          <p className="text-muted-foreground text-xs mb-4">Required for students under 18</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="parent_name">Parent/Guardian Name</Label>
              <Input {...register('parent_name')} id="parent_name" className="bg-input border-border" />
            </div>
            <div>
              <Label htmlFor="parent_email">Parent/Guardian Email</Label>
              <Input {...register('parent_email')} type="email" id="parent_email" className="bg-input border-border" />
            </div>
            <div>
              <Label htmlFor="parent_phone">Parent/Guardian Phone</Label>
              <Input {...register('parent_phone')} type="tel" id="parent_phone" className="bg-input border-border" />
            </div>
          </div>
        </div>

        {/* Musical Background */}
        <div>
          <h4 className="font-oswald text-lg font-semibold mb-4 text-primary">Musical Background</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="primary_instrument">Primary Instrument *</Label>
              <Select onValueChange={(v) => setValue('primary_instrument', v)}>
                <SelectTrigger className="bg-input border-border">
                  <SelectValue placeholder="Select instrument" />
                </SelectTrigger>
                <SelectContent>
                  {instruments.map(inst => (
                    <SelectItem key={inst} value={inst}>{inst}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.primary_instrument && <p className="text-destructive text-xs mt-1">{errors.primary_instrument.message}</p>}
            </div>
            <div>
              <Label htmlFor="experience_level">Experience Level *</Label>
              <Select defaultValue="beginner" onValueChange={(v: any) => setValue('experience_level', v)}>
                <SelectTrigger className="bg-input border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="years_playing">Years Playing</Label>
              <Input {...register('years_playing')} type="number" min="0" id="years_playing" className="bg-input border-border" />
            </div>
            <div>
              <Label htmlFor="other_instruments">Other Instruments</Label>
              <Input {...register('other_instruments')} id="other_instruments" placeholder="e.g., Guitar, Piano" className="bg-input border-border" />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="musical_goals">Musical Goals</Label>
              <Textarea {...register('musical_goals')} id="musical_goals" rows={3} placeholder="What do you hope to achieve?" className="bg-input border-border" />
            </div>
          </div>
        </div>

        {/* Audition Video (Rock Band only) */}
        {programType === 'rock_band' && (
          <div>
            <h4 className="font-oswald text-lg font-semibold mb-2 text-primary">Audition Video</h4>
            <p className="text-muted-foreground text-xs mb-4">
              Upload a video demonstrating your musical skill and personality. It doesn't need to be high quality—
              we just want to see you play! (Max 100MB)
            </p>
            <div className="border-2 border-dashed border-border rounded-sm p-6 text-center hover:border-primary/50 transition-colors">
              {videoFile ? (
                <div className="flex items-center justify-center gap-4">
                  <span className="text-sm">{videoFile.name}</span>
                  <button type="button" onClick={() => setVideoFile(null)} className="text-destructive hover:text-destructive/80">
                    <X size={20} />
                  </button>
                </div>
              ) : (
                <label className="cursor-pointer block">
                  <Upload className="w-10 h-10 mx-auto mb-2 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Click to upload video</span>
                  <input type="file" accept="video/*" onChange={handleVideoChange} className="hidden" />
                </label>
              )}
            </div>
            {uploadProgress > 0 && uploadProgress < 100 && (
              <div className="mt-2 bg-muted rounded-full h-2 overflow-hidden">
                <div className="bg-primary h-full transition-all" style={{ width: `${uploadProgress}%` }} />
              </div>
            )}
          </div>
        )}

        {/* Availability */}
        <div>
          <h4 className="font-oswald text-lg font-semibold mb-4 text-primary">Availability & Other</h4>
          <div className="grid gap-4">
            <div>
              <Label htmlFor="availability">Your Availability *</Label>
              <Textarea {...register('availability')} id="availability" rows={2} placeholder="e.g., Weekday evenings after 5pm, Saturday mornings" className="bg-input border-border" />
              {errors.availability && <p className="text-destructive text-xs mt-1">{errors.availability.message}</p>}
            </div>
            <div>
              <Label htmlFor="referral_source">How did you hear about us?</Label>
              <Input {...register('referral_source')} id="referral_source" placeholder="Friend, social media, etc." className="bg-input border-border" />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-rock w-full py-4 rounded-sm text-lg flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isSubmitting && <Loader2 className="w-5 h-5 animate-spin" />}
          {programType === 'rock_band' ? 'Submit Audition' : 'Enroll Now'}
        </button>

        {programType === 'band_practice' && (
          <p className="text-center text-sm text-muted-foreground">
            Your first class is <span className="text-primary font-semibold">FREE</span>! 
            Payment ($100/month) is due at the end of your first class if you wish to continue.
          </p>
        )}
      </form>
    </div>
  );
};

export default EnrollmentForm;
