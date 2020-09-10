import React from "react";
import { connect } from 'react-redux';
import Widgets from "./Widgets";
import Chart from "./chart";
import Footer from "./Footer";
import RouteBtn from "./RouteBtn";
import '../../style/dashboard.scss';

function Dashboard({ state }) {

  return (
    <div className="Dashboard">
      <div className="widget-wrapper">
        <div className="widgets-items">
          {state ? state.map((x, i) => <Widgets key={i} data={x} />) : null}
        </div>
        <div className="btn-items">
          {state ? <RouteBtn widgets={state} /> : null}
        </div>
      </div>
      <Chart />
      <Footer />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    state: state.widgetReducer.widgets
  }
}

export default connect(mapStateToProps)(Dashboard)
