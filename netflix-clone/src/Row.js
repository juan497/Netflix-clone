import React,{useState,useEffect} from 'react'
import axios from "./axios";
import request from './requests';
import "./Row.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({title, fetchUrl, isLargeRow}) {
    const [movies,setMovies] = useState([])
    const [trailerUrl,setTrailerUrl] = useState("");
    
    useEffect(()=>{
        //pull info(image) from tdm

        //make async call, because making request to outside service it will take like half a sec,
        //so to run a asyn cunction in use effect you write internal function and than call
        async function fetchData(){
            //await, when make this request, wait for promise(ansewer) to come back, and than do something
            const request =  await axios.get(fetchUrl);
            //console.log(request);//to see the data structure that you get back, look at object than data.results
            setMovies(request.data.results);
            return request;
        }
        fetchData();


    },[fetchUrl]);//blank, run ounce when row loads and dont run again
    //fectchUrl is a dependancy,  it being used outside of use effect , 
    //----you have to put fetchUrl because its outside of useeffect

    // remeber,Row is inside of a map function
    const opts = {
        height: "390",
        width: "99%",
        playerVars: {
          autoplay: 0,
        }
      }
    
      const handleClick = (movie) => {
        console.log(movie);
        if (trailerUrl) {
          setTrailerUrl("")
        } else {
        movieTrailer(movie?.title || movie?.name || '')
        .then(url => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get('v'));
        }).catch((error) => console.log(error));
        console.log(trailerUrl);
      }
    }

    //console.log(movies);
    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">

                {/*look at <img key,  remeber, react has a key that just needs unique info for each pic, so that react doesnt rerender the entire row
                but rather it renders what it needs   */}

                {movies.map(movie =>(
                    //poster path = "/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg" (not a url)
                    //so need a base url (look at top of Row.js) to concat with poster path,
                    //sonny new the base url from api docs

                    // `  ${}  `  is called string interpolation (javascript feture)
                 <img 
                 key={movie.id} 
                 onClick = {() => handleClick(movie)}
                 className ={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                   src={` ${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path }`} 
                   alt={movie.name}/>   
                
                ))}
            </div>
                {/* <div style={{ padding: "40px" }}>
                    {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
                </div> */}
        </div>
    )
}

export default Row
