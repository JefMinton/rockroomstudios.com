import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Loader2, ArrowLeft, Image, Type, Palette, Save } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface ContentSection {
  id: string;
  content: Record<string, string>;
  updated_at?: string;
  updated_by?: string;
}

type JsonContent = Record<string, unknown>;

export default function AdminSettings() {
  const { user, isAdmin, isLoading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [sections, setSections] = useState<ContentSection[]>([]);

  useEffect(() => {
    if (!authLoading && (!user || !isAdmin)) {
      navigate('/admin/login');
    }
  }, [user, isAdmin, authLoading, navigate]);

  useEffect(() => {
    if (user && isAdmin) {
      fetchContent();
    }
  }, [user, isAdmin]);

  const fetchContent = async () => {
    try {
      const { data, error } = await supabase
        .from('editable_content')
        .select('*');

      if (error) throw error;
      const mapped = (data || []).map(item => ({
        id: item.id,
        content: (typeof item.content === 'object' && item.content !== null && !Array.isArray(item.content)) 
          ? item.content as Record<string, string> 
          : {}
      }));
      setSections(mapped);
    } catch (err) {
      toast.error('Failed to load content');
    } finally {
      setIsLoading(false);
    }
  };

  const updateField = (sectionId: string, field: string, value: string) => {
    setSections(prev => prev.map(s => {
      if (s.id === sectionId) {
        return { ...s, content: { ...s.content, [field]: value } };
      }
      return s;
    }));
  };

  const saveAll = async () => {
    setIsSaving(true);
    try {
      for (const section of sections) {
        const { error } = await supabase
          .from('editable_content')
          .upsert({
            id: section.id,
            content: section.content,
            updated_at: new Date().toISOString()
          });
        
        if (error) throw error;
      }
      toast.success('All changes saved!');
    } catch (err) {
      toast.error('Failed to save changes');
    } finally {
      setIsSaving(false);
    }
  };

  if (authLoading || isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user || !isAdmin) return null;

  const heroSection = sections.find(s => s.id === 'hero');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/admin" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft size={24} />
            </Link>
            <h1 className="font-oswald text-xl font-bold">Site Settings</h1>
          </div>
          <button
            onClick={saveAll}
            disabled={isSaving}
            className="btn-rock px-4 py-2 rounded-sm flex items-center gap-2"
          >
            {isSaving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
            Save All
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Hero Section */}
        <div className="rock-card p-6 rounded-sm mb-6">
          <h2 className="font-oswald text-lg font-semibold mb-4 flex items-center gap-2">
            <Type size={20} className="text-primary" />
            Hero Section
          </h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="hero-title">Main Title</Label>
              <Input
                id="hero-title"
                value={heroSection?.content.title || ''}
                onChange={(e) => updateField('hero', 'title', e.target.value)}
                className="bg-input border-border font-oswald text-xl"
              />
            </div>
            <div>
              <Label htmlFor="hero-subtitle">Subtitle</Label>
              <Input
                id="hero-subtitle"
                value={heroSection?.content.subtitle || ''}
                onChange={(e) => updateField('hero', 'subtitle', e.target.value)}
                className="bg-input border-border"
              />
            </div>
            <div>
              <Label htmlFor="hero-tagline">Tagline</Label>
              <Input
                id="hero-tagline"
                value={heroSection?.content.tagline || ''}
                onChange={(e) => updateField('hero', 'tagline', e.target.value)}
                className="bg-input border-border"
              />
            </div>
            <div>
              <Label htmlFor="hero-description">Description</Label>
              <Textarea
                id="hero-description"
                value={heroSection?.content.description || ''}
                onChange={(e) => updateField('hero', 'description', e.target.value)}
                className="bg-input border-border"
                rows={3}
              />
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="rock-card p-6 rounded-sm">
          <h2 className="font-oswald text-lg font-semibold mb-4 flex items-center gap-2">
            <Palette size={20} className="text-primary" />
            Edit Mode Instructions
          </h2>
          <div className="text-sm text-muted-foreground space-y-2">
            <p>For quick inline editing on the live site:</p>
            <ol className="list-decimal list-inside space-y-1 ml-2">
              <li>Return to the main site using the "View Site" option</li>
              <li>Click the pencil icon in the bottom-right corner</li>
              <li>Click "Edit Mode" to enable inline editing</li>
              <li>Click on any editable text to modify it directly</li>
              <li>Changes are saved automatically when you confirm</li>
            </ol>
          </div>
        </div>
      </main>
    </div>
  );
}
