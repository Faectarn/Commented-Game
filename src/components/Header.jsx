import React from 'react'
import { useRecoilValue } from "recoil"
import { selectedIndexState, } from '../store/questions/atom'
import Modals from './Modals'

function Header() {
  const selectedIndex = useRecoilValue(selectedIndexState)
  return (
    <div className='header'>
      <div className='logo'  onClick={() => location.reload()}>
        Commenterdle
      </div>
      <div className='modal'>
        <p>{selectedIndex + 1}</p>
        <Modals />
      </div>
    </div>
  );
}

export default Header