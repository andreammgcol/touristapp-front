import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import { Main } from './components/Main';
import { PlannerContainer } from './components/PlannerContainer';
import { Modal } from './components/Modal';
import { LoginUsers } from './components/LoginUsers';
import { UserPlans } from './components/UserPlans'; 
import { TouristApp } from './components/TouristApp'; 

class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                {/* componentes /*/}
                <Route path="/" exact component={TouristApp} />
                <Route path="/home" component={Home} />
                <Route path="/main" component={Main} />
                <Route path="/planner" component={PlannerContainer} /> 
                <Route path="/modal" component={Modal} />
                <Route path="/login" component={LoginUsers} />
                <Route path="/myplans" component={UserPlans} />
                <Route path="/app" component={TouristApp} />
            </div>
        );
    }
}

export default App;
