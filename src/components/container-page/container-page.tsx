import React, { useState, useEffect } from 'react';
import SearchInput from '../search-input/search-input'
import './container-page.css'
import useRetrieveCharacters from '../data-retriever/dataRetriever'

function ContainerPage() {
  // recieve the destructured state from the retriever characters custom hook
  const { loading, characters, errors } = useRetrieveCharacters();
  // input state that handles the input the user gives via onChange
  const [input, setInput] = useState('')
  // inputSelected state, is updated when the user clicks an option in the dropdown
  const [inputSelected, setInputSelected] = useState(false)




  return (
    <div className="searchInputContainer">
      {loading
        ?
        <div>We are currently loading the Marvel characters, please wait.</div>
        : errors ? <div>😔 There was an error when retrieving the data for this page 😔</div>
          :
          <SearchInput marvelCharacters={characters} setInput={setInput} input={input} inputSelected={inputSelected} setInputSelected={setInputSelected} />
      }
    </div>
  )

}


export default ContainerPage