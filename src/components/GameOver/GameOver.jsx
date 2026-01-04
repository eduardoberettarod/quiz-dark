import React from 'react'
import './GameOver.css'

const GameOver = ({ onRestart }) => {
    return (
        <div className="gameover-overlay">
            <img
                src="/public/image/skull-gameOver.png"
                alt=""
                className='skull-gameOver'
            />
            <h1>GAME OVER</h1>
            <p>Você perdeu todas as vidas</p>

            <button onClick={onRestart} className='btn btn-danger mt-3'>
                Jogar Novamente
            </button>

        </div>
    )
}


export default GameOver
