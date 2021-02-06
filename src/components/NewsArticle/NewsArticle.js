import React from 'react';
import './newsArticle.css';

export const NewsArticle = ({ el }) => {

  return (
    <div className="article">
        <div className="article-body">
          <h1 className="title">{el.title}</h1>
          <h2 className="subtitle">{el.author}</h2>
          <p className="content">{el.content}</p>
          <p className="description">{el.description}</p>
          <span className="date">{el.publishedAt}</span>
        </div>
      </div>
  );
}