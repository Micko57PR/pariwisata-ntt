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
    axios.get('https://api.sheety.co/9cac24de8b1458fc4bb1ce50268083e5/databaseWisata/sheet1')
    .then(response => {
    const data = response.data.sheet1
    // const datas = Object.values(data)
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
    <h5 className="fw-bold text right">Jalur Transportasi:</h5>
    <ul className="text-right">
    {wisata.udara == 1 ? <><li>Transportasi Udara</li> <h5>{wisata.jalur_udara}</h5></>:null}
    {wisata.laut == 1 ? <><li>Transportasi Laut</li></>:null}
    {wisata.darat == 1 ? <><li>Transportasi Darat</li></>:null}
    </ul>
    <h5 className="fw-bold text right mt-4">Fasilitas:</h5>
    <p className="text-capitalize">{wisata.fasilitas}</p>
    </div>
    </div>
    </div>
     {latitude && longitude != null ? <>
    <MapContainer className="mt-5 rounded" center={[latitude, longitude]} zoom={13} scrollWheelZoom={false} style={{height:"300px"}}>
    <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
        </div>
        <Link to={`/wisata/`} style={{fontSize:'12px'}} class="text-align-justify mt-3" >Kembali Ke Daftar Wisata</Link>
        
        
        </section>
        </>
    )
}