import React from "react";

export default function Info({ country, day }) {
    return (
        <div className="Info">
            <h1>Covid-19 History page</h1>
            <div>
                <span>Country: {country}</span>
                <span>Day: {day}</span>
            </div>
        </div>
    )
}