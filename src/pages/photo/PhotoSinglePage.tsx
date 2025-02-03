
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";

import PhotosGrid from "./PhotosGrid"
import Title from "../../components/title"
import useFetch, { endpoint } from "../../api/useApi";
import Loader from "../../components/loader";

import NotFound404 from "../404";
import ErrorPage from "../../components/error";
import { copyToClipboard, downloadMedia, msToTime } from "../../functions/functions";


export default function PhotoPage() {

  const { id } = useParams();

  const { data, isLoading, error }: {
    data?: PhotoType,
    isLoading: boolean,
    error: string | null
  } = useFetch({
    method: "GET",
    url: `/image?id=${id}`,
    data: {},
    headers: {}
  });

  if (!id) return <NotFound404 />

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    console.log(error);
    return <ErrorPage />
  }
  
  return (
    <section className=" individual-page padd section m-top">

      {data ?
        <>
          <div className="image-container">
            <img src={endpoint + data?.preview_url} className="image" alt={
              `${data?.country} ${data?.county} ${data?.device} ${data?.title}`
            } />
          </div>

          <div className="image-details">
            <div className="details-left">
              <Link to={""} target="_blank">
                <h2 className="location">
                  <i className="fa-solid fa-location-dot"></i>
                  {data?.country}, {data?.country}
                </h2>
              </Link>
              <h3 className="device">Shot with {data?.device}</h3>
              <h4 className="date">{msToTime(data?.date)}</h4>
            </div>

            <div className="buttons">
              <button
                onClick={() => {
                  copyToClipboard(window.location.pathname)
                }}
                className="button secondary-btn">Share</button>
              <button
                onClick={() => {
                  downloadMedia(
                    data.download_url,
                    data.title + ".jpg")
                }}
                className="button primary-btn">Download</button>
            </div>
          </div>
        </>
        : ""}

      <Title>Other photos</Title>
      <PhotosGrid />
    </section>
  )

}