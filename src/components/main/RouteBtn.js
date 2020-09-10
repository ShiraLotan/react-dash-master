import React from "react";
import { useHistory } from "react-router-dom";
import '../../style/widget.scss';

export default function RouteBtn() {
    const history = useHistory();

    return (
        <div className="RouteBtn">
            <div className="container">
                <span onClick={() => history.push("/feature")}>To Features</span>
            </div>
        </div>
    )
}