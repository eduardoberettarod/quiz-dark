import React, { useEffect, useRef, useState } from 'react'

import Hud from '../../components/Hud/Hud'
import Quiz from '../../components/Quiz/Quiz';
import Blood from '../../components/Blood/Blood';
import GameOver from '../../components/GameOver/GameOver';

const Index = () => {
    const [vidas, setVidas] = useState(3);
    const [bloods, setBloods] = useState(0)
    const [gameOver, setGameOver] = useState(false)

    function errouPergunta() {
        setVidas(v => {
            const novaVida = Math.max(v - 1, 0)

            if (novaVida === 0) {
                setGameOver(true)
            }

            return novaVida
        })

        setBloods(b => b + 1)
    }


    function resetarJogo(){
        setVidas(3)
        setBloods(0)
        setGameOver(false)
    }



    return (
        <>
            <Hud vidas={vidas} />
            <Blood quantidade={bloods} />
            <button onClick={errouPergunta}>Errar</button>
            {gameOver && <GameOver onRestart={resetarJogo} />}
        </>
    )
}

export default Index
