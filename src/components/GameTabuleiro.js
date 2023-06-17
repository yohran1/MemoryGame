import React from "react";
import CardElements from "./CardElement";

export default function GameTabuleiro(props){
    return (
        <div id="game_tela">
            {props.cards.map((card, index)=>
                <CardElements mudancaFlip={props.mudancaFlip} key={index} card={card}></CardElements>
            )}
        </div>
    )
}