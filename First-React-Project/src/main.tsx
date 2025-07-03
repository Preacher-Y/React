import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import reactIcon from "./assets/reactIcon.png"
import './index.css'
import {Body, Nav} from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav />
    <img src={reactIcon} className="absolute top-24 right-0 -z-20" alt="React logo" />
    <Body />
  </StrictMode>,
)
