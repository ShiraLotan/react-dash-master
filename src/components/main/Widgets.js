import React from 'react';
import '../../style/widget.scss';

function Widgets({ data }) {

  return (
    <div className="Widgets animation-entrance">
      <div className="container">
        <div className="widget-name">
          {data.name}
        </div>
        <div className="widget-value">
          {data.value}
        </div>
      </div>
    </div>
  );
}

export default Widgets;
