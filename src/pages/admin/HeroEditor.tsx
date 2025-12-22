import ContentEditor from '@/components/admin/ContentEditor';
import { useHeroContent } from '@/hooks/useContent';

const HeroEditor = () => {
  const content = useHeroContent();

  const handleContentChange = (newContent: any) => {
    // Content validation successful
    // User must manually save to src/content/hero.json and commit
    console.log('Validated content:', newContent);
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-oswald text-4xl font-bold mb-2">Edit Hero Section</h1>
        <p className="text-muted-foreground">
          Update the main hero section content displayed on the homepage
        </p>
      </div>

      <ContentEditor
        title="Hero Content"
        content={content}
        onContentChange={handleContentChange}
      />

      <div className="mt-6 p-4 bg-muted/30 rounded-sm text-sm text-muted-foreground">
        <p className="font-semibold mb-2">File location:</p>
        <code className="bg-muted px-2 py-1 rounded">src/content/hero.json</code>
        <p className="mt-3 text-xs">
          Note: Changes must be manually saved to the file and committed to the repository.
          This editor validates and formats your JSON for easy copying.
        </p>
      </div>
    </div>
  );
};

export default HeroEditor;
