import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import logo from '@/assets/rockroom-logo.png';

export default function AdminLogin() {
  const { user, isAdmin, isLoading, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && user) {
      if (isAdmin) {
        navigate('/admin');
      } else {
        toast.error('You are not authorized to access the admin area.');
      }
    }
  }, [user, isAdmin, isLoading, navigate]);

  const handleGoogleLogin = async () => {
    const { error } = await signInWithGoogle();
    if (error) {
      toast.error('Failed to sign in with Google');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="rock-card p-8 max-w-md w-full rounded-sm text-center">
        <img 
          src={logo} 
          alt="Rock Room" 
          className="h-24 w-auto mx-auto mb-6 drop-shadow-[0_0_12px_hsl(var(--primary))]" 
        />
        
        <h1 className="font-oswald text-3xl font-bold mb-2">Admin Access</h1>
        <p className="text-muted-foreground mb-8">
          Sign in with your authorized Google account to access the admin panel.
        </p>
        
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 bg-card hover:bg-muted border border-border px-6 py-3 rounded-sm transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          <span className="font-medium">Sign in with Google</span>
        </button>
        
        <p className="text-xs text-muted-foreground mt-6">
          Only authorized administrators can access this area.
        </p>
      </div>
    </div>
  );
}
