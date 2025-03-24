import React, { useState } from "react";
import { ThemeProvider, CssBaseline, Container, Box, Typography } from "@mui/material";
import { getCustomTheme } from "./theme";
import ArticlesPage from "./pages/ArticlesPage";
import ThemeToggle from "./components/ThemeToggle";

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  const theme = getCustomTheme(isDark ? "dark" : "light");

  const handleToggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box
        sx={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 999,
          backgroundColor: theme.palette.background.paper,
          boxShadow: 2,
        }}
      >
        <Container maxWidth="lg">
          <Box display="flex" alignItems="center" justifyContent="space-between" py={2}>
            <Typography variant="h4">Accordion App</Typography>
            <ThemeToggle isDark={isDark} onToggle={handleToggleTheme} />
          </Box>
        </Container>
      </Box>

      <Box sx={{ marginTop: 12 }}>
        <Container maxWidth="lg">
          <ArticlesPage />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
