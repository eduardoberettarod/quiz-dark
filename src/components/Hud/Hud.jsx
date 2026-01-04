import React, { useRef } from 'react'
import './Hud.css'

const Hud = ({ vidas }) => {


    return (
        <>
            <div className="d-flex align-items-center justify-content-between mt-3 px-3 container-hud">

                <img
                    src="/image/skull-circle.png"
                    alt=""
                    className="skull-icon-hud"
                />

                <div className="d-flex health-bar align-items-center">
                    {Array.from({ length: vidas }).map((_, index) =>(
                        <img
                        key={index}
                        src="/image/blood-health.png"
                        alt='vida'
                        className="health" />
                         ))}
                </div>

            </div>

        </>
    )
}

export default Hud
