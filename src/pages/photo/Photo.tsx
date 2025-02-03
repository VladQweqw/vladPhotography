import { useState } from "react"
import { child_photo } from "../../animations"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import { downloadMedia } from "../../functions/functions"
import { endpoint } from "../../api/useApi"

export default function Photo(props: {
   data: PhotoType
}) {
   const [photoClassSize] = useState("")

   const custom_al = `${props.data.country} ${props.data.county} ${props.data.device} ${props.data.title}` 
   
    return (
      <motion.div
         variants={child_photo}

         className={`photo ${photoClassSize}`}>
         <img src={endpoint + props.data.preview_url} className="image" alt={custom_al} />
         <div className="hover">
            <div className="details">
               <div className="location">
                  <i className="fa-solid fa-location-dot"></i>
                  {props.data.county} {props.data.country}
               </div>

               <Link to={`/photo/${props.data._id}`}>
                  <button
                     className="see-img button see-image-btn">See image</button>
               </Link>
            </div>
            <div className="download-wrapper">
               <div 
               onClick={(e) => {
                  e.preventDefault();
                  downloadMedia(
                     props.data.download_url,
                     props.data.title + ".jpg")
               }}
               className="download-btn">
                  <i className="fa-solid fa-download"></i>
               </div>
            </div>
         </div>
      </motion.div>
   )
}