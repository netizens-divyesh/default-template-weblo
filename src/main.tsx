import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// Get basename from <base> tag (injected by builder with project ID)
// Falls back to /preview for local development
const baseTag = document.querySelector('base')
const basename = baseTag ? baseTag.getAttribute('href')?.replace(/\/$/, '') || '/preview' : '/preview'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
