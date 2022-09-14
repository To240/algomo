import React, { useState, useEffect } from 'react';
import './search-input.css'

function SearchInput({ marvelCharacters, setInput, input, inputSelected, setInputSelected }) {

    console.log(JSON.stringify(marvelCharacters, null, 1))
    return (
        <div className="searchContainer">
            <div className="searchText">Search</div>
            <div className="inputContainer">
                <span>
                    <input placeholder="Search Terms" className="searchInput" onChange={e => (setInput(e.target.value), setInputSelected(false))} />
                    <button className={inputSelected ? "enabledInput" : "disabledInput"} disabled={input.length < 1 ? true : false}>SEARCH</button>
                </span>
                {input.length >= 1
                    ?
                    <div className="searchList">
                        {marvelCharacters.filter(a => a.includes(input)).map(a =>
                            <div onClick={e =>  setInputSelected(true)} value={a} className="searchListInput">{a}</div>)
                        }
                    </div>
                    : null}


            </div>
        </div>
    )

}


export default SearchInput