

import { motion } from "framer-motion";

import image from "../assets/images/img.jpg";
import image2 from "../assets/images/img2.jpg";
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
         >Cota 1400, Sinaia, Romania</h1>
      </div>



    </section>
   )
}
