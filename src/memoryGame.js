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
        if(game.setCard(card.id)){

            if(game.segunda_carta){
                if(game.checkMath()){
                    game.clear_cards()
                    if(game.checkGameOver()){
                        // Game Over
                        setGameOver(true)
                    }
                }else{
                    setTimeout(()=>{
                        // Não houve match
                        game.cartas_nao_viradas()
                        setCards([...game.cards])
                    },1000)
                }
            }
        }
        setCards([...game.cards])
    }

    return (
        <div>
            <GameTabuleiro mudancaFlip={mudancaFlip} cards={cards}></GameTabuleiro>
            <GameOver mostrar={gameOver} onRestart={restart}></GameOver>
        </div>
    )
}