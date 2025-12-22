import ContentEditor from '@/components/admin/ContentEditor';
import { useHeroContent } from '@/hooks/useContent';

const HeroEditor = () => {
  const content = useHeroContent();

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
        onContentChange={(newContent) => {
          console.log('Updated content:', newContent);
        }}
      />

      <div className="mt-6 p-4 bg-muted/30 rounded-sm text-sm text-muted-foreground">
        <p className="font-semibold mb-2">File location:</p>
        <code className="bg-muted px-2 py-1 rounded">src/content/hero.json</code>
      </div>
    </div>
  );
};

export default HeroEditor;
