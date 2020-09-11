import React from 'react';
import { useLocation } from "react-router-dom";
import '../../style/details.scss';

function Details() {
    const location = useLocation();
    const recovery = location.state.recovery;
  return (
    <div className="Details">
        <div className="container">
          <div className="balloon">
            <div><span>H</span></div>
            <div><span>O</span></div>
            <div><span>O</span></div>
            <div><span>R</span></div>
            <div><span>A</span></div>
            <div><span>Y</span></div>
          </div>
          <h1>Recovery number: {recovery}</h1>
        </div>
    </div>
  );
}


export default Details;
