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
        game.clear_cards()
        setCards(game.create_cards_tecnologia())
        setGameOver(false)
    }

    function mudancaFlip(card){
        game.flipCard(card.id, ()=> {
            //GameOverCallBack
            setGameOver(true)
        },()=>{
            //noMathCallBack
            setCards([...game.cards])

        })
        setCards([...game.cards])
    }

    return (
        <div>
            <GameTabuleiro mudancaFlip={mudancaFlip} cards={cards}></GameTabuleiro>
            <GameOver mostrar={gameOver} onRestart={restart}></GameOver>
        </div>
    )
}