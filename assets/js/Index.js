import React, {Component} from 'react';
import {Route, Switch,Redirect, Link, withRouter} from 'react-router-dom';
import Landing from './components/Landing';


import 'swiper/scss';

class Index extends Component {

    render() {
        return (
            <div className="App">
                <Landing />
            </div>
        )
    }
}

export default Index;