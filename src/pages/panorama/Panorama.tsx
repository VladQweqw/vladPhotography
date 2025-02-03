import { motion } from "framer-motion";
import { child_photo } from "../../animations";
import { useNavigate } from "react-router-dom";

import { endpoint } from "../../api/useApi";


export default function Panorama(props: {
    data: PanoramaType
}) {
    const navigate = useNavigate();
    const custom_al = `${props.data.country} ${props.data.county} ${props.data.device} ${props.data.title}`
    
    return (
        <motion.div
            variants={child_photo}

            onClick={() => {
                navigate(`/panorama/${props.data._id}`)
            }}
            className="panorama">
            <div className="img-wrapper">
                <img src={endpoint + props.data.thumbnail_url} alt={custom_al} className="panorama-preview" />
            </div>
            <h2 className="title">{props.data.title}</h2>
        </motion.div>
    )
}