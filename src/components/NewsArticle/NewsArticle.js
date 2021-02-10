import React from 'react';
import './newsArticle.css';

export const NewsArticle = ({ el }) => {

  return (
    <div className="article">
        <div className="article-body">
          <h1 className="title">{el.title}</h1>
          <p className="content">{el.excerpt}</p>
          <span className="date">{el.publishedDateTime}</span>
        </div>
      </div>
  );
}