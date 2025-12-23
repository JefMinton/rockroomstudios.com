import { useState, useRef, useEffect } from 'react';
import { useEditMode } from '@/contexts/EditModeContext';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Pencil, Check, X } from 'lucide-react';

interface EditableTextProps {
  contentId: string;
  field: string;
  defaultValue: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
}

export function EditableText({ 
  contentId, 
  field, 
  defaultValue, 
  className = '', 
  as: Component = 'span' 
}: EditableTextProps) {
  const { isEditMode } = useEditMode();
  const { isAdmin } = useAuth();
  const [value, setValue] = useState(defaultValue);
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(defaultValue);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    // Load content from database
    loadContent();
  }, [contentId, field]);

  const loadContent = async () => {
    try {
      const { data, error } = await supabase
        .from('editable_content')
        .select('content')
        .eq('id', contentId)
        .single();
      
      if (!error && data?.content && data.content[field]) {
        setValue(data.content[field]);
        setTempValue(data.content[field]);
      }
    } catch (err) {
      // Use default value if not found
    }
  };

  const saveContent = async () => {
    try {
      // First get existing content
      const { data: existing } = await supabase
        .from('editable_content')
        .select('content')
        .eq('id', contentId)
        .single();

      const existingContent = (existing?.content && typeof existing.content === 'object' && !Array.isArray(existing.content)) 
        ? existing.content as Record<string, string>
        : {};

      const newContent = {
        ...existingContent,
        [field]: tempValue
      };

      const { error } = await supabase
        .from('editable_content')
        .upsert({
          id: contentId,
          content: newContent,
          updated_at: new Date().toISOString()
        });

      if (error) throw error;
      
      setValue(tempValue);
      setIsEditing(false);
      toast.success('Content saved!');
    } catch (err) {
      toast.error('Failed to save content');
    }
  };

  const cancelEdit = () => {
    setTempValue(value);
    setIsEditing(false);
  };

  const startEditing = () => {
    setTempValue(value);
    setIsEditing(true);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  if (!isAdmin || !isEditMode) {
    return <Component className={className}>{value}</Component>;
  }

  if (isEditing) {
    const isMultiline = value.length > 100 || value.includes('\n');
    
    return (
      <div className="relative inline-flex items-start gap-2 w-full">
        {isMultiline ? (
          <textarea
            ref={inputRef as React.RefObject<HTMLTextAreaElement>}
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            className={`${className} bg-primary/10 border border-primary rounded px-2 py-1 min-w-[200px] w-full`}
            rows={3}
          />
        ) : (
          <input
            ref={inputRef as React.RefObject<HTMLInputElement>}
            type="text"
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            className={`${className} bg-primary/10 border border-primary rounded px-2 py-1 min-w-[200px]`}
          />
        )}
        <button onClick={saveContent} className="p-1 bg-primary text-primary-foreground rounded hover:bg-primary/80">
          <Check size={16} />
        </button>
        <button onClick={cancelEdit} className="p-1 bg-destructive text-destructive-foreground rounded hover:bg-destructive/80">
          <X size={16} />
        </button>
      </div>
    );
  }

  return (
    <Component 
      className={`${className} cursor-pointer relative group border border-transparent hover:border-primary hover:border-dashed rounded px-1 -mx-1`}
      onClick={startEditing}
    >
      {value}
      <Pencil 
        size={14} 
        className="absolute -right-5 top-1/2 -translate-y-1/2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" 
      />
    </Component>
  );
}
