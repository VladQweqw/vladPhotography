
import { useState } from "react"
import image from "../assets/images/img.jpg"

export default function ImagesPreview() {

   return(
      <section className="photos h-space">
         <h2 className="sub-title">Photos</h2>

         <PhotosGrid />
         <div className="see-more">
            <span className="line"></span>
            <button>See more</button>
            <span className="line"></span>

         </div>
      </section>
   )
}


function PhotosGrid() {


   return(
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

function Photo() {
   const [photoClassSize, setPhotoClassSize] = useState("")
   


   return (
      <div className={`photo ${photoClassSize}`}>
         <img src={image} className="image" alt="" />
         <div className="hover">
            <div className="details">
               <div className="location">Sinaia, Prahova</div>
               <button className="see-img">See image</button>
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