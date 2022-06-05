import React from 'react';
import "./componentsCSS/searchBar.css";


const SearchField = (props) => {
    return (
        <div class="divSearch">
            <form class="formSearch" onSubmit={props.searchBook} action="">
                <input class="inputSearch" onChange ={props.handleSearch} type="text" placeholder='Search'/>
                <button class="buttonSearch" type="">Search</button>
            </form>
        </div> 
    );
}

export default SearchField;