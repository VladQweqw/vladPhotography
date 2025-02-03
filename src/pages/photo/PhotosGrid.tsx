import { motion } from "framer-motion"
import {  parent_photo } from "../../animations"
import Photo from "./Photo"
import useFetch from "../../api/useApi"
import Loader from "../../components/loader";

export default function PhotosGrid() {

   const {data, isLoading, error} = useFetch({
      method: "GET",
      url: "/image",
      data: {},
      headers: {}
   });

   if(isLoading) {
      return <Loader />
   }

   if(error) {
      console.log(error);
      return <h1>An error ocucred</h1>
   }
   
   return (
      <motion.div 
      variants={parent_photo}
      initial={"hidden"}
      whileInView={"visible"}

      className="photos-grid">
         {
            data?.length ? data.map((item: PhotoType, index: number) => {
               return <Photo 
               data={item} 
               key={index} />
            }) : ""
         }
      </motion.div>
   )
}
