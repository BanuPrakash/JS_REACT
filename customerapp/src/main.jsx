import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// render() is responsible to convert JS created from JSX to UI element like actual DOM
createRoot(document.getElementById('root')).render(<App />)

