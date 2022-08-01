interface Props {
    defaultValue: string;
    onChange: (val: string) => void;
    label?: string;
    isExpandable?: boolean;
}
declare const CodeBlockEditor: ({ defaultValue, onChange, label, isExpandable, }: Props) => JSX.Element;

export { CodeBlockEditor as CodeBlock };
