import React from "react";
import "./Dictionary.css";

export default function Phonetic (props){
    return(
        <div className="Phonetic">
             <span className="text">
            <a href= {props.phonetic.audio} target="_blank" rel="noreferrer">
              Sounds Like
               </a>
            {props.phonetic.text}
             </span> 
        </div>
    );
}
