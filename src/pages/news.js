import React, {useState, useEffect} from 'react';
import {
  Header,
  ErrorMessage,
  NewsList
} from '../components/index';
import {Spinner} from 'react-bootstrap';

export const News = () => {
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
    fetch("https://coronavirus-smartable.p.rapidapi.com/news/v1/US/", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "77f7fc5b09mshe91b7e9e85ec99fp1fc50fjsn1c7c400046ed",
        "x-rapidapi-host": "coronavirus-smartable.p.rapidapi.com"
      }
    })
    .then(res => res.json())
    .then(res => setNewsData(res.news))
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