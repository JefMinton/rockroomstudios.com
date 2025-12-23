import { useAuth } from '@/contexts/AuthContext';
import { useEditMode } from '@/contexts/EditModeContext';
import { 
  Pencil, 
  LogOut, 
  Users, 
  FileText, 
  Settings,
  Eye,
  EyeOff,
  X
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function AdminToolbar() {
  const { user, isAdmin, signOut } = useAuth();
  const { isEditMode, toggleEditMode } = useEditMode();
  const [isExpanded, setIsExpanded] = useState(false);

  if (!user || !isAdmin) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isExpanded ? (
        <div className="bg-card border border-border rounded-lg shadow-xl p-4 min-w-[240px]">
          <div className="flex justify-between items-center mb-4">
            <span className="font-oswald text-sm text-primary uppercase tracking-wider">Admin Panel</span>
            <button onClick={() => setIsExpanded(false)} className="text-muted-foreground hover:text-foreground">
              <X size={18} />
            </button>
          </div>
          
          <div className="space-y-2">
            <button 
              onClick={toggleEditMode}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded text-left transition-colors ${
                isEditMode ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
              }`}
            >
              {isEditMode ? <EyeOff size={18} /> : <Eye size={18} />}
              <span className="text-sm">{isEditMode ? 'Exit Edit Mode' : 'Edit Mode'}</span>
            </button>
            
            <Link 
              to="/admin/enrollments"
              className="w-full flex items-center gap-3 px-3 py-2 rounded text-left hover:bg-muted transition-colors"
            >
              <FileText size={18} />
              <span className="text-sm">View Enrollments</span>
            </Link>
            
            <Link 
              to="/admin/users"
              className="w-full flex items-center gap-3 px-3 py-2 rounded text-left hover:bg-muted transition-colors"
            >
              <Users size={18} />
              <span className="text-sm">Manage Users</span>
            </Link>
            
            <Link 
              to="/admin/settings"
              className="w-full flex items-center gap-3 px-3 py-2 rounded text-left hover:bg-muted transition-colors"
            >
              <Settings size={18} />
              <span className="text-sm">Site Settings</span>
            </Link>
            
            <hr className="border-border" />
            
            <div className="text-xs text-muted-foreground px-3 py-1 truncate">
              {user.email}
            </div>
            
            <button 
              onClick={signOut}
              className="w-full flex items-center gap-3 px-3 py-2 rounded text-left text-destructive hover:bg-destructive/10 transition-colors"
            >
              <LogOut size={18} />
              <span className="text-sm">Sign Out</span>
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsExpanded(true)}
          className="bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 neon-border"
          title="Admin Tools"
        >
          <Pencil size={24} />
        </button>
      )}
    </div>
  );
}
