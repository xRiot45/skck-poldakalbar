import { Button } from '@/components/ui/button';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Color from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import { Table } from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import TextAlign from '@tiptap/extension-text-align';
import { TextStyle } from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { all, createLowlight } from 'lowlight';
import {
    Bold,
    CheckSquare,
    Code2,
    Heading1,
    Heading2,
    Heading3,
    Highlighter,
    ImageIcon,
    Italic,
    Link2,
    List,
    ListOrdered,
    Quote,
    Redo2,
    Strikethrough,
    Table as TableIcon,
    Underline as UnderlineIcon,
    Undo2,
    Unlink,
} from 'lucide-react';
import { useEffect } from 'react';

interface RichTextEditorProps {
    value: string;
    onChangeAction: (value: string) => void;
    error?: string | undefined;
}

export default function RichTextEditor({ value, onChangeAction, error }: RichTextEditorProps) {
    const lowlight = createLowlight(all);
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            CodeBlockLowlight.configure({ lowlight }),
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
            Highlight,
            Link.configure({ openOnClick: false }),
            Color,
            TextStyle,
            Image,
            TaskList,
            TaskItem.configure({ nested: true }),
            Table.configure({ resizable: true }),
            TableRow,
            TableCell,
            TableHeader,
        ],
        content: value,
        onUpdate({ editor }) {
            onChangeAction(editor.getHTML());
        },
    });

    useEffect(() => {
        if (editor && value !== editor.getHTML()) {
            editor.commands.setContent(value);
        }
    }, [editor, value]);

    if (!editor) return null;

    const toolbarButton = (icon: React.ReactNode, action: () => void, active?: boolean) => (
        <Button type="button" variant={active ? 'default' : 'ghost'} size="icon" onClick={action} className="rounded-md">
            {icon}
        </Button>
    );

    return (
        <div className={`overflow-hidden rounded-md border backdrop-blur-md ${error ? 'border-red-500' : ''}`}>
            <div className={`flex flex-wrap items-center gap-1 border-b bg-background/80 p-2 backdrop-blur-sm ${error ? 'border-red-500' : ''}`}>
                {toolbarButton(
                    <Heading1 className="h-4 w-4" />,
                    () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
                    editor.isActive('heading', { level: 1 }),
                )}
                {toolbarButton(
                    <Heading2 className="h-4 w-4" />,
                    () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
                    editor.isActive('heading', { level: 2 }),
                )}
                {toolbarButton(
                    <Heading3 className="h-4 w-4" />,
                    () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
                    editor.isActive('heading', { level: 3 }),
                )}
                {toolbarButton(<Bold className="h-4 w-4" />, () => editor.chain().focus().toggleBold().run(), editor.isActive('bold'))}
                {toolbarButton(<Italic className="h-4 w-4" />, () => editor.chain().focus().toggleItalic().run(), editor.isActive('italic'))}
                {toolbarButton(
                    <UnderlineIcon className="h-4 w-4" />,
                    () => editor.chain().focus().toggleUnderline().run(),
                    editor.isActive('underline'),
                )}
                {toolbarButton(<Strikethrough className="h-4 w-4" />, () => editor.chain().focus().toggleStrike().run(), editor.isActive('strike'))}
                {toolbarButton(
                    <Highlighter className="h-4 w-4" />,
                    () => editor.chain().focus().toggleHighlight().run(),
                    editor.isActive('highlight'),
                )}
                {toolbarButton(<List className="h-4 w-4" />, () => editor.chain().focus().toggleBulletList().run(), editor.isActive('bulletList'))}
                {toolbarButton(
                    <ListOrdered className="h-4 w-4" />,
                    () => editor.chain().focus().toggleOrderedList().run(),
                    editor.isActive('orderedList'),
                )}
                {toolbarButton(<CheckSquare className="h-4 w-4" />, () => editor.chain().focus().toggleTaskList().run(), editor.isActive('taskList'))}
                {toolbarButton(<Quote className="h-4 w-4" />, () => editor.chain().focus().toggleBlockquote().run(), editor.isActive('blockquote'))}
                {toolbarButton(<Code2 className="h-4 w-4" />, () => editor.chain().focus().toggleCodeBlock().run(), editor.isActive('codeBlock'))}
                {toolbarButton(
                    <Link2 className="h-4 w-4" />,
                    () => {
                        const url = window.prompt('Enter URL') || '';
                        editor.chain().focus().setLink({ href: url }).run();
                    },
                    editor.isActive('link'),
                )}
                {toolbarButton(<Unlink className="h-4 w-4" />, () => editor.chain().focus().unsetLink().run())}
                {toolbarButton(<ImageIcon className="h-4 w-4" />, () => {
                    const url = window.prompt('Image URL') || '';
                    if (url) editor.chain().focus().setImage({ src: url }).run();
                })}
                {toolbarButton(<TableIcon className="h-4 w-4" />, () =>
                    editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run(),
                )}
                {toolbarButton(<Undo2 className="h-4 w-4" />, () => editor.chain().focus().undo().run())}
                {toolbarButton(<Redo2 className="h-4 w-4" />, () => editor.chain().focus().redo().run())}
            </div>

            <div className="prose prose-sm dark:prose-invert max-w-full p-4 [&_.ProseMirror]:min-h-[200px] [&_.ProseMirror]:bg-transparent [&_.ProseMirror]:leading-relaxed [&_.ProseMirror]:tracking-normal [&_.ProseMirror]:text-foreground [&_.ProseMirror]:focus:outline-none [&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:pl-5">
                <EditorContent editor={editor} />
            </div>
        </div>
    );
}
