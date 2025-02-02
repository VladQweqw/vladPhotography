import { Link } from "react-router-dom";
import Title from "../../components/title";
import PhotosGrid from "./PhotosGrid";

export default function ImagesPreview() {
   return (
      <section className="photos h-space section padd">
         <Title>Photos</Title>

         <PhotosGrid />

         <div className="see-more">
            <span className="line"></span>
            <Link to={"/gallery"}>
               <button
                  className="button primary-btn">See more</button>
            </Link>
            <span className="line"></span>

         </div>
      </section>
   )
}