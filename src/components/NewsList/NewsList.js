import React from 'react';
import {NewsArticle} from '../index';

export const NewsList = ({ data }) => (
  <div className="newslist">
    {data.map((el, key) => {
      return (
        <NewsArticle el={el} key={key}/>
      );
    })}
  </div>
)