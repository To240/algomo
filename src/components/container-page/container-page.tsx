import React, {useState, useEffect} from 'react';
import SearchInput from '/Users/tomasosborne/Desktop/algomo/src/components/search-input/search-input'
import './container-page.css'
import axios from 'axios'
import md5 from "blueimp-md5"

function ContainerPage() {

const [marvelCharacters, setMarvelCharacters] = useState([])
const [loading, setLoading] = useState(false)
const publicKey = 'bb96723d0281f207e37cd9a44a9f3ae2'
const privateKey = 'a19aed915c9e1143e174c13763e45cccc6e73542'
const ts = new Date().getTime();
const stringToHash = ts + privateKey + publicKey;
const hash = md5(stringToHash);
const baseUrl = 'https://gateway.marvel.com:443/v1/public/characters';
const url = baseUrl + '&ts=' + ts + '&apikey=' + publicKey + '&hash=' + hash;
interface RequestParameters {

}

const requestParameters: RequestParameters = {


}


    // retrieve the list of heroes on initial render
    useEffect(() => {
    // promise based rather than async purely as it's easier to read, and report errors.
    axios.get(url)
    .then((response) => {
        setMarvelCharacters(response.data)
        console.log(response);
      }, (error) => {
        console.log(error);
      });   

    }, [])

return(
    <div className="searchInputContainer">
        { loading 
        ? 
        <div>Retrieving Marvel characters, please wait...</div>
        :
        <SearchInput />
        }
    </div>
)

}


export default ContainerPage