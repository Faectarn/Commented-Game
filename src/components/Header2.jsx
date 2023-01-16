import React, { useEffect, useState } from 'react';
import { useRecoilValue } from "recoil";
import logo from '../assets/commenterdle.png'
import Modals from './Modals';
// const logo = <img src="./assets/commenterdle.png" width="25"></img>
import { questionsState, selectedIndexState, languageState } from '../store/questions/atom';

import { LanguagePicker } from "./MainContent2"

const GBflag = <img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/joypixels/340/flag-united-kingdom_1f1ec-1f1e7.png' width="25"></img>
    const SEflag = <img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/joypixels/340/flag-sweden_1f1f8-1f1ea.png' width="25"></img>

function Header() {
  // const language = useRecoilValue(languageState);
  const questions = useRecoilValue(questionsState)
  const selectedIndex = useRecoilValue(selectedIndexState);

  const [language, setLanguage] = useState('en')

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
}


  return (
    <div className='header'>
      <img src={logo} className="logo2" onClick={() => location.reload()}></img>
      <div>
        <button onClick={() => changeLanguage(language['sv'])}>{SEflag}</button>
        <button onClick={() => changeLanguage(language['en'])}>{GBflag}</button>
      </div>
      <LanguagePicker />
      <div className='modal'>
      <Modals />
        
      </div>
    </div>
  );
}

export default Header