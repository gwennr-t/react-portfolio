import React from 'react';
import Navigation from './Navigation';

function Header(props) {
  const { tab, handleChange } = props;

  return (
    <header className='header'>
        <div id='headerContent'>
          <div id='headerImage'>
            <img src='./assets/images/IMG_4491 Small.png'></img>
          </div>
          <div id='headerTitle'>
            <h1>Helllo & Welcome</h1>
          </div>
        </div>
    </header>
  );
}

export default Header;
