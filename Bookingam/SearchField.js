import React from 'react';

const SearchField = (props) => {
    return (
        <div>
            <form onSubmit={props.searchBook} action="">
                <input onChange ={props.handleSearch} type="text"/>
                <button type=""></button>
            </form>
        </div> 
    );
}

export default SearchField;