import MovieCard from './Movie';
import './App.css';
import {useState, useEffect} from 'react';
import './App.css'

const API_URL = 'http://www.omdbapi.com?apikey=ab5300aa';
const movie1 = {
  "Title": "Spiderman the Verse",
  "Year": "2019–",
  "imdbID": "tt12122034",
  "Type": "series",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNjA2NmZhOGEtZTQ5OS00MDI0LTg4N2UtYTRmOTllM2I2NDlhXkEyXkFqcGdeQXVyNTU4OTE5Nzc@._V1_SX300.jpg"
}
function App() {

   const [movies, setMovies] = useState([]);
   const [searchTerm, setSearchTerm] = useState('');

   const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
       setMovies(data.Search)
  }
   
   useEffect(() => {
         searchMovies('Spiderman');
   },[])
  return (
    <>
    
    <div className="app">
      <h1>MovieLand</h1>
      <div className='search'>
        <input placeholder='searc a new movie'
               value= {searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)} 
        />
         <img src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
                  alt="search"
                  onClick={() => searchMovies(searchTerm)}
          />
      </div>
      {
        movies?.length > 0 ? (
          <div className='container'>
          {movies.map((movie) => (
            <MovieCard movie={movie}/>
          ))}
       </div> ): (
        <div className='empty'>
          <h2>No movies to show</h2>
        </div>
       )
      }
     
    </div>
    </>
  )
    //<div className="App">
       // <button onClick={() => setCounter((prev) => prev -1)}>-</button>
           //<h1>{counter}</h1>
       // <button onClick={() => setCounter((prev) => prev +1)}>+</button>
    //</div>
  
}

export default App;
