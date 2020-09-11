import React from "react";
import Tr from "../Table/Tr";
import { tableHeaders } from '../../consts';
import '../../style/grid.scss';

export default function Grid({ fetchedData }) {

    return (
        <div className="Grid">
            <table className="zigzag">
                <thead>
                    <Tr isParent={true} data={tableHeaders}/>
                </thead>
                <tbody>
                    {fetchedData.map((row, i )=> <Tr key={i} isParent={false} data={row}/>)}
                </tbody>
            </table>
        </div>
    )
}