import { BrowserRouter as Router, Routes, Route } from "react-router"

import "./styles/main.css"

import Navbar from "./components/navbar"
import Home from "./pages/home"

import Photos from "./pages/photo/photos"
import PhotoPage from "./pages/photo/photoPage"

import PanoramasGrid from "./pages/panorama/panoramas"
import PanoramaPage from "./pages/panorama/PanoramaPage"

import NotFound404 from "./pages/404"

import Footer from "./components/footer"
import Gear from "./pages/gear"
import Journal from "./pages/journal"

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/gallery" element={<Photos />}></Route>
          <Route path="/panoramas" element={<PanoramasGrid />}></Route>
          <Route path="/gear" element={<Gear />}></Route>
          <Route path="/journal" element={<Journal />}></Route>

          <Route path="/photo/:id" element={<PhotoPage />}></Route>
          <Route path="/panorama/:id" element={<PanoramaPage />}></Route>

          <Route path="*" element={<NotFound404 />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
