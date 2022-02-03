import React, {useState, useEffect} from "react";
import "../main.css";
import Card from "./Card";
import uniqid from "uniqid";
import Score from "./Score";

//images
import higgs from "../images/higgs.jpg";
import photon from "../images/photon.jpg";
import wboson from "../images/Wboson.jpg";
import zboson from "../images/Zboson.jpg";
import gluon from "../images/gluon.jpg";
import up from "../images/up.jpg";
import down from "../images/down.jpg";
import top from "../images/top.jpg";
import bottom from "../images/bottom.jpg";
import strange from "../images/strange.jpg";
import charm from "../images/charm.jpg";



const PlayArea = (props) => {

    const addKey = (key) => {     
        changeCkeys((ckeys)=>[...ckeys, key]); 
    };

    const checkDuplicate = (array) => {
        for (let index = 0; index < array.length; index++) {
            
            for(let j = 0; j < array.length; j++){
                if(index != j && array[index] == array[j]){
                    return true;}
            }
                

            
        }
        return false;
    }
    let nkeys = [...Array(11).keys()].map(() => uniqid());
    let newCards = 
    [
    <Card url={higgs} name = "Higgs Boson" key={nkeys[0]} value={nkeys[0]} onClick={addKey}/>,
    <Card url={photon} name = "Photon" key={nkeys[1]} value={nkeys[1]} onClick={addKey}/>,
    <Card url={wboson} name = "W Boson" key={nkeys[2]} value={nkeys[2]} onClick={addKey}/>,
    <Card url={zboson} name = "Z Boson" key={nkeys[3]} value={nkeys[3]} onClick={addKey}/>,
    <Card url={gluon} name = "Gluon" key={nkeys[4]} value={nkeys[4]} onClick={addKey}/>,
    <Card url={up} name = "Up Quark" key={nkeys[5]} value={nkeys[5]} onClick={addKey}/>,
    <Card url={down} name = "down Quark" key={nkeys[6]} value={nkeys[6]} onClick={addKey}/>,
    <Card url={top} name = "Top Quark" key={nkeys[7]} value={nkeys[7]} onClick={addKey}/>,
    <Card url={bottom} name = "Bottom Quark" key={nkeys[8]} value={nkeys[8]} onClick={addKey}/>,
    <Card url={strange} name = "Strange Quark" key={nkeys[9]} value={nkeys[9]} onClick={addKey}/>,
    <Card url={charm} name = "Charm Quark" key={nkeys[10]} value={nkeys[10]} onClick={addKey}/>
];

    const [random, randomize] = useState(false);
    const [ckeys, changeCkeys] = useState([]);
    const [current, changeCurrent] = useState(0);
    const [best, changeBest] = useState(0);

    const [cards, randomizeCards] = useState(newCards);
    
    useEffect(()=>{
        let randomCards = cards.sort(() => Math.random() - 0.5);
        randomizeCards(randomCards);
        randomize(false);
    },[random]);

    useEffect(()=>{
        if((ckeys.length != 0) && (checkDuplicate(ckeys) == false)){
            
            changeCurrent((prevState)=>prevState+1);
            
        }
        else{
            if(ckeys.length != 0){
                changeCkeys([]);
                changeCurrent(0);
            }
            
        }
    }, [ckeys]);

    useEffect(()=>{
        if(best < current ){
            changeBest(current);
        }
    }, [current])



    
    return(
        <>
        <Score Current={current} Best={best}/>
        
        <div className="PlayArea" onClick={() => randomize(true)}> 
            {cards}
        </div>
        </>
       
    );
}

export default PlayArea;