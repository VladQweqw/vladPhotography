
const margins = [
   {
      margin: 200,
      anim_time: 4,
   },
   {
      margin: 25,
      anim_time: 7,
   },
   {
      margin: 200,
      anim_time: 5,
   },
   {
      margin: 50,
      anim_time: 6,
   },
]

import image from "../assets/images/img.jpg";
import image2 from "../assets/images/img2.jpg";

export default function Hero() {

   return(
    <section className="hero">
      <div className="overlay"></div>
      
      <div
       style={{
         backgroundImage: `url(${image})`
      }}
      className="image-wrapper">
         <h1>Barajul Paltinu, Prahova, Romania</h1>
      </div>

      <div
       style={{
         backgroundImage: `url(${image2})`
      }}
      className="image-wrapper right-text">
         <h1>Cota 1400, Sinaia, Romania</h1>
      </div>



    </section>
   )
}

export function ImagesHeader() {

   return(
    <section className="section padd">

      <div className="wrapper">
      {margins.map((item: {
         margin: number,
         anim_time: number
      }, key: number) => {
         return <div
         key={key}
         style={{
            width: `${100 / margins.length}%`,
            animation: `${key % 2 == 0 ? "move-horizontally-down" : "move-horizontally-up"} ${item.anim_time}s ease-in-out alternate infinite forwards`,
            marginTop: `${item.margin}px`,
         }}
         className="first-section section">
            <div 
            style={{
               backgroundImage: `url(${image})`,
            }}
            className="background-img"></div>
      </div>
      })}
      
    </div>
    </section>
   )
}