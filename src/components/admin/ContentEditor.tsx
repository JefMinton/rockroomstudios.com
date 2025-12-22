import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';
import { toast } from 'sonner';

interface ContentEditorProps {
  title: string;
  content: any;
  onContentChange: (content: any) => void;
}

const ContentEditor = ({ title, content, onContentChange }: ContentEditorProps) => {
  const [editedContent, setEditedContent] = useState(JSON.stringify(content, null, 2));
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(editedContent);
    setCopied(true);
    toast.success('Content copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleUpdate = () => {
    try {
      const parsed = JSON.parse(editedContent);
      onContentChange(parsed);
      toast.success('Content validated successfully! Copy and commit to the repository.');
    } catch (error) {
      toast.error('Invalid JSON format. Please check your syntax.');
    }
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-oswald text-2xl font-bold">{title}</h2>
        <div className="flex gap-2">
          <Button onClick={handleUpdate} variant="outline">
            Validate JSON
          </Button>
          <Button onClick={handleCopy} className="btn-rock">
            {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
            {copied ? 'Copied!' : 'Copy JSON'}
          </Button>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">Edit Content (JSON)</label>
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="w-full min-h-[400px] p-4 font-mono text-sm bg-muted/30 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        
        <div className="text-sm text-muted-foreground">
          <p className="font-semibold mb-2">Instructions:</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Edit the JSON content above</li>
            <li>Click "Validate JSON" to check for errors</li>
            <li>Click "Copy JSON" to copy the validated content</li>
            <li>Save the content to the appropriate file in <code className="bg-muted px-1 py-0.5 rounded">src/content/</code></li>
            <li>Commit and push the changes to GitHub</li>
          </ol>
        </div>
      </div>
    </Card>
  );
};

export default ContentEditor;
