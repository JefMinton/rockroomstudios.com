import ContentEditor from '@/components/admin/ContentEditor';
import { useAboutContent } from '@/hooks/useContent';

const AboutEditor = () => {
  const content = useAboutContent();

  const handleContentChange = (newContent: any) => {
    // Content validation successful
    // User must manually save to src/content/about.json and commit
    console.log('Validated content:', newContent);
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-oswald text-4xl font-bold mb-2">Edit About Section</h1>
        <p className="text-muted-foreground">
          Update the about section, features, and value proposition
        </p>
      </div>

      <ContentEditor
        title="About Content"
        content={content}
        onContentChange={handleContentChange}
      />

      <div className="mt-6 p-4 bg-muted/30 rounded-sm text-sm text-muted-foreground">
        <p className="font-semibold mb-2">File location:</p>
        <code className="bg-muted px-2 py-1 rounded">src/content/about.json</code>
        <p className="mt-3 text-xs">
          Note: Changes must be manually saved to the file and committed to the repository.
          This editor validates and formats your JSON for easy copying.
        </p>
      </div>
    </div>
  );
};

export default AboutEditor;
