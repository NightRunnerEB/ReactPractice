import { Component } from "react";
import { useEffect, useRef } from "react";
import TaskItem from "./TaskItem";
import AddTaskForm from "./AddTaskForm";
import "../styles/Todo.css";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface State {
  tasks: Task[];
  currentTask: Task | null;
  nextId: number;
}

export default class TodoAppClass extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, text: "Изучить React", completed: false },
        { id: 2, text: "Сделать ToDo List", completed: false },
      ],
      currentTask: null,
      nextId: 3,
    };
  }

  handleAddTask = (text: string) => {
    const newTask: Task = {
      id: this.state.nextId,
      text,
      completed: false,
    };
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask],
      nextId: prevState.nextId + 1,
      currentTask: newTask,
    }));
  };

  handleDeleteTask = (id: number) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((t) => t.id !== id),
      currentTask: null,
    }));
  };

  handleToggleComplete = (id: number) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      ),
    }));
  };

  handleSelectTask = (task: Task) => {
    this.setState({ currentTask: task });
  };

  render() {
    return (
      <div>
        <AddTaskForm onAdd={this.handleAddTask} />

        <CurrentAndPreviousTask currentTask={this.state.currentTask} />

        <ul style={{ listStyleType: "none", padding: 0 }}>
          {this.state.tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={this.handleDeleteTask}
              onToggleComplete={this.handleToggleComplete}
              onSelect={this.handleSelectTask}
            />
          ))}
        </ul>
      </div>
    );
  }
}

interface CPTProps {
  currentTask: Task | null;
}

function CurrentAndPreviousTask({ currentTask }: CPTProps) {
  const previousTaskRef = useRef<Task | null>(null);

  useEffect(() => {
    return () => {
      previousTaskRef.current = currentTask;
    };
  }, [currentTask]);

  return (
    <div style={{ margin: "16px 0", padding: "8px", border: "1px solid #ccc" }}>
      <h4>Текущая задача: {currentTask ? currentTask.text : "нет"}</h4>
      <h4>
        Предыдущая задача:{" "}
        {previousTaskRef.current ? previousTaskRef.current.text : "нет"}
      </h4>
    </div>
  );
}
