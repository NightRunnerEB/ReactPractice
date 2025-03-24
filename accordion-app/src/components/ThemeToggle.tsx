import React from "react";
import { Switch, FormControlLabel } from "@mui/material";

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <FormControlLabel
      control={<Switch checked={isDark} onChange={onToggle} color="default" />}
      label={isDark ? "Тёмная тема" : "Светлая тема"}
    />
  );
};

export default ThemeToggle;
