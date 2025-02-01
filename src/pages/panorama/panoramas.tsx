import { useNavigate } from "react-router"
import pan from "../../assets/images/pan-preview.png"

export default function Panoramas() {

   return(
    <section className="h-space panoramas">
        <Panorama />
        <Panorama />
        <Panorama />
        <Panorama />        
        <Panorama />
        <Panorama />
        <Panorama />
        <Panorama />        
        <Panorama />
        <Panorama />
        <Panorama />
        <Panorama />
    </section>
   )
}

function Panorama() {
    const navigate = useNavigate();

    return(
        <div
        onClick={() => {
            navigate("/panoramas/123")
        }}
        className="panorama">
            <div className="img-wrapper">
                <img src={pan} alt="Pan" className="panorama-preview" />
            </div>
        </div>
    )
}