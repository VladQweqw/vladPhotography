

import { motion } from "framer-motion";

import image from "../assets/images/hero-1.webp";
import image2 from "../assets/images/hero-2.webp";

import { heroImages } from "../animations";

export default function Hero() {

   return(
    <section className="hero">
      <div className="overlay"></div>
      
      <motion.div
       variants={heroImages}
       initial={"hidden"}
       animate={"visible"}

       style={{
         backgroundImage: `url(${image})`
      }}
      className="image-wrapper">
         <h1>Barajul Paltinu, Prahova, Romania</h1>
      </motion.div>

      <div
       style={{
         backgroundImage: `url(${image2})`
      }}
      className="image-wrapper right-text">
         <h1
         >La antene, Prahova, Romania</h1>
      </div>



    </section>
   )
}
