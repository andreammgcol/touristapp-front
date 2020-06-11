import React, { Component } from 'react';
import classNames from 'classnames';
import { Route } from 'react-router-dom';
import { AppTopbar } from './components/AppTopbar';
import { AppFooter } from './components/AppFooter';
import { AppMenu } from './components/AppMenu';
import { AppProfile } from './components/AppProfile';
import Home from './components/Home';
import { Main } from './components/Main';
import { PlannerContainer } from './components/PlannerContainer';
import './styles/menubar.css';
import './styles/basic.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            layoutMode: 'static',
            layoutColorMode: 'dark',
            staticMenuInactive: false,
            overlayMenuActive: false,
            mobileMenuActive: false
        };
    }

    render() {

        return (
            <div>

                <header>
                    <div class="encabezado">
                        <nav role="navigation">
                            <div id="menuToggle">
                                <input type="checkbox"/>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                <ul id="menu">
                                    <img src="images/icons/user_icon.png" />
                                    <li><a class="amenu" href="/"><p class="userName">Juan Guerra</p></a></li>
                                    <li><a class="amenu" href="/"><i class="fa fa-fw fa-user"></i>Account</a></li>
                                    <li><a class="amenu" href="/"><i class="fa fa-fw fa-commenting"></i>Notifications</a></li>
                                    <li><a class="amenu" href="/"><i class="fa fa-fw fa-list"></i>My plans</a></li>
                                    <li><a class="amenu" href="/"><i class="fa fa-fw fa-home"></i>Home</a></li>
                                    <li><a class="amenu" href="/"><i class="fa fa-fw fa-arrow-circle-right"></i>Log out</a></li>
                                    <li><a class="amenu" href="/"><i class="fa fa-fw fa-question-circle-o"></i>Help</a></li>
                                </ul>
                            </div>
                        </nav>
                        <div class="logo">
                            <img src="images/TouristsApp-03.png" alt="logo" />
                        </div>
                        <div class="box-login">
                            <div class="btn btn-login">
                                <span>SIGN IN</span>
                            </div>
                        </div>
                    </div>
                </header>

                <div class="location">
                    <div class="wrap">
                        <div class="search">
                            <input type="text" class="searchTerm" placeholder="What's your location?" />
                            <button type="submit" class="searchButton">
                                <i class="fa fa-map-marker"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* componentes /*/}
                <div className="layout-main">
                    <Route path="/" exact component={PlannerContainer} />
                    <Route path="/home" component={Home} />
                    <Route path="/main" component={Main} />
                    <Route path="/planner" component={PlannerContainer} />
                </div>

                <footer>
		        </footer>

                
            </div>
        );
    }
}

export default App;
