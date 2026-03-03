import TextareaAutosize from "@mui/material/TextareaAutosize";
import type { ChangeEventHandler } from "react";
import { useGlobal } from "./useGlobal";
import { label } from "./labels";

export default function TextArea({
  value,
  onChange,
}: {
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement, HTMLTextAreaElement>;
}) {
  const { modeTK } = useGlobal();
  return (
    <TextareaAutosize
      minRows={3}
      maxRows={10}
      value={value}
      onChange={onChange}
      aria-label="empty textarea"
      placeholder={label(modeTK, "E hookomo i ka olelo i loko nei")}
      className="w-full h-full bg-neutral-100 rounded-lg p-4"
      style={{ margin: 0 }}
    />
  );
}
