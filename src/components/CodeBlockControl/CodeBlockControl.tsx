import React from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import {
  rankWith,
  ControlProps,
  JsonSchema,
  and,
  uiTypeIs,
} from "@jsonforms/core";
import CodeBlock from "../CodeBlock/CodeBlock";

type CustomProps = {
  isExpandable: boolean;
};

type JsonSchemaWithCustomProps = JsonSchema & CustomProps;

const CodeBlockControl = ({
  data,
  handleChange,
  path,
  ...props
}: ControlProps) => {
  const schema = props.schema as JsonSchemaWithCustomProps;

  return (
    <CodeBlock
      defaultValue={data}
      onChange={(value: string) => handleChange(path, value)}
      label={schema.title}
      isExpandable={schema.isExpandable}
    />
  );
};

export const CodeBlockControlTester = rankWith(3, and(uiTypeIs("CodeBlock")));

export default withJsonFormsControlProps(CodeBlockControl);
