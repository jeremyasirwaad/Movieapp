import React, { useContext } from 'react'
import './styles/moviecard.css'
import { MovieContext } from './MovieContext'


function Moviecard({ movie }) {

    const{watchlist1, watched1} = useContext( MovieContext );
    const [watchList,setWatchList] = watchlist1;
    const [watched] = watched1;

    const ONCLICK = () => {
        setWatchList(prewatchList => [...prewatchList, movie]);
    }

    let storedmovie = watchList.find(e => e.id === movie.id);
    let storedmovie1 = watched.find(e => e.id === movie.id);

    const watchListDisabled = (storedmovie || storedmovie1) ? true : false;
    
    return (
        <div className = "container">
            <div className="carcontainer">
                {movie.poster_path ? (
                    <img className = "poster" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} poster `} />
                ) : (
                    <div className = "fillerposter poster"></div>
                )}
            </div>
            <div className="cardinfo">
                <div className="textinfo">
                    <h3 className = "title">{movie.title}</h3>
                    <h4 className="realeasedate">{movie.release_date ? (movie.release_date.substring(0,4)) : "-"}</h4>
                    <p className = "discription">{movie.overview.substring(0,200)+'......'}</p>
                </div>
                <div>
                    <button  className="button" disabled = { watchListDisabled } onClick = { ONCLICK }>ADD TO WATCHLIST</button>
                 </div>
            </div>
        </div>
    )
}

export default Moviecard;
