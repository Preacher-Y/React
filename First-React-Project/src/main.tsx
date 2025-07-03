import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import reactIcon from "./assets/reactIcon.png"
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <img src={reactIcon} className="absolute top-24 right-0 -z-10" alt="React logo" />
    <App />
  </StrictMode>,
)
