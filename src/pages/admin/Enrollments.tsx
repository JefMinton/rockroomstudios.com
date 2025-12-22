import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Download } from 'lucide-react';

interface Enrollment {
  id: string;
  created_at: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  program_type: string;
  primary_instrument: string;
  experience_level: string;
  status: string;
}

const Enrollments = () => {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const fetchEnrollments = async () => {
    try {
      const { data, error } = await supabase
        .from('enrollments')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setEnrollments(data || []);
    } catch (error: any) {
      toast.error('Failed to load enrollments');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = () => {
    if (enrollments.length === 0) {
      toast.error('No enrollments to export');
      return;
    }

    const headers = [
      'Date',
      'Name',
      'Email',
      'Phone',
      'Program',
      'Instrument',
      'Experience',
      'Status',
    ];

    const rows = enrollments.map((e) => [
      new Date(e.created_at).toLocaleDateString(),
      `${e.first_name} ${e.last_name}`,
      e.email,
      e.phone,
      e.program_type === 'rock_band' ? 'Rock Band' : 'Rock Class',
      e.primary_instrument,
      e.experience_level,
      e.status,
    ]);

    const csv = [
      headers.join(','),
      ...rows.map((row) => row.map((cell) => `"${cell}"`).join(',')),
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `enrollments-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);

    toast.success('Enrollments exported successfully');
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, 'default' | 'secondary' | 'destructive'> = {
      pending: 'default',
      contacted: 'secondary',
      enrolled: 'secondary',
    };

    return (
      <Badge variant={variants[status] || 'default'}>
        {status}
      </Badge>
    );
  };

  if (loading) {
    return (
      <div className="p-8">
        <div className="text-center text-primary">Loading enrollments...</div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-oswald text-4xl font-bold mb-2">Enrollments</h1>
          <p className="text-muted-foreground">
            View and manage student enrollment submissions
          </p>
        </div>
        <Button onClick={exportToCSV} className="btn-rock">
          <Download className="w-4 h-4 mr-2" />
          Export to CSV
        </Button>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Program</TableHead>
              <TableHead>Instrument</TableHead>
              <TableHead>Experience</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {enrollments.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center text-muted-foreground">
                  No enrollments yet
                </TableCell>
              </TableRow>
            ) : (
              enrollments.map((enrollment) => (
                <TableRow key={enrollment.id}>
                  <TableCell>
                    {new Date(enrollment.created_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="font-medium">
                    {enrollment.first_name} {enrollment.last_name}
                  </TableCell>
                  <TableCell>{enrollment.email}</TableCell>
                  <TableCell>{enrollment.phone}</TableCell>
                  <TableCell>
                    {enrollment.program_type === 'rock_band' ? 'Rock Band' : 'Rock Class'}
                  </TableCell>
                  <TableCell>{enrollment.primary_instrument}</TableCell>
                  <TableCell className="capitalize">{enrollment.experience_level}</TableCell>
                  <TableCell>{getStatusBadge(enrollment.status)}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Card>

      <div className="mt-6 p-4 bg-muted/30 rounded-sm text-sm text-muted-foreground">
        <p className="font-semibold mb-2">Note:</p>
        <p>
          Enrollment data is stored in Supabase. To update the status or add notes, use the
          Supabase dashboard directly.
        </p>
      </div>
    </div>
  );
};

export default Enrollments;
