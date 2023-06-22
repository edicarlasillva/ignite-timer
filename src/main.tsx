import React from 'react'
import ReactDOM from 'react-dom/client'
// Named Export
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
