import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = () => (
  <div className="header">
    <div className="logo-container" to="/shop">
      <Logo className="logo" />
    </div>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
