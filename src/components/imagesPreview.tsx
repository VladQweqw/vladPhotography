
import { useState } from "react"
import image from "../assets/images/aaa_1.jpg"
import { Link } from "react-router-dom"
import Title from "./title"

export default function ImagesPreview() {

   return (
      <section className="photos h-space section padd">
         <Title>Photos</Title>

         <PhotosGrid />
         <div className="see-more">
            <span className="line"></span>
            <Link to={"/gallery"}>
               <button className="button primary-btn">See more</button></Link>
            <span className="line"></span>

         </div>
      </section>
   )
}


export function PhotosGrid() {
   return (
      <div className="photos-grid">
         <Photo />
         <Photo />
         <Photo />
         <Photo />
         <Photo />
         <Photo />
         <Photo />
         <Photo />
         <Photo />
         <Photo />
         <Photo />
         <Photo />
         <Photo />
         <Photo />
         <Photo />
         <Photo />
         <Photo />
         <Photo />
      </div>
   )
}

export function Photo() {
   const [photoClassSize] = useState("")

   return (
      <div className={`photo ${photoClassSize}`}>
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
      </div>
   )
}