import React from 'react';
import Navigation from './Navigation';

function Header(props) {
  const { tab, handleChange } = props;

  return (
    <header className='header'>
        <div id='headerContent'>
          <h1>Helllo & Welcome!</h1>
        </div>
    </header>
  );
}

export default Header;
