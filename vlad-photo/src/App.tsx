import { BrowserRouter as Router, Routes, Route } from "react-router"

import "./styles/main.css"

import Navbar from "./components/navbar"
import Home from "./pages/home"
import Footer from "./components/footer"

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
