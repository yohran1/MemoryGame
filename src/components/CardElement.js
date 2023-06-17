import React from "react";

export default function CardElements(props){
    return (
        <div id={props.card.id} className="card">
            <div className="card_front">
                <img className="icon" src={`assets/img/${props.card.icon}.png`} alt={props.card.icon}></img>
            </div>
            <div className="card_back">
                {"</>"}
            </div>
        </div>
    )
}