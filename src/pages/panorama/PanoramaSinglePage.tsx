
import { useParams } from "react-router-dom"
import Title from "../../components/title"

import PanoramasGrid from "./PanoramasGrid"

import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer"
import useFetch, { endpoint } from "../../api/useApi"
import NotFound404 from "../404"
import Loader from "../../components/loader"
import ErrorPage from "../../components/error"
import { copyToClipboard, downloadMedia, msToTime } from "../../functions/functions"

export default function PanoramaPage() {
  const { id } = useParams();

  const { data, isLoading, error }: {
    data: PanoramaType,
    isLoading: boolean,
    error: string | null
  } = useFetch({
    method: "GET",
    url: `/panorama?id=${id}`,
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
    <section className="individual-page section padd m-top">
      {data ? <>
        <div className="image-container panorama-container max-h">
          <ReactPhotoSphereViewer
            width="100%"
            height="100%"
            src={endpoint + data.preview_url}
          />
        </div>

        <div className="image-details">
          <div className="details-left">
              <h2 className="location">
                <i className="fa-solid fa-location-dot"></i>
                {data?.country}, {data?.country}
              </h2>
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
                  data.title + ".jpg"
                )
              }}
              className="button primary-btn">Download</button>
          </div>
        </div>

      </> : ''}

      <Title>Other panoramas</Title>
      <PanoramasGrid space={false} />
    </section>
  )
}