
import { Link } from "react-router-dom"
import image from "../../assets/images//sinaia.png"
import Title from "../../components/title"

import PanoramasGrid from "./panoramas"

import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer"

export default function PanoramaPage() {

    function copyToClipboard() {

    }
  
    function downloadImage() {
  
    }

   return(
    <section className="individual-page section padd m-top">
      <div className="image-container panorama-container max-h">
        <ReactPhotoSphereViewer 
        width="100%"
        height="100%"
        src={image}
        />
      </div>

      <div className="image-details">
        <div className="details-left">
          <Link to={""} target="_blank">
            <h2 className="location">
              <i className="fa-solid fa-location-dot"></i>
              Comarnic, Romania
            </h2>
          </Link>
          <h3 className="device">Shot with DJI Mavic Mini</h3>
          <h4 className="date">17 January 2025</h4>
        </div>

        <div className="buttons">
          <button
          onClick={() => {
            copyToClipboard()
          }}
          className="button secondary-btn">Share</button>
          <button 
          onClick={() => {
            downloadImage()
          }}
          className="button primary-btn">Download</button>
        </div>
      </div>
        
      <Title>Other panoramas</Title>
     <PanoramasGrid space={false} />
    </section>
   )
}