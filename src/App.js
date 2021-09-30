import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonGroup, Button, Spinner, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import News from './News/News';

function App() {
  const [news, setNews] = useState([])
  useEffect( ()=>{
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-30&sortBy=publishedAt&apiKey=6f2131deb76449d9a739416d1151ddf2')
    .then(res => res.json())
    .then(data => setNews(data.articles))
  } , [])
  return (
    
    <div className="App">
      <h1 className="title-text">News <span className="title-span">portal</span> </h1>
      {
        news.length===0 ?
        <Spinner animation="border" />
        : 
        <Row xs={1} md={2} className="g-4">
        {
          news.map(nw => <News news={nw} ></News> )
        }
       </Row>
      }

    </div>
  );
}

export default App;
