import React, {useContext} from 'react'
import { MovieContext } from './MovieContext'
function WatchedCard({ movie }) {

    const { watched1 } = useContext(MovieContext);
    const [watched,setWatched] = watched1;

    const removeonclick = () =>{
        setWatched(watched.filter(e => {
            return e.id !== movie.id;
        }))
    }


    return (
        <div className = 'watchedcardcontainer' style = {{height: '270px'}} >
                {movie.poster_path ? (
                <img className = "poster" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} poster `} />
                ) : (
                <div className = "fillerposter poster"></div>
                )}
                <div className = "buttoncontrols">
                    <button className = "removebtn" onClick ={removeonclick} style = {{position:'relative', left: "35px"}} >remove</button>
                </div>
        </div>
    )
}

export default WatchedCard
