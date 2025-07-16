import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { BrowserRouter } from 'react-router'
import { CountryProvider } from './context/CountryContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
      <CountryProvider>
      <App />
      </CountryProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
