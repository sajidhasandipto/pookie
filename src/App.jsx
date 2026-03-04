import HomePage from "./pages/HomePage"
import ShortsPage from './pages/ShortsPage'
import './index.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/shorts" element={<ShortsPage/>} />
    </Routes>
  )
}

export default App
