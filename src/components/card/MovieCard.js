import { React, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './MovieCard.css';

function MovieCard() {
    const [movieResults, setMovieResults] = useState({});

    const {state} = useLocation();

    const fetch = require('node-fetch');
    const API_KEY = process.env.REACT_APP_API_KEY;

    let detailsUrl = 'https://api.watchmode.com/v1/title/' + state.id + '/details/?apiKey=' + API_KEY;
    console.log(detailsUrl);

    useEffect(() => {
        fetch(detailsUrl, { method: 'Get' })
        .then((res) => res.json())
        .then((json) => {
            setMovieResults(json);
            console.log(json);
        })
    }, [])

    console.log(movieResults)

    return(
        <div>
            <img className="backdrop" src={movieResults.backdrop} alt="Backdrop" />
        </div>
    );
}

export default MovieCard;