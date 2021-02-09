import React, {useState, useEffect} from 'react';
import {
  Header,
  ErrorMessage,
  NewsList
} from '../components/index';
import {Spinner} from 'react-bootstrap';

export const News = () => {
  const API_KEY ="ed70173bd41d41b99323bf07a5b7db55";
  const url =`https://newsapi.org/v2/everything?q=tesla&from=2021-01-09&sortBy=publishedAt&apiKey=${API_KEY}`
  const [newsData, setNewsData] = useState([]);
  const [wReqFail, setWReqFail] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getNewsData();
  }, []);

  useEffect(() => {
    if (newsData.length) {
      setLoading(false);
    }
  }, [newsData]);

  function getNewsData() {
    fetch(url)
    .then(res => res.json())
    .then(news => setNewsData(news.articles))
    .catch(err => {
      setWReqFail(true);
    });
  }

  return(
    <div className="news">
      <Header />
      <div className="container">
      {
            wReqFail ?
              <ErrorMessage />
            :
            loading ?
              <div className="spinner-wrap">
                <Spinner animation="border" variant="warning" role="status" />
              </div>
            :
            (
              <div className="n-body">
                <div className="n-wrap">
                  <NewsList data={newsData} />
                </div>
              </div>
            )
          }
      </div>
    </div>
  );
}