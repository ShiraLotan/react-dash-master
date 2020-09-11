import React from "react";
import Th from "./Th";
import Td from "./Td";
import { useHistory } from "react-router-dom";
import '../../style/grid.scss';

export default function Tr({data, isParent}) {
    let history = useHistory();

    return (
        <tr className="Tr" onClick={()=>history.push("/details", {recovery: data[0]})}>
            {isParent ? data.map((t, i)=> <Th key={i} title={t}/>): data.map((t,i)=>(i>0 ?<Td key={i} item={t}/>: null))}
        </tr>
    )
}