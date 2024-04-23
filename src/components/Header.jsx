import React from 'react';
import Navigation from './Navigation';

function Header(props) {
  return (
    <header className='header'>
        <div id='headerContent'>
          <h1>Hello & Welcome!</h1>
          <Navigation />
        </div>
    </header>
  );
}

export default Header;
