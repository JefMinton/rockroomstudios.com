import { Card } from '@/components/ui/card';
import { FileText, Music, Info, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const sections = [
    {
      title: 'Hero Section',
      description: 'Edit the main hero section content',
      icon: FileText,
      link: '/admin/hero',
      color: 'text-primary',
    },
    {
      title: 'Programs',
      description: 'Manage Rock Class and Rock Band programs',
      icon: Music,
      link: '/admin/programs',
      color: 'text-primary',
    },
    {
      title: 'About Section',
      description: 'Update about section and features',
      icon: Info,
      link: '/admin/about',
      color: 'text-primary',
    },
    {
      title: 'Enrollments',
      description: 'View and manage student enrollments',
      icon: Users,
      link: '/admin/enrollments',
      color: 'text-secondary',
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-oswald text-4xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Manage Rock Room Studios website content
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {sections.map((section) => (
          <Link key={section.link} to={section.link}>
            <Card className="p-6 hover:border-primary/50 transition-all duration-300 cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-sm">
                  <section.icon className={`w-6 h-6 ${section.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-oswald text-xl font-semibold mb-1">
                    {section.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {section.description}
                  </p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <Card className="mt-8 p-6 bg-muted/30">
        <h3 className="font-oswald text-lg font-semibold mb-3">Quick Guide</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Click on any section above to edit its content</li>
          <li>• Content is stored as JSON files in the repository</li>
          <li>• Edit the JSON, validate it, then copy and commit to GitHub</li>
          <li>• Changes will go live after the next deployment</li>
        </ul>
      </Card>
    </div>
  );
};

export default Dashboard;
