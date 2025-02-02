import Title from "../components/title"

const arr = [
   {},
   {},
   {}
]

export default function Gear() {

   return (
      <section className="gear h-space">
         <header className="current-use">
            <h2 className="title">Currently using</h2>
            <div className="image-wrapper">
               <img src="https://images.unsplash.com/photo-1594532613117-a7ae728af431?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="image" />
            </div>
            <div className="details">
               <h2 className="device-name">DJI Mavic mini</h2>
               <p>Used for photos, videos & panoramas</p>
            </div>
         </header>

         <div className="upgrade-history">
            <Title>Upgrades Timeline</Title>
            <div className="upgrades">
               {arr.map((item: Object, key: number) => {
                  return <Upgrade key={key} final={key == arr.length - 1} />
               })}
            </div>
         </div>

      </section>
   )
}


function Upgrade(data: {
   final: boolean
}) {

   return (
      <>
         <div className="upgrade">
         <div className="image-wrapper">
            <img src="https://images.unsplash.com/photo-1556902566-0fe026c26f02?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
         </div>
         <div className="upgrade-details">
            <h2 className="upgrade-name">Alimium Joysticks</h2>
            <p className="upgrade-date">17 January 2025</p>
         </div>
         
      </div>
      {data.final ? "" : <div className="timeline-line"></div>}
      </>
   )
}