import React from 'react'
import { useEffect , useState } from 'react';

export const useFetch = (apiPath,queryTerm="") => {
    const [data, setData] = useState([]);
    const url =`https://api.themoviedb.org/3/${apiPath}?api_key=632e3e21db22034ecc032dc623e1a50d&query=${queryTerm}`

    useEffect(() =>{
        async function fetchMovies(){
          const response = await fetch(url);
          const json = await response.json();
          setData(json.results);
        }
        fetchMovies();
      },[url])

  return {data}
}
