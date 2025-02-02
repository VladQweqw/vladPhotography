import { motion } from "framer-motion"
import {  parent_photo } from "../../animations"
import Photo from "./Photo"

export default function PhotosGrid() {
   return (
      <motion.div 
      variants={parent_photo}
      initial={"hidden"}
      whileInView={"visible"}

      className="photos-grid">
         <Photo />
         <Photo />
         <Photo />
         <Photo />
         <Photo />
         <Photo />
         <Photo />
         <Photo />
         <Photo />
         <Photo />
         <Photo />
         <Photo />
         <Photo />
         <Photo />
         <Photo />
         <Photo />
         <Photo />
         <Photo />
      </motion.div>
   )
}
