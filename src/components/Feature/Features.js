import React, { useEffect} from "react";
import { connect } from 'react-redux';
import Widgets from "../main/Widgets";
import logo from '../../images/logo.jpg';
import _ from 'lodash';
import Info from "./Info";
import Grid from "./Grid";
import { fetchData } from '../../state/fetch';
import '../../style/features.scss';
import { signUserAction } from '../../state/action';

function Features({state, setFetchData, signUser}) {

    useEffect(() => {
        if(_.isEmpty(state.dataReducer.data)){
            setFetchData();
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps 
            //PLEASE CHECK README FILE FOR EXTRA DETAILS

            
    return (
        <div className="Features">
            <img className="flier" src="https://img.icons8.com/doodle/48/000000/coronavirus.png" alt="coronavirus"/>
            <div className="top-feature-bar">

                <img className="logo" src={logo} alt='logo'/>
                <div className="feature-widgets">
                {state ? state.widgetReducer.widgets.map((w, i) => <Widgets key={i} data={w} />): null}
                </div>
            </div>
            <div className="log-out-bar">
                <i onClick={()=> signUser()} className="fas fa-user"></i>
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
        setFetchData: () => dispatch(fetchData()),
        signUser: ()=> dispatch(signUserAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Features);