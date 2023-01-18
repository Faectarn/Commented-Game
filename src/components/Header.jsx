import React from 'react';
import { useRecoilValue } from "recoil";
import logo from '../assets/commenterdle.png'
import Modals from './Modals';
// const logo = <img src="./assets/commenterdle.png" width="25"></img>
import { questionsState, selectedIndexState } from '../store/questions/atom';


function Header() {
  return (
    <div className='header'>
      {/* <img src={logo} className="logo2" onClick={() => location.reload()}></img> */}
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