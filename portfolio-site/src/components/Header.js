import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Portfolio</h1>
    <NavLink className="link" to="/" activeClassName="is-active" exact={true}> Home </NavLink>
    <NavLink className="link" to="/portfolio" activeClassName="is-active"> Portfolio </NavLink>
    <NavLink className="link" to="/contact" activeClassName="is-active"> Contact </NavLink>
  </header>
);

export default Header;
