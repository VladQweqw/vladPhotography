import { ImagesHeader } from "../../components/hero"
import { PhotosGrid } from "../../components/imagesPreview"
import Title from "../../components/title"

export default function Photos() {

   return(
    <section className="photos-page h-space section">
        <Title>Gallery</Title>

        <ImagesHeader />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <PhotosGrid />

    </section>
   )
}