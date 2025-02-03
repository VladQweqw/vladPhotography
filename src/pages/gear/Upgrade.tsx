import { motion } from "framer-motion"
import { child_photo } from "../../animations"
import { endpoint } from "../../api/useApi"
import { msToTime } from "../../functions/functions"

export default function Upgrade(props: {
    data: UpgradeType
    final: boolean,
 }) {
 
    return (
       <>
          <motion.div
          variants={child_photo}
          initial={"hidden"}
          whileInView={"visible"}
          className="upgrade">
          <div className="image-wrapper">
             <img src={endpoint + props.data.image_url} alt="" />
          </div>
          <div className="upgrade-details">
             <h2 className="upgrade-name">{props.data.name}</h2>
             <p className="upgrade-date">{msToTime(props.data.date)}</p>
          </div>
          
       </motion.div>
       {props.final ? "" : <div className="timeline-line"></div>}
       </>
    )
 }