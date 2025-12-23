import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Loader2, ArrowLeft, UserPlus, Trash2, Shield } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface AuthorizedAdmin {
  id: string;
  email: string;
  name: string | null;
  created_at: string;
}

export default function AdminUsers() {
  const { user, isAdmin, isLoading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [admins, setAdmins] = useState<AuthorizedAdmin[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newEmail, setNewEmail] = useState('');
  const [newName, setNewName] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    if (!authLoading && (!user || !isAdmin)) {
      navigate('/admin/login');
    }
  }, [user, isAdmin, authLoading, navigate]);

  useEffect(() => {
    if (user && isAdmin) {
      fetchAdmins();
    }
  }, [user, isAdmin]);

  const fetchAdmins = async () => {
    try {
      const { data, error } = await supabase
        .from('authorized_admins')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) throw error;
      setAdmins(data || []);
    } catch (err) {
      toast.error('Failed to load authorized users');
    } finally {
      setIsLoading(false);
    }
  };

  const addAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmail.trim()) return;

    setIsAdding(true);
    try {
      const { error } = await supabase
        .from('authorized_admins')
        .insert({
          email: newEmail.trim().toLowerCase(),
          name: newName.trim() || null,
          added_by: user?.id
        });

      if (error) {
        if (error.message.includes('duplicate')) {
          toast.error('This email is already authorized');
        } else {
          throw error;
        }
        return;
      }
      
      toast.success('Admin added! They can now sign in with Google.');
      setNewEmail('');
      setNewName('');
      fetchAdmins();
    } catch (err) {
      toast.error('Failed to add admin');
    } finally {
      setIsAdding(false);
    }
  };

  const removeAdmin = async (id: string, email: string) => {
    if (email === user?.email) {
      toast.error("You can't remove yourself!");
      return;
    }
    
    if (!confirm(`Remove ${email} from authorized admins?`)) return;

    try {
      const { error } = await supabase
        .from('authorized_admins')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      setAdmins(prev => prev.filter(a => a.id !== id));
      toast.success('Admin removed');
    } catch (err) {
      toast.error('Failed to remove admin');
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

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link to="/admin" className="text-muted-foreground hover:text-foreground">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="font-oswald text-xl font-bold">Manage Users</h1>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Add New Admin */}
        <div className="rock-card p-6 rounded-sm mb-8">
          <h2 className="font-oswald text-lg font-semibold mb-4 flex items-center gap-2">
            <UserPlus size={20} className="text-primary" />
            Add Authorized Admin
          </h2>
          <form onSubmit={addAdmin} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Google Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="user@gmail.com"
                  className="bg-input border-border"
                  required
                />
              </div>
              <div>
                <Label htmlFor="name">Name (optional)</Label>
                <Input
                  id="name"
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="John Doe"
                  className="bg-input border-border"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={isAdding}
              className="btn-rock px-6 py-2 rounded-sm flex items-center gap-2"
            >
              {isAdding && <Loader2 size={16} className="animate-spin" />}
              Add Admin
            </button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">
            Added users can sign in with Google using the specified email address.
          </p>
        </div>

        {/* Current Admins */}
        <div className="rock-card p-6 rounded-sm">
          <h2 className="font-oswald text-lg font-semibold mb-4 flex items-center gap-2">
            <Shield size={20} className="text-primary" />
            Authorized Admins ({admins.length})
          </h2>
          
          {admins.length === 0 ? (
            <p className="text-muted-foreground text-sm">No authorized admins found.</p>
          ) : (
            <div className="space-y-3">
              {admins.map((admin) => (
                <div 
                  key={admin.id} 
                  className="flex items-center justify-between p-3 bg-muted/30 rounded"
                >
                  <div>
                    <p className="font-medium">{admin.name || 'Unnamed'}</p>
                    <p className="text-sm text-muted-foreground">{admin.email}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {admin.email === user.email && (
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">You</span>
                    )}
                    {admin.email !== user.email && (
                      <button
                        onClick={() => removeAdmin(admin.id, admin.email)}
                        className="text-destructive hover:text-destructive/80 p-1"
                        title="Remove admin"
                      >
                        <Trash2 size={18} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
