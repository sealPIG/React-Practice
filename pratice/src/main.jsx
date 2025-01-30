/**
 * hook
 * 生命週期
 * redux-saga
 * jotai 
 * tanskack-query
 * 
 * useffect
 * usestate 
 * props 傳遞
 */

import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Application from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Application />
  </BrowserRouter>
);
