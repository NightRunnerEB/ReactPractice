// src/pages/ArticlesPage.tsx
import React from "react";
import { Container, Stack } from "@mui/material";
import ArticleAccordion from "../components/ArticleAccordion";
import { Article } from "../types/Article";

const articles: Article[] = [
  {
    id: 1,
    title: "Первая статья",
    content: "Содержимое первой статьи.",
  },
  {
    id: 2,
    title: "Вторая статья",
    content: "Содержимое второй статьи.",
  },
  {
    id: 3,
    title: "Третья статья",
    content: "Содержимое третьей статьи.",
  },
  {
    id: 4,
    title: "Четвёртая статья",
    content: "Содержимое четвертой статьи.",
  },
];

const ArticlesPage: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Stack spacing={2}>
        {articles.map((article, index) => {
          const isOdd = (index + 1) % 2 !== 0;
          return <ArticleAccordion key={article.id} article={article} isOdd={isOdd} />;
        })}
      </Stack>
    </Container>
  );
};

export default ArticlesPage;
