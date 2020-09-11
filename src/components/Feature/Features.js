import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import Widgets from "../main/Widgets";
import logo from '../../images/logo.jpg';
import _ from 'lodash';
import Info from "./Info";
import Grid from "./Grid";
import { setData } from '../../state/action';
import { fetchData } from '../../state/fetch';
import '../../style/features.scss';

function Features({state, setFetchData}) {

    const [data, setDate] = useState({})

    useEffect(() => {
        if(_.isEmpty(state.dataReducer.data)){
            setFetchData();
        }

    }, []);

    return (
        <div className="Features">
            <div className="top-feature-bar">
                <img src={logo} />
                <div className="feature-widgets">
                {state ? state.widgetReducer.widgets.map((w, i) => <Widgets key={i} data={w} />): null}
                </div>
            </div>
            <div className="log-out-bar">
                <i className="fas fa-user"></i>
                {state.dataReducer.data.country && state.dataReducer.data.day ? <Info country={state.dataReducer.data.country} day={state.dataReducer.data.day} /> : null}
            </div>
            {!_.isEmpty(state.dataReducer.data) ? <Grid fetchedData={state.dataReducer.data.tableRows} /> : null}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFetchData: () => dispatch(fetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Features);