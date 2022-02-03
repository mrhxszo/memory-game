import React, {useState, useEffect} from "react";

const Score = (props) => {


    return(
        <div className="score">
            <div>Current Score: {props.Current} </div>
            <div>Best Score: {props.Best} </div>
        </div>
    );
}

export default Score;