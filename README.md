## ℹ︎ About

The Fusebit Monaco jsonforms package enables you to easily integrate a monaco code editor to react with jsonforms.

## 📦 Install

```javascript

npm i @fusebit/monaco-jsonforms

```

## 🔨 Usage

```javascript
import { CodeBlock } from "@fusebit/monaco-jsonforms";

return (
  <CodeBlock
    defaultValue={props.defaultValue}
    onChange={(value: string) => props.handleChange(value)}
    label={props.label}
    isExpandable={props.isExpandable}
  />
);
```
