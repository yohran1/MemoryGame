import React from "react";

export default function GameOver(props){
    return (props.mostrar?
        <div>
            <div id="gameOver">
                <div>Parabéns, você completou o jogo</div>
                <button id="restart" onClick={props.onRestart}>Jogue Novamente</button>
            </div>
        </div> : <></>

    )
}