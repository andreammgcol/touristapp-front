import React, { Component } from 'react';
import { Redirect } from 'react-router'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            error: null,
            redirect: false
        }
    }

    handleLogin = event => { 
        this.setState({
            redirect: true
        });
        event.preventDefault();
    };

    render() {

        if (this.state.redirect) {
            return <Redirect to='/main' />
        }

        return (
            <div className="p-grid p-fluid">

                <div className="p-col-12">
                    <div className="card">
                        <h1>Home</h1>
                        <p>The home page.</p>
                    </div>
                </div>

                <div className="p-col-12">
                    <div className="card card-w-title">
                        <h1>Login</h1>
                        <div className="p-col-12">
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="p-col-12">
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className="p-col-12">
                            <input type="button" value="Next" onClick={this.handleLogin} />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default (Home);
