import React, { useState } from "react"
import axios from 'axios';

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");

    function handleResponse(response){
        console.log(response.data[0]);
    }

    function search(event){
        event.preventDefault();
    
        let apiKey = "034407t747af2dfd1c31bo02c7fc4156";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        
        axios.get(apiUrl).then(handleResponse);

    }
    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    return (
        <div className="Dicitionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} />
            </form>
        </div>
    );
}