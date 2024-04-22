import React from 'react';

function Navigation(props) {
    const {tab, handleChange} = props;
  
    return (
    <nav className='navbar'>
      <ul id='navTabs'>
        <li className='navTab'>
          <a href='#aboutMe' onClick={() => handleChange('About Me')} className={tab === 'About Me' ? 'nav-link active':'nav-link'}>About Me</a>
        </li>
        <li className='navTab'> 
          <a href='#portfolio' onClick={() => handleChange('Portfolio')} className={tab === 'Portfolio' ? 'nav-link active':'nav-link'}>Portfolio</a>
        </li>
        <li className='navTab'>
          <a href='#contact' onClick={() => handleChange('Contact')} className={tab === 'Contact' ? 'nav-link active':'nav-link'}>Contact</a>
        </li>
        <li className='navTab'>
          <a href='#resume'  onClick={() => handleChange('Resume')} className={tab === 'Resume' ? 'nav-link active':'nav-link'}>Resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
