import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from "recoil"
import App from './App'
import './styles/index.css'
import './styles/typography.css'
import './styles/mobile.css'
import './styles/buttons.css'
import './styles/header.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
    <App />
    </RecoilRoot>
  </React.StrictMode>,
)