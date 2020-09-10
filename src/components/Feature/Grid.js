import React, { useEffect, useState } from "react";
import Tr from "../Table/Tr";
import { tableHeaders } from '../../consts';

export default function Grid({ fetchedData }) {

    return (
        <div className="Grid">
            <table>
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