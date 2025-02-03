
import { motion } from "framer-motion"
import { parent_photo } from "../../animations"
import useFetch from "../../api/useApi"
import Loader from "../../components/loader"
import ErrorPage from "../../components/error"
import Panorama from "./Panorama"

export default function PanoramasGrid(props: {
    space: boolean
}) {
    const { data, isLoading, error }: {
        data: PanoramaType[],
        isLoading: boolean,
        error: string | null;
    } = useFetch({
        method: "GET",
        url: "/panorama",
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
        <section className={`panoramas section padd ${props.space ? "h-space" : ""}`}>
            <motion.div
                variants={parent_photo}
                initial={"hidden"}
                whileInView={"visible"}
                className="panoramas-grid m-top">
                {data?.length ?
                data.map((panorama: PanoramaType, index: number) => {
                    return <Panorama 
                    data={panorama} 
                    key={index} />
                })
                : " "}
            </motion.div>
        </section>
    )
}
