import { createTheme, ThemeOptions } from "@mui/material/styles";

export const getCustomTheme = (mode: "light" | "dark") => {
  const palette = {
    mode,
    ...(mode === "light"
        ? {
            primary: { main: "#3f51b5" },
            secondary: { main: "#f50057" },
            background: { default: "#ffffff" },
          }
        : {
            primary: { main: "#90caf9" },
            secondary: { main: "#f48fb1" },
            background: { default: "#303030" },
          }),
  };

  const themeOptions: ThemeOptions = {
    palette,
    typography: {
      fontFamily: "Arial, sans-serif",
    },
  };

  return createTheme(themeOptions);
};
