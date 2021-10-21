import React, { useState, createContext, useEffect } from 'react'

export const MovieContext = createContext();

export const MovieProvier = (props) => {

    const[watchList, setWatchList] = useState([]);
    const [watched, setWatched] = useState([]);
    console.log(watched)

    useEffect(() => {
        const retrivewatchlist = JSON.parse(localStorage.getItem('watchlist'));
        if(retrivewatchlist) setWatchList(retrivewatchlist);
        const retrivewatched = JSON.parse(localStorage.getItem('watched'));
        if(retrivewatched) setWatched(retrivewatched); 
    },[]);

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(watchList));
        localStorage.setItem('watched', JSON.stringify(watched));
    },[watchList, watched]);

    return (
        <MovieContext.Provider value = {{ watchlist1 : [watchList,setWatchList],watched1: [watched,setWatched]}}>
            { props.children }
        </MovieContext.Provider>
    );
}


