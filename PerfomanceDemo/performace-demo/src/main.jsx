import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppMemo from './AppMemo.jsx'
import Sample from './Sample.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <AppMemo/> */}
    <Sample/>
  </StrictMode>,
)
