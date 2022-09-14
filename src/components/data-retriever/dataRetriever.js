import React, {useState, useEffect} from 'react'
import axios from 'axios'

const useRetrieveCharacters = () => {
    // custom hook for retrieving data on characters initially from the Marvel API.
    // Handles the fact that we need to wait for 1600 characters to be requested via loading state
    // Handles any errors that may occur with error state.
    // Error and loading state will be provided to Parent to change the UI accordingly.
    const [loading, setLoading] = useState(false)
    const [characters, setCharacters] = useState('')
    const [error, setError] = useState(false)
    // useEffect runs once on page load and makes page hang on loading state until characters are retrieved or error occurs.
    useEffect(() => {
      // initially set loading to true while we retrieve characters
      setLoading(true)
      // make axios request to basic proxy server on back end. Allows us to avoid cors issues and keeps api keys etc private.
       axios
    .get(`http://localhost:4000/allcharacters/`)
    // once we get a response, set the state of characters to the response which is one flat array containing all of the characters.
    // using then/catch chaining as it's easier to read and understand than async/await
    .then(response => {
      setCharacters(response.data);
      setLoading(false)
    })
    .catch(error => {
      // in a production app we would obviously do something with this to provide feedback to the user/developer but for now we will just display some default error text.
      setError(true);
    }
    )
    // dependency array of useEffect is left empty so that the hook only fires on initial load.
    }, [])
    // return the relevant data to the front end so that it can be destructured and used to keep the page in the correct state.
    return {loading, characters, error};
}

export default useRetrieveCharacters