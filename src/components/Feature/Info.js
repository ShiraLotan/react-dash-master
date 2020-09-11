import React from "react";
import '../../style/info.scss';

export default function Info({ country, day }) {
    return (
        <div className="Info">
            <div className="info-top">
                <h1>Covid-19 History page</h1>
                <div className="blob"></div>
            </div>
            <div className="info-wrapper">
                <span><span className="info-title">Country:</span> {country}</span>
                <span><span className="info-title">Day:</span> {day}</span>
            </div>
        </div>
    )
}