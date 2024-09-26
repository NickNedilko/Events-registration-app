import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import App from './components/App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from './components/provider/Provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
       <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
