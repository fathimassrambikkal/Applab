import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import '@fontsource/roboto';
import '@fontsource/merriweather';
import '@fontsource/merriweather/700.css';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
