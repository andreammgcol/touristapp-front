import React, { Component } from 'react';

export class AppLocation extends Component {

    render() {
        return (
            <div className="location">
                <div className="wrap">
                    <div className="search">
                        <input type="text" className="searchTerm" placeholder="What's your location?" />
                        <button type="submit" className="searchButton">
                            <i className="fa fa-map-marker"></i>
                        </button>
                    </div>
                </div>
              </div>
        );
    }
}
