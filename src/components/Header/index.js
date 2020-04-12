import React from "react";
import PropTypes from 'prop-types';

// import 'index.scss';

const Header = ({children}) => (
  <header className="py-2 mb-2">
    {children}
  </header>
);

export default Header;

Header.propTypes = {
  children: PropTypes.object
};
