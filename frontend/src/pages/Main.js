import React from 'react';
import PropTypes from 'prop-types';

const Main = ({ children }) => (
  <div id="wrapper">
    <header>
      <h1>Site Header</h1>
    </header>
    <main id="main">{children}</main>
    <footer>
      <p>Site Footer</p>
    </footer>
  </div>
);

Main.propTypes = {
  children: PropTypes.node,
};

Main.defaultProps = {
  children: null,
};

export default Main;
