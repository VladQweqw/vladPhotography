import { useNavigate } from "react-router"
import pan from "../../assets/images/pan-preview.png"

import { motion } from "framer-motion"
import { child_photo, parent_photo } from "../../animations"

export default function PanoramasGrid(props: {
    space: boolean
}) {

   return(
    <section className={`panoramas section padd ${props.space ? "h-space" : ""}`}>        
        <motion.div 
        variants={parent_photo}
        initial={"hidden"}
        whileInView={"visible"}
        className="panoramas-grid m-top">
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
        </motion.div>
    </section>
   )
}

function Panorama() {
    const navigate = useNavigate();

    return(
        <motion.div
        variants={child_photo}

        onClick={() => {
            navigate("/panorama/123")
        }}
        className="panorama">
            <div className="img-wrapper">
                <img src={pan} alt="Pan" className="panorama-preview" />
            </div>
        </motion.div>
    )
}