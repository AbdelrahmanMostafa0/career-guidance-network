import React from "react";
import Link from "next/link";


export default function({fieldName, children, ...rest}) {
    return (
        <div className="path-card">
            <h3>{fieldName}</h3>
            <p>{children}</p>
            <Link className="start-now" href="#">Start Now</Link>
            <Link className="details" href="#">Details</Link>
        </div>
    )
}