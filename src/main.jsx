import React from 'react'
import ReactDOM from 'react-dom/client'
import { AfiliadosProvider } from './context/AfiliadosProvider.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AfiliadosProvider>
      <App />
    </AfiliadosProvider>
  </React.StrictMode>,
)
