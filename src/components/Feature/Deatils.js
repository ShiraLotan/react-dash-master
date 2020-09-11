import React from 'react';
import { useLocation } from "react-router-dom";
import '../../style/details.scss';

function Details() {
    const location = useLocation();
    const recovery = location.state.recovery;
  return (
    <div className="Details">
        {recovery}
    </div>
  );
}


export default Details;
