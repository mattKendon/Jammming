import React from 'react';

function SearchBar({searchQuery, onChange, onSubmit}) {
    return (
        <form onSubmit={onSubmit}>
            <input
                onChange={onChange}
                value={searchQuery}
                type="text"
                placeholder="Search"/>
            <input type="submit" value="Search"/>
        </form>
    )
}

export default SearchBar