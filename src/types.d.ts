type PhotoType = {
    _id: string,
    country: string,
    county: string,
    date: number,
    device: string,
    download_url: string,
    preview_url: string,
    size: string,
    title: string
}

type PanoramaType = {
    _id: string,
    country: string,
    county: string,
    date: number,
    device: string,
    download_url: string,
    preview_url: string,
    thumbnail_url: string,
    size: string,
    title: string
}

type UpgradeType = {
    _id: string,
    name: string,
    date: number,
    image_url: string
}

type linkType = {
    redirect: string,
    name: string
}