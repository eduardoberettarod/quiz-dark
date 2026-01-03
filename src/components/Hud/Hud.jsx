import React from 'react'

const Hud = () => {
    return (
        <>
            <div className='d-flex align-items-center'>
                <div>
                <img src="/public/image/skull-circle.png" alt="" className='skull-icon-hud image' />
                </div>

                <div>
                    <img src="/public/image/blood.png" alt="" className='b' />
                    <img src="/public/image/blood.png" alt="" className='b' />
                    <img src="/public/image/blood.png" alt="" className='b' />
                </div>
            </div>
        </>
    )
}

export default Hud
