import Button from '@mui/material/Button';

function SearchBar(props) {
    return(
        <div>
            <input className="search-bar" type="search" placeholder="Search for a movie here" onChange={props.updateSearch} value={props.searchText} />
            <Button 
            variant="contained" className={props.searchBtnClass}
            onClick={props.goToResults}
            >Send</Button>
        </div>
    );
}

export default SearchBar;