
import image from "../../assets/images/img.jpg"


export default function PanoramaPage() {

   return(
    <section className="h-section individual-page">
        <div className="image-container">
            <img src={image} className="image" alt="" />
        </div>
    </section>
   )
}