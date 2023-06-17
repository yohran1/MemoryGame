import React, { useEffect, useState } from "react"
import GameOver from "./components/GameOver"
import GameTabuleiro from "./components/GameTabuleiro"
import game from "./game"

export default function MemoryGame(){

    const [gameOver, setGameOver] = useState(false)
    const [cards, setCards] = useState([])

    useEffect(()=>{
        setCards(game.create_cards_tecnologia())
    }, [])

    function restart(){
        setGameOver(false)
    }

    return (
        <div>
            <GameTabuleiro cards={cards}></GameTabuleiro>
            <GameOver mostrar={gameOver} onRestart={restart}></GameOver>
        </div>
    )
}