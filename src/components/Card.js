import React, {useState, useEffect} from "react";
import "../main.css";

const Card = (props) => {


    
    return(
        <div className ='card' onClick={() => props.onClick(props.value)}>
            <img src={props.url} style={{width: "100%", height:"85%", objectFit:"Contain"}}/>
            <p>{props.name}</p>
        </div>
    );
}

export default Card;