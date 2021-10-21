import React, {useContext} from 'react'
import { MovieContext } from './MovieContext'
function WatchListCard({ movie }) {

    const { watchlist1, watched1 } = useContext(MovieContext);
    const [watchList,setWatchList] = watchlist1;
    const [watched,setWatched] = watched1;

    const removeonclick = () =>{
        setWatchList(watchList.filter(e => {
            return e.id !== movie.id;
        }))
    }

    const Watchedclick = () =>{
        setWatched(prewatched => [...prewatched, movie]);
        setWatchList(watchList.filter(e => {
            return e.id !== movie.id;
        }))
    }

    return (
        <div className = 'watchlistcardcontainer'>
                {movie.poster_path ? (
                <img className = "poster" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} poster `} />
                ) : (
                <div className = "fillerposter poster"></div>
                )}
                <div className = "buttoncontrols">
                    <button className = "removebtn" onClick ={removeonclick}>remove</button>
                    <button className = "watchedbtn" onClick = {Watchedclick}>watched</button>
                </div>
        </div>
    )
}

export default WatchListCard
