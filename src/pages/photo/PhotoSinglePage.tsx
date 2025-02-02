
import { Link } from "react-router-dom"
import image from "../../assets/images/img.jpg"
import PhotosGrid from "./PhotosGrid"
import Title from "../../components/title"


export default function PhotoPage() {

  function copyToClipboard() {

  }

  function downloadImage() {

  }

  return (
    <section className=" individual-page padd section m-top">
      <div className="image-container">
        <img src={image} className="image" alt="" />
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

      <Title>Other photos</Title>
      <PhotosGrid />

    </section>
  )
}