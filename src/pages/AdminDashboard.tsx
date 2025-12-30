import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { FileText, Users, Settings, Home, Loader2 } from 'lucide-react';
import logo from '@/assets/rockroom-logo.png';

export default function AdminDashboard() {
  const { user, isAdmin, isLoading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && (!user || !isAdmin)) {
      navigate('/admin/login');
    }
  }, [user, isAdmin, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user || !isAdmin) return null;

  const menuItems = [
    {
      title: 'View Enrollments',
      description: 'Review and manage student enrollment submissions',
      icon: FileText,
      href: '/admin/enrollments',
      color: 'bg-primary/20 text-primary'
    },
    {
      title: 'Manage Users',
      description: 'Add or remove authorized admin users',
      icon: Users,
      href: '/admin/users',
      color: 'bg-secondary/20 text-secondary'
    },
    {
      title: 'Site Settings',
      description: 'Update site content, images, and configuration',
      icon: Settings,
      href: '/admin/settings',
      color: 'bg-muted text-foreground'
    },
    {
      title: 'View Site',
      description: 'Return to the public site with edit mode enabled',
      icon: Home,
      href: '/',
      color: 'bg-primary/10 text-primary'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src={logo} 
              alt="Rock Fu" 
              className="h-12 w-auto drop-shadow-[0_0_8px_hsl(var(--primary))]" 
            />
            <div>
              <h1 className="font-oswald text-xl font-bold">Admin Dashboard</h1>
              <p className="text-xs text-muted-foreground">{user.email}</p>
            </div>
          </div>
          <button
            onClick={signOut}
            className="btn-rock-outline px-4 py-2 rounded-sm text-sm"
          >
            Sign Out
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="rock-card p-6 rounded-sm hover:border-primary/50 transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] group"
            >
              <div className={`w-12 h-12 rounded-sm ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon size={24} />
              </div>
              <h2 className="font-oswald text-xl font-bold mb-2">{item.title}</h2>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
