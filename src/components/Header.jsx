import React from 'react';
import Modals from './Modals';

function Header() {
  return (
    <div className='header'>
      <div className='logo'  onClick={() => location.reload()}>
        Commenterdle
      </div>
      <div className='modal'>
        <Modals />
      </div>
    </div>
  );
}

export default Header