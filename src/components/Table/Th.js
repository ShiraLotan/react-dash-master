import React from "react";
import '../../style/grid.scss';

export default function Th({title}) {
    return (
        <th className="Th header">
            <h3>{title}</h3>
        </th>
    )
}