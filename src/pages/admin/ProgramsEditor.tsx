import ContentEditor from '@/components/admin/ContentEditor';
import { useProgramsContent } from '@/hooks/useContent';

const ProgramsEditor = () => {
  const content = useProgramsContent();

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-oswald text-4xl font-bold mb-2">Edit Programs</h1>
        <p className="text-muted-foreground">
          Manage Rock Class and Rock Band program details, pricing, and features
        </p>
      </div>

      <ContentEditor
        title="Programs Content"
        content={content}
        onContentChange={(newContent) => {
          console.log('Updated content:', newContent);
        }}
      />

      <div className="mt-6 p-4 bg-muted/30 rounded-sm text-sm text-muted-foreground">
        <p className="font-semibold mb-2">File location:</p>
        <code className="bg-muted px-2 py-1 rounded">src/content/programs.json</code>
      </div>
    </div>
  );
};

export default ProgramsEditor;
