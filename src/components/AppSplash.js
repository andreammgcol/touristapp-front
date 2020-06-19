import React, { Component } from 'react';
import { Redirect } from 'react-router'
import '../styles/splash.css';

export class AppSplash extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      isLoaded: false
    }
    console.log('AppSplash main')
  }

  handleEventMain = event => {
    this.setState({
      redirect: true
    });
    event.preventDefault();
  };

  componentDidUpdate() {
    if (!this.state.redirect) {
      setTimeout(() => { this.setState({ redirect: true }) }, 3000); // simulate loading
    }
  }

  componentDidMount() {
    this.setState({
      isLoaded: true
    });
  }

  render() {

    if (this.state.redirect) {
      return <Redirect to='/planner' />
    }

    return (

      <div id="outPopUp">
        
        <div class="row_logo">
          <img src="images/TouristsApp-03.png" />
        </div>
      </div>

    );

  }
}
