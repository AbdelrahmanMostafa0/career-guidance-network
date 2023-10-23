import React from 'react'

export default function Card({ text, image, title, children, ...rest }) {
    return (
        <div className='card'>
            <img src={image} />
            <h3>{title}</h3>
            <p>{children}</p>
        </div>
    )
}