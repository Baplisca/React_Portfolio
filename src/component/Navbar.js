import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                <ul className="navbar">
                    <li className="navbar_item"><Link className="navbar_link" to="/">Home</Link></li>
                    <li className="navbar_item"><Link className="navbar_link" to="/about">About</Link></li>
                    <li className="navbar_item"><Link className="navbar_link" to="/work">Work</Link></li>
                    <li className="navbar_item"><Link className="navbar_link" to="/contact">Contact</Link></li>
                </ul>
            </div>
        )
    }
}

export default Navbar;