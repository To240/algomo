import React, {useState, useEffect} from 'react';
import './search-input.css'
function SearchInput() {

const [inputLength, setInputLength] = useState(0)

return(
    <div className="searchContainer">
        <div className="searchText">Search</div>
            <div className="inputContainer">
                <input className="searchInput" type="text" onChange={e => setInputLength(e.target.value.length)} />
                <button className={inputLength > 2 ? "enabledInput" : "disabledInput"} disabled={inputLength < 2? true : false}>Search</button>
            </div>
    </div>
)

}


export default SearchInput