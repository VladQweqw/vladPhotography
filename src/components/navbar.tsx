import { Link } from "react-router"
import { motion } from "framer-motion"

import { fadeTopBottom } from "../animations"

export default function Navbar() {

   return(
    <motion.div 
    variants={fadeTopBottom}
    initial={"hidden"}
    animate={"visible"}
    
    className="navbar">
        <div className="left">
            <div className="nav-item">
                <Link to={"/gallery"}>Gallery</Link>
            </div>
            <div className="nav-item">
                <Link to={"/panoramas"}>Panoramas</Link>
            </div>
        </div>
        <div className="center">
            <span className="line"></span>
            <div className="nav-item">
                <Link to={"/"}>Home</Link>
            </div>
            <span className="line"></span>
        </div>
        <div className="right">
            <div className="nav-item">
                <Link to={"/gear"}>Gear</Link>
            </div>
            <div className="nav-item">
                <Link to={""}>Support me</Link>
            </div>
        </div>
    </motion.div>
   )
}