import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './main_styling.css'
import App from './App.jsx'
import Pricing from './pricing.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Pricing />
  </StrictMode>,
)
