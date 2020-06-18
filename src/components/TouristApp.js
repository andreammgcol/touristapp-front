import React, { Component } from 'react';
import { AppTopbar } from './AppTopbar';
import { AppFooter } from './AppFooter';
import { AppLocation } from './AppLocation';
import { PlannerContainer } from './PlannerContainer';
import '../styles/menubar.css';
import '../styles/basic.css';

export class TouristApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
        console.log('constructor TouristApp')
    }

    render() {
        return (
          <div>
              <AppTopbar />
              <AppLocation />
              <PlannerContainer />
              <AppFooter />
          </div>
        );
    }
}
