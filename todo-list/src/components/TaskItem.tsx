import React from "react";
import "../styles/Todo.css";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface Props {
  task: Task;
  onDelete: (id: number) => void;
  onToggleComplete: (id: number) => void;
  onSelect: (task: Task) => void;
}

const TaskItem: React.FC<Props> = ({ task, onDelete, onToggleComplete, onSelect }) => {
  return (
    <li
      className={`task-item ${task.completed ? "completed" : ""}`}
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: 8,
      }}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleComplete(task.id)}
      />
      <span
        onClick={() => onSelect(task)}
        style={{ marginLeft: 8, cursor: "pointer", flexGrow: 1 }}
      >
        {task.text}
      </span>

      <button
        onClick={() => onDelete(task.id)}
        style={{ marginLeft: 8, color: "red" }}
      >
        Удалить
      </button>
    </li>
  );
};

export default TaskItem;
