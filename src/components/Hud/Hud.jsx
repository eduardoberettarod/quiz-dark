import React from 'react'
import './Hud.css'

const Hud = () => {
    return (
        <>
            <div className="d-flex align-items-center justify-content-between mt-3 px-3">

                <img
                    src="/image/skull-circle.png"
                    alt=""
                    className="skull-icon-hud"
                />

                <div className="d-flex gap-1">
                    <img src="/image/blood-health.png" className="health" />
                    <img src="/image/blood-health.png" className="health" />
                    <img src="/image/blood-health.png" className="health" />
                </div>

            </div>

        </>
    )
}

export default Hud
