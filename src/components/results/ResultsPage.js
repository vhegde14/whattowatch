import { React, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './ResultsPage.css'


const MediaCard = (props) => {

    const navigate = useNavigate();
    
    const goToMovieCard = () => {
        navigate('/moviecard', { state: { id: props.id } })
    }

    return (
        <Card
        sx={{ width: 270, height: 380, marginLeft: 7, marginRight: 7, marginBottom: 10, marginTop: 10 }}>
            <CardMedia
                component="img"
                height="260"
                image={props.imageUrl}
                alt={props.name}
            />
            <CardContent>
                <Typography onClick={goToMovieCard} gutterBottom variant="h5" component="div">
                {props.name}
                </Typography>
                <Typography variant="body" color="text.secondary">
                {props.year}
                </Typography>
            </CardContent>
        </Card>
    );
}

function ResultsPage() {
    const [searchResults, setSearchResults] = useState([]);

    const {state} = useLocation();

    const fetch = require('node-fetch');
    const API_KEY = process.env.REACT_APP_API_KEY

    const searchVal = encodeURIComponent(state.results.trim())

    let searchUrl = 'https://api.watchmode.com/v1/autocomplete-search/?apiKey=' + API_KEY +'&search_value=' + searchVal + '&search_type=2';

    useEffect(() => {
        fetch(searchUrl, { method: 'Get' })
        .then((res) => res.json())
        .then((json) => {
            setSearchResults(json.results);
        })
    }, [])
        
    const listItems = searchResults.map((result) => 
        <div>
            <MediaCard key={result.id} id={result.id} name={result.name} imageUrl={result.image_url} year={result.year} />
        </div>
    )

    return(
        <div className="main">
            {listItems}
        </div>
    );
}

export default ResultsPage;