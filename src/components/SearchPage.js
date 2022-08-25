import { React, useState } from 'react';

import SearchBar from './SearchBar';

import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

import './SearchPage.css';

const useStyles = makeStyles({
    searchBtn: {
        height: '60%',
        width: '10%',
        margin: '10px',
        background: 'linear-gradient(45deg, #ba000d 30%, #f44336 90%)',
        marginBottom: '50px',
    },
});

function SearchPage() {
    const classes = useStyles();
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    const updateSearch = event => {
        setSearchText(event.target.value)
    }

    const goToResults = () => {
        navigate('/results', { state: { results: searchText } })
    }

    return (
        <div className="main">
            <div className="search">
                <div className="title">
                    <span id="title-what">What</span>
                    <span id="title-to">To</span>
                    <span id="title-watch">Watch?</span>
                </div>
                <SearchBar updateSearch={updateSearch} searchText={searchText} searchBtnClass={classes.searchBtn} goToResults={goToResults} />
            </div>
        </div>
    );
}

export default SearchPage;