import React, { Component } from 'react';

import { Navigation } from "./Style"

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false
        };
    }
    handleToggle(e) {
        e.preventDefault();
        this.setState({
            isExpanded: !this.state.isExpanded
        });
    }
    render() {
        const { isExpanded } = this.state;

        return (
            <Navigation>
                <div className="logo">
                    <button to="/">
                        <p>Better Design</p>
                        <em>
                            <div className="letterhead">
                                <span className="name">Q2Designer</span>
                                <span className="gray">.com</span>
                            </div>
                        </em>
                    </button>
                </div>
                <nav className="nav">
                    <i
                        className="fa fa-bars"
                        aria-hidden="true"
                        onClick={e => this.handleToggle(e)}
                    />
                    <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
                        <button active="active" to="/">
                            <li>Home</li>
                        </button>
                        <button active="active" to="/about">
                            <li>About</li>
                        </button>
                        <button active="active" to="/contact">
                            <li>Contact</li>
                        </button>
                    </ul>
                </nav>
            </Navigation>
        );
    }
}

export default Nav;