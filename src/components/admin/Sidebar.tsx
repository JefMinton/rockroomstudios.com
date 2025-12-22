import { NavLink } from 'react-router-dom';
import { Home, FileText, Music, Info, Users, LogOut } from 'lucide-react';
import { signOut } from '@/lib/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success('Signed out successfully');
      navigate('/admin/login');
    } catch (error) {
      toast.error('Error signing out');
    }
  };

  const navItems = [
    { to: '/admin', icon: Home, label: 'Dashboard', end: true },
    { to: '/admin/hero', icon: FileText, label: 'Hero Section' },
    { to: '/admin/programs', icon: Music, label: 'Programs' },
    { to: '/admin/about', icon: Info, label: 'About' },
    { to: '/admin/enrollments', icon: Users, label: 'Enrollments' },
  ];

  return (
    <aside className="w-64 bg-muted/30 border-r border-border flex flex-col">
      <div className="p-6 border-b border-border">
        <h2 className="font-oswald text-xl font-bold text-primary">ROCK ROOM</h2>
        <p className="text-sm text-muted-foreground">Admin Panel</p>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-sm transition-colors ${
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-border">
        <button
          onClick={handleSignOut}
          className="flex items-center gap-3 px-4 py-2 w-full text-muted-foreground hover:bg-muted hover:text-foreground rounded-sm transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
