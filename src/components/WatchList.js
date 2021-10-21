import React, { useContext } from 'react'
import { MovieContext } from './MovieContext'
import WatchListCard from './WatchListCard';
import './styles/watchlist.css'
function WatchList() {

    const{watchlist1} = useContext(MovieContext);
    const[watchList] = watchlist1;

    return (
        <div className = "watchlistconatiner">
            <h1 className = "heading">Watchlist</h1>
            {watchList.length > 0 ? (
                <div className="gridcontainer">
                    {watchList.map((movie)=>(
                         <WatchListCard  movie = {movie} type = 'watchlist' key = {movie.id} />
                             ))}
                </div>
            ) : 
            (
                <div><h1 className = "nothin">Nothing To Display, Add to Display Watchlist </h1></div>
            )}
        </div>
    )
}

export default WatchList
