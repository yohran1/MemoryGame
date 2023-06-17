import React, { useState } from "react"
import GameOver from "./components/GameOver"

export default function MemoryGame(){

    const [gameOver, setGameOver] = useState(false)

    function restart(){
        setGameOver(false)
    }

    return (
        <div>
            <GameOver mostrar={gameOver} onRestart={restart}></GameOver>
        </div>
    )
}