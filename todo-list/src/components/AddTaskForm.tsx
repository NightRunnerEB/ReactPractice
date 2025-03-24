import React, { useRef, useState } from "react";

interface Props {
  onAdd: (text: string) => void;
}

const AddTaskForm: React.FC<Props> = ({ onAdd }) => {
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Новая задача..."
        style={{ marginRight: 8 }}
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default AddTaskForm;
