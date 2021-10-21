import React, { useContext } from 'react'
import { MovieContext } from './MovieContext'
import WatchedCard from './WatchedCard'


function Watched() {

    const {watched1} = useContext(MovieContext);
    const [watched] = watched1;


    return (
        <div className = "watchlistconatiner">
            <h1 className = "heading">Watched</h1>
            {watched.length > 0 ? (
                <div className="gridcontainer">
                    {watched.map((movie)=>(
                         <WatchedCard  movie = {movie} type = 'watchlist' key = {movie.id} />
             ))}
                </div>
            ):(
                <div><h1 className = "nothin">Nothing To Display, Add from WatchList to Display Watched </h1></div>
            )}
        </div>
    )
}

export default Watched
