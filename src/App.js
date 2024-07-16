import { useState, useEffect } from 'react';


import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';

export default function App() {
  // Constant with your API Key
  const apiKey = '7fe042bd'

  // State to hold movie data
  const [movie, setMovie] = useState(null);

  //function to get movies
  const getMovie = async(searchTerm) => {
try {
    //make fetch request and store the response 
    // t is the title of the movie you are searching for.
    const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
    const data = await response.json()
    // Set the Movie state to the received data
    setMovie(data);
} catch (e) {
  console.log("fetch error")
}
  }

  // This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie("Clueless");
  }, []);

  
// We pass the getMovie function as a prop called moviesearch
  // We pass movie as props to movie display
  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}



