import { useNavigate } from "react-router"
import pan from "../../assets/images/pan-preview.png"

export default function PanoramasGrid(props: {
    space: boolean
}) {

   return(
    <section className={`panoramas section padd ${props.space ? "h-space" : ""}`}>        
        <div className="panoramas-grid m-top">
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
        </div>
    </section>
   )
}

function Panorama() {
    const navigate = useNavigate();

    return(
        <div
        onClick={() => {
            navigate("/panorama/123")
        }}
        className="panorama">
            <div className="img-wrapper">
                <img src={pan} alt="Pan" className="panorama-preview" />
            </div>
        </div>
    )
}