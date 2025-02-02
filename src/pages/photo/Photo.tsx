import { useState } from "react"
import { child_photo } from "../../animations"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import image from "../../assets/images/aaa_1.jpg"


export default function Photo() {
    const [photoClassSize] = useState("")
 
    return (
       <motion.div 
       variants={child_photo}
       
       className={`photo ${photoClassSize}`}>
          <img src={image} className="image" alt="" />
          <div className="hover">
             <div className="details">
                <Link to={"https://maps.app.goo.gl/Vo3FidpScVpvQuPR6"} target="_blank">
                   <div className="location">
                      <i className="fa-solid fa-location-dot"></i>
                      Sinaia, Prahova
                   </div>
                </Link>
 
                <Link to={`/photo/123`}>
                   <button
                      className="see-img button see-image-btn">See image</button>
                </Link>
             </div>
             <div className="download-wrapper">
                <a href="" className="download-btn">
                   <i className="fa-solid fa-download"></i>
                </a>
             </div>
          </div>
       </motion.div>
    )
 }