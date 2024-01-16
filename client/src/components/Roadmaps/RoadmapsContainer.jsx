import React from 'react'

export default function RoadmapsContainer({ children, ...restprops }) {
    return (
    <div {...restprops}>{children}</div>
    )
}
