import React from "react";
import Th from "./Th";
import Td from "./Td";

export default function Tr({data, isParent}) {
    return (
        <tr className="Tr">
            {isParent ? data.map((t, i)=> <Th key={i} title={t}/>): data.map((t,i)=><Td key={i} item={t}/>)}
        </tr>
    )
}