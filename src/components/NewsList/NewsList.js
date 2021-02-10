import React from 'react';
import {NewsArticle} from '../index';
import {NewsSlider} from '../NewsSlider/NewsSlider';

export const NewsList = ({ data }) => (
  <div className="newslist">
    <NewsSlider>
      {data.map((el, key) => {
        return (
          <NewsArticle el={el} key={key}/>
        );
      })}
    </NewsSlider>
  </div>
)