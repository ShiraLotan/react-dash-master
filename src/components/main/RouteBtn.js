import React from "react";
import { useHistory } from "react-router-dom";

export default function RouteBtn(){
    const history = useHistory();

    return(
        <div className="RouteBtn">
            <span onClick={()=> history.push("/feature")}>To Features</span>
        </div>
    )
}