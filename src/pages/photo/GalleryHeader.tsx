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

import image from "../../assets/images/img.jpg";


export default function ImagesHeader() {
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