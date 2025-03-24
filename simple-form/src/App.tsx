// src/App.tsx
import React from "react";
import FormPage from "./pages/FormPage";

const App: React.FC = () => {
  return (
    <div>
      <h1>Простая форма с валидацией</h1>
      <FormPage />
    </div>
  );
};

export default App;
