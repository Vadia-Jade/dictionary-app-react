import React, { useState } from "react"
import Results from "./Results";
import Photos from "./Photos";
import axios from 'axios';
import "./Dictionary.css";

export default function Dictionary(props){
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState([]);

    function handleResponse(response) {
       setResults(response.data[0]);
    }

    function handlePhotosResponse(response){
        setPhotos(response.data.photos);
    }

    function search () {
          let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

        let photosApiKey ="034407t747af2dfd1c31bo02c7fc4156";
        let photosApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${photosApiKey}`;
        axios.get(photosApiUrl).then(handlePhotosResponse);
    }

    function handleSubmit(event){
        event.preventDefault();
        search() 
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }
     
    function load() {
        setLoaded(true);
        search();
    }

     if (loaded){
          return (
        <div className="Dictionary">
            <section>
                <h1>What word do you want to look up?</h1>
            <form onSubmit={handleSubmit}>
                <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
            </form>
            <div className="hint">
               Suggested words: Butterfly, Home, Holiday....
            </div>
            </section>
            <Results results={results} />
            <Photos photos={photos} />
        </div>
    );
     }else {
        load();
        return "Loading";
     }
}
