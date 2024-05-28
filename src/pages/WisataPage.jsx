import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import axios from "axios";
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
import Rating from "../component/Rating";


export default function WisataPage(){
    const [wisata, setWisata] = useState([])
    const {id} = useParams()
    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)
    const [position, setposition] = useState([])

    useEffect(() => {
    axios.get('https://api.sheety.co/ca8c3dbf07a7f25c4580d99a5bb63100/databaseWisata/sheet1')
    .then(response => {
    const data = response.data.sheet1
    const datas = Object.values(data)
    const item = data.filter(data => data.id == id);
    setWisata(item[0])
    setLatitude(item[0].latitude)
    setLongitude(item[0].longitude)
    setposition([item[0].latitude, item[0].longitude])
    })
    },[])

    console.log([latitude, longitude])
    return(
        <>
        <section className="justify-content-center">
        <div className="d-flex card rounded border-0 m-5 p-4 shadow-0 vh-200">
        <h2 className="fw-bold mb-4 text-capitalize text-center">{wisata.namaWisata}</h2>
        <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src={wisata.foto1} className='d-block card-img-tops rounded' alt={wisata.namaWisata} />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src={wisata.foto2} className='d-block card-img-tops rounded' alt={wisata.namaWisata} />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src={wisata.foto3} className='d-block card-img-tops rounded' alt={wisata.namaWisata} />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={4}>
        <img src={wisata.foto4} className='d-block card-img-tops rounded' alt={wisata.namaWisata} />
      </MDBCarouselItem>
    </MDBCarousel>
    <div className="mt-4">
    <Rating value={wisata.rating} maxValue={5}/>
    <div className="row">
    <div className="col">
    <p class="text-justify mt-3">{wisata.deskripsi}</p>
    </div>
    <div className="col">
    <h4 className="fw-bold text right">Alamat/Lokasi:</h4><p>{wisata.alamat}</p>
    <h4 className="fw-bold text right">Jalur Transportasi:</h4>
    <ul className="text-right">
    {wisata.udara == 1 ? <><li><h5 className="fw-bold text right">Transportasi Udara:</h5><p>{wisata.jalurUdara}</p></li></>:null}
    {wisata.laut == 1 ? <><li><h5 className="fw-bold text right">Transportasi Laut:</h5><p>{wisata.jalurLaut}</p></li></>:null}
    {wisata.darat == 1 ? <><li><h5 className="fw-bold text right">Transportasi Darat:</h5><p>{wisata.jalurDarat}</p></li></>:null}
    </ul>
    <h5 className="fw-bold text right mt-4">Fasilitas:</h5>
    <p className="text-capitalize">{wisata.fasilitas}</p>
    </div>
    </div>
    </div>
     {latitude && longitude != null ? <>
    <MapContainer className="mt-5 rounded" center={[latitude, longitude]} zoom={13} scrollWheelZoom={false} style={{height:"300px"}}>
    <TileLayer
        attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
    />
    <Marker position={[latitude, longitude]}>
      <Popup>
      <p className="mb-4 text-capitalize fw-bold">{wisata.namaWisata}</p>
      <br/>
      <Link to={wisata.map} target="_blank" className="btn btn-sm text-capitalize text-white shadow-0 btn-primary">Lihat maps</Link>
      </Popup>
      
    </Marker>
    </MapContainer>
    </> : null
    }
    <Link to={`/wisata/`} style={{fontSize:'15px'}} class="text-justify mt-3" >Kembali Ke Daftar Wisata</Link>
        </div>
        
        
        
        </section>
        </>
    )
}