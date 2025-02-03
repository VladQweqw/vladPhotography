import { gearFade } from "../../animations"
import useFetch from "../../api/useApi";
import ErrorPage from "../../components/error";
import Loader from "../../components/loader";
import Title from "../../components/title"

import { motion } from "framer-motion"
import Upgrade from "./Upgrade";

import drone from "../../assets/images/drone.webp"

export default function Gear() {

   const { data, isLoading, error }: {
           data: UpgradeType[],
           isLoading: boolean,
           error: string | null;
       } = useFetch({
           method: "GET",
           url: "/upgrades",
           data: {},
           headers: {}
       });
   
       if (isLoading) {
           return <Loader />
       }
   
       if (error || !data) {
           return <ErrorPage />
       }
   

   return (
      <section className="gear h-space">
         <motion.header
         initial={"hidden"}
         animate={"visible"}
         variants={gearFade}
         className="current-use">
            <h2 className="title">Currently using</h2>
            <div className="image-wrapper">
               <img src={drone} alt="DJI Mavic Mini" className="image" />
            </div>
            <div className="details">
               <h2 className="device-name">DJI Mavic mini</h2>
               <p>Used for photos, videos & panoramas</p>
            </div>
         </motion.header>
         

         <div className="upgrade-history">
            <Title>Upgrades Timeline</Title>
            <div
      
            className="upgrades">
               {data?.length ? data?.map((upgrade: UpgradeType, key: number) => {
                  return <Upgrade 
                  data={upgrade} 
                  key={key} 
                  final={key == data.length - 1} />
               }) : ""}
            </div>
         </div>

      </section>
   )
}
