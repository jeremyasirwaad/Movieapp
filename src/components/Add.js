import Moviecard from './Moviecard';
import React, {useState} from 'react'
import './styles/add.css'

function Add() {


    const [query, setQuery] = useState('');
    const [movieresults, setMovieresults] = useState([]);
    const onchange = (e) =>
    {
        e.preventDefault();

        setQuery(e.target.value);

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=56665026e3870c33d4fef3747976d333&language=en-US&query=${e.target.value}&page=1&include_adult=false`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            if(!data.errors)
            {
                setMovieresults(data.results);
            }
            else{
                setMovieresults([]);
            }
        })
    }



    return (
        <div>
            <div className="addpagecontainer">
                <div className = 'inputcontainer'>
                    <input type="text" value = {query} placeholder = "Seach for a movie" onChange = {onchange} />
                </div>
                <div className="movielists">
                    {movieresults.length > 0 && (
                        <ul>
                            {movieresults.map((movie) => (
                                <li key = {movie.id}>
                                    <Moviecard movie = {movie}  />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}





export default Add
