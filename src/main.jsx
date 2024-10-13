import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './components/config/muim-config.js'

createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter>
  <ThemeProvider theme={theme}>
    <App />
    <CssBaseline />               
  </ThemeProvider>
  </BrowserRouter>
  </>
)
