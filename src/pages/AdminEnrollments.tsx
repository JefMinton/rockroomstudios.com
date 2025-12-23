import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { 
  Loader2, 
  ArrowLeft, 
  Eye, 
  Download, 
  Trash2, 
  CheckCircle,
  Clock,
  XCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Enrollment {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  date_of_birth: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  parent_name: string | null;
  parent_email: string | null;
  parent_phone: string | null;
  primary_instrument: string;
  experience_level: string;
  years_playing: number | null;
  musical_goals: string | null;
  other_instruments: string | null;
  availability: string;
  referral_source: string | null;
  program_type: string;
  status: string;
  audition_video_url: string | null;
  created_at: string;
}

export default function AdminEnrollments() {
  const { user, isAdmin, isLoading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    if (!authLoading && (!user || !isAdmin)) {
      navigate('/admin/login');
    }
  }, [user, isAdmin, authLoading, navigate]);

  useEffect(() => {
    if (user && isAdmin) {
      fetchEnrollments();
    }
  }, [user, isAdmin]);

  const fetchEnrollments = async () => {
    try {
      const { data, error } = await supabase
        .from('enrollments')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setEnrollments(data || []);
    } catch (err) {
      toast.error('Failed to load enrollments');
    } finally {
      setIsLoading(false);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('enrollments')
        .update({ status })
        .eq('id', id);

      if (error) throw error;
      
      setEnrollments(prev => prev.map(e => e.id === id ? { ...e, status } : e));
      toast.success(`Status updated to ${status}`);
    } catch (err) {
      toast.error('Failed to update status');
    }
  };

  const deleteEnrollment = async (id: string) => {
    if (!confirm('Are you sure you want to delete this enrollment?')) return;
    
    try {
      const { error } = await supabase
        .from('enrollments')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      setEnrollments(prev => prev.filter(e => e.id !== id));
      toast.success('Enrollment deleted');
    } catch (err) {
      toast.error('Failed to delete enrollment');
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return <CheckCircle className="text-primary" size={18} />;
      case 'rejected': return <XCircle className="text-destructive" size={18} />;
      default: return <Clock className="text-muted-foreground" size={18} />;
    }
  };

  const filteredEnrollments = filter === 'all' 
    ? enrollments 
    : enrollments.filter(e => e.program_type === filter || e.status === filter);

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Program', 'Instrument', 'Experience', 'Status', 'Date'];
    const rows = enrollments.map(e => [
      `${e.first_name} ${e.last_name}`,
      e.email,
      e.phone,
      e.program_type,
      e.primary_instrument,
      e.experience_level,
      e.status,
      new Date(e.created_at).toLocaleDateString()
    ]);
    
    const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `enrollments-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  if (authLoading || isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user || !isAdmin) return null;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/admin" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft size={24} />
            </Link>
            <h1 className="font-oswald text-xl font-bold">Enrollments</h1>
            <span className="text-sm text-muted-foreground">({enrollments.length} total)</span>
          </div>
          <div className="flex items-center gap-3">
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[160px] bg-input">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
                <SelectItem value="band_practice">Rock Class</SelectItem>
                <SelectItem value="rock_band">Rock Band</SelectItem>
              </SelectContent>
            </Select>
            <button onClick={exportToCSV} className="btn-rock-outline px-4 py-2 rounded-sm text-sm flex items-center gap-2">
              <Download size={16} />
              Export
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-6">
        {filteredEnrollments.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            No enrollments found.
          </div>
        ) : (
          <div className="space-y-4">
            {filteredEnrollments.map((enrollment) => (
              <div key={enrollment.id} className="rock-card rounded-sm overflow-hidden">
                {/* Summary Row */}
                <div 
                  className="p-4 flex items-center justify-between cursor-pointer hover:bg-muted/30 transition-colors"
                  onClick={() => setExpandedId(expandedId === enrollment.id ? null : enrollment.id)}
                >
                  <div className="flex items-center gap-4">
                    {getStatusIcon(enrollment.status)}
                    <div>
                      <p className="font-semibold">{enrollment.first_name} {enrollment.last_name}</p>
                      <p className="text-sm text-muted-foreground">{enrollment.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`text-xs px-2 py-1 rounded ${
                      enrollment.program_type === 'rock_band' ? 'bg-secondary/20 text-secondary' : 'bg-primary/20 text-primary'
                    }`}>
                      {enrollment.program_type === 'rock_band' ? 'Rock Band' : 'Rock Class'}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {new Date(enrollment.created_at).toLocaleDateString()}
                    </span>
                    {expandedId === enrollment.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedId === enrollment.id && (
                  <div className="border-t border-border p-4 bg-muted/10">
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Personal Info */}
                      <div>
                        <h4 className="font-oswald text-sm font-semibold text-primary mb-2">Personal Info</h4>
                        <div className="space-y-1 text-sm">
                          <p><span className="text-muted-foreground">Phone:</span> {enrollment.phone}</p>
                          <p><span className="text-muted-foreground">DOB:</span> {enrollment.date_of_birth}</p>
                          <p><span className="text-muted-foreground">Address:</span> {enrollment.address}</p>
                          <p>{enrollment.city}, {enrollment.state} {enrollment.zip}</p>
                        </div>
                      </div>

                      {/* Parent Info */}
                      {enrollment.parent_name && (
                        <div>
                          <h4 className="font-oswald text-sm font-semibold text-primary mb-2">Parent/Guardian</h4>
                          <div className="space-y-1 text-sm">
                            <p>{enrollment.parent_name}</p>
                            <p>{enrollment.parent_email}</p>
                            <p>{enrollment.parent_phone}</p>
                          </div>
                        </div>
                      )}

                      {/* Musical Info */}
                      <div>
                        <h4 className="font-oswald text-sm font-semibold text-primary mb-2">Musical Background</h4>
                        <div className="space-y-1 text-sm">
                          <p><span className="text-muted-foreground">Instrument:</span> {enrollment.primary_instrument}</p>
                          <p><span className="text-muted-foreground">Level:</span> {enrollment.experience_level}</p>
                          {enrollment.years_playing && (
                            <p><span className="text-muted-foreground">Years:</span> {enrollment.years_playing}</p>
                          )}
                          {enrollment.other_instruments && (
                            <p><span className="text-muted-foreground">Other:</span> {enrollment.other_instruments}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Additional Details */}
                    <div className="mt-4 grid md:grid-cols-2 gap-4">
                      {enrollment.musical_goals && (
                        <div>
                          <h4 className="font-oswald text-sm font-semibold text-primary mb-1">Goals</h4>
                          <p className="text-sm text-muted-foreground">{enrollment.musical_goals}</p>
                        </div>
                      )}
                      <div>
                        <h4 className="font-oswald text-sm font-semibold text-primary mb-1">Availability</h4>
                        <p className="text-sm text-muted-foreground">{enrollment.availability}</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">Status:</span>
                        <Select value={enrollment.status} onValueChange={(v) => updateStatus(enrollment.id, v)}>
                          <SelectTrigger className="w-[130px] bg-input h-8 text-sm">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="approved">Approved</SelectItem>
                            <SelectItem value="rejected">Rejected</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <button
                        onClick={() => deleteEnrollment(enrollment.id)}
                        className="text-destructive hover:text-destructive/80 flex items-center gap-1 text-sm"
                      >
                        <Trash2 size={16} />
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
