import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <App />
</BrowserRouter>
)
