import React from 'react'

export default function Card({image, title, children, ...rest}) {
    return (
        <div className='card'>
            <h3>{title}</h3>
            <p>{children}</p>
        </div>
    )
}