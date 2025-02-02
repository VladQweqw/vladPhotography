import { useNavigate } from "react-router"
import pan from "../../assets/images/pan-preview.png"
import Title from "../../components/title";

export default function PanoramasGrid() {

   return(
    <section className="panoramas section padd m-top h-space">
        <Title>Panoramas</Title>
        
        <div className="panoramas-grid">
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