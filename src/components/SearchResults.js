import React from 'react';

function SearchResults({searchResults}) {

    const resultList = searchResults.map((result) => {
        return (
            <li key={result.id}>{result.name}</li>
        )
    })

    return (
        <ul>
            {resultList}
        </ul>
    )
}

export default SearchResults