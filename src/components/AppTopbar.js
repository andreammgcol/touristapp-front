import React, {Component} from 'react';

export class AppTopbar extends Component {

    render() {
        return (
            <header>
                <div className="encabezado">
                  <nav role="navigation">
                      <div id="menuToggle">
                          <input type="checkbox"/>
                              <span></span>
                              <span></span>
                              <span></span>
                          <ul id="menu">
                              <img src="images/icons/user_icon.png" alt="" />
                              <li><a className="amenu" href="/"><p className="userName">Juan Guerra</p></a></li>
                              <li><a className="amenu" href="/"><i className="fa fa-fw fa-user"></i>Account</a></li>
                              <li><a className="amenu" href="/"><i className="fa fa-fw fa-commenting"></i>Notifications</a></li>
                              <li><a className="amenu" href="/"><i className="fa fa-fw fa-list"></i>My plans</a></li>
                              <li><a className="amenu" href="/"><i className="fa fa-fw fa-home"></i>Home</a></li>
                              <li><a className="amenu" href="/"><i className="fa fa-fw fa-arrow-circle-right"></i>Log out</a></li>
                              <li><a className="amenu" href="/"><i className="fa fa-fw fa-question-circle-o"></i>Help</a></li>
                          </ul>
                      </div>
                  </nav>
                  <div className="logo">
                      <img src="images/TouristsApp-03.png" alt="logo" />
                  </div>
                  <div className="box-login">
                      <div className="btn btn-login">
                          <span><i className="fa fa-power-off"></i></span>
                      </div>
                  </div>
                </div>
            </header>
        );
    }
}