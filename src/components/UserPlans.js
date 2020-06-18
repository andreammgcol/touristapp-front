import React, { Component } from 'react';
import { Redirect } from 'react-router'
import { AppTopbar } from './AppTopbar';
import { AppFooter } from './AppFooter';
import { AppLocation } from './AppLocation';
import '../styles/menubar.css';
import '../styles/basic.css';
import '../styles/myplans.css';

export class UserPlans extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
        console.log('constructor LoginUsers')
    }

    handleEventMain = event => { 
        this.setState({
            redirect: true
        });
        event.preventDefault();
    };

    render() {
        if (this.state.redirect) {
            return <Redirect to='/planner' />
        }
        return (
            <div>
                <AppTopbar />
                <AppLocation />

                    <div class="wrapper">
            <section>
                <h3>Explore my plans</h3>
                <table>
                    <tbody>
                    <tr>
                        <th class="th5"><input type="checkbox"/></th>
                        <th class="th20"> My plan 1 - date creation</th>
                        <th class="th5"><i class="fa fa-search"></i></th>
                        <th class="th5"><i class="fa fa-share-alt"></i></th>
                        <th class="th5"><i class="fa fa-close"></i></th>
                    </tr>
                    <tr>
                        <th class="th5"><input type="checkbox"/></th>
                        <th class="th20"> My plan 2 - date creation</th>
                        <th class="th5"><i class="fa fa-search"></i></th>
                        <th class="th5"><i class="fa fa-share-alt"></i></th>
                        <th class="th5"><i class="fa fa-close"></i></th>
                    </tr>
                    <tr>
                        <th class="th5"><input type="checkbox"/></th>
                        <th class="th20"> My plan 3 - date creation</th>
                        <th class="th5"><i class="fa fa-search"></i></th>
                        <th class="th5"><i class="fa fa-share-alt"></i></th>
                        <th class="th5"><i class="fa fa-close"></i></th>
                    </tr>
                    <tr>
                        <th class="th5"><input type="checkbox"/></th>
                        <th class="th20"> My plan 4 - date creation</th>
                        <th class="th5"><i class="fa fa-search"></i></th>
                        <th class="th5"><i class="fa fa-share-alt"></i></th>
                        <th class="th5"><i class="fa fa-close"></i></th>
                    </tr>
                    <tr>
                        <th class="th5"><input type="checkbox"/></th>
                        <th class="th20"> My plan 5 - date creation</th>
                        <th class="th5"><i class="fa fa-search"></i></th>
                        <th class="th5"><i class="fa fa-share-alt"></i></th>
                        <th class="th5"><i class="fa fa-close"></i></th>
                    </tr>
                    <tr>
                        <th class="th5"><input type="checkbox"/></th>
                        <th class="th20"> My plan 6 - date creation</th>
                        <th class="th5"><i class="fa fa-search"></i></th>
                        <th class="th5"><i class="fa fa-share-alt"></i></th>
                        <th class="th5"><i class="fa fa-close"></i></th>
                    </tr>
                    
                    </tbody>
                </table>
            </section>
            </div>
            
                <AppFooter />
            </div>
        );
    }
}
