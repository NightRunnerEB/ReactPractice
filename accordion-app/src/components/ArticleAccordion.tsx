import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Article } from "../types/Article";
import "../styles/articles.scss";

interface Props {
  article: Article;
  isOdd: boolean;
}

const ArticleAccordion: React.FC<Props> = ({ article, isOdd }) => {
  const titleColor = isOdd ? "black" : "blue";

  return (
    <Accordion className="article-accordion">
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6" sx={{ color: titleColor }}>
          {article.title}
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Typography variant="body1">{article.content}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default ArticleAccordion;
