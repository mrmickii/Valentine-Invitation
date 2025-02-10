import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { App } from './path/App'
import { Rejected } from './path/Rejected'
import { Accepted } from "./path/Accepted";
import { FoodSelection } from "./path/FoodSelection";
import { MovieSelection } from "./path/MovieSelection";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/accepted" element={<Accepted/>}/>
        <Route path="/rejected" element={<Rejected/>}/>
        <Route path="food-selection" element={<FoodSelection/>} />
        <Route path="movie-selection" element={<MovieSelection/>} />
      </Routes>
    </Router>
  </StrictMode>,
)
