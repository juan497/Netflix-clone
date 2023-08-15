import React from 'react';
import logo from './logo.svg';
import './App.css';
import Row from './Row';
import requests from "./requests";
import Banner from "./Banner"
import Nav from './Nav';
import YouTube from 'react-youtube';




//api key = 94608ba3c308eeddd6e7430bdb6d12a1
//example api request = https://api.themoviedb.org/3/movie/550?api_key=94608ba3c308eeddd6e7430bdb6d12a1

function App() {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };


  return (
    
    <div className="app">
      <h1>hello guy</h1>  
      

      <Nav/>
      <Banner />

      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals }  isLargeRow = {true}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
      {/* <Row title="docu" fetchUrl={requests.fetchDocumentaries}/> */}
      {/* <YouTube videoId="b8kvHRZRbYw" opts={opts} /> */}
    </div>  
  );
}

export default App;





