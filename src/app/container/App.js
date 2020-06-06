import React from 'react';
import { connect } from 'react-redux';
import { User } from '../components/User';
import { Main } from '../components/Main';

import {setName} from '../actions/userActions'

class App extends React.Component {
    constructor() {
        super(); 
    }

    render() {
        return (
            <div className="container">
                <Main changeUsername={()=> this.props.setName("Anna")}/>
                <User username={this.props.user.name}/>
            </div>
        );
    }
}
// Which properties and actions do I want to set with this component?

const mapStateToProps = (state) => {
    return {
        user: state.user, //automatically accessible via this.props
        math: state.math
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        setName: (name) => {
            dispatch(setName(name))
        }  
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)