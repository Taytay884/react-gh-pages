import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSideMenuOpen: false
    };
  }

  toggleMenu = e => {
    e.preventDefault();
    this.setState({ isSideMenuOpen: !this.state.isSideMenuOpen });
  };

  render() {
    return (
      <header className="App-header flex space-between align-center justify-center">
        <h1 className="App-title">CrypTop</h1>
        <div className="hamburger" onClick={this.toggleMenu}>
          {this.state.isSideMenuOpen ? (
            <i className="menu-icon-active" />
          ) : (
            <i className="menu-icon" />
          )}
        </div>
        <div
          className={
            this.state.isSideMenuOpen ? "side-bar menu" : "nav-bar menu"
          }
        >
          <ul className="flex space-between">
            <li>
              <NavLink exact activeClassName="selected" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="selected" to="/contact">
                Contacts
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="selected" to="/login">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
export default Header;
