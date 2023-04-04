import "./App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Destination from "./pages/Destination"
import Crew from "./pages/Crew"
import Technology from "./pages/Technology"

const App = () => {
  return (
    // <main className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </BrowserRouter>
    // </main>

  )
}

export default App