import { Link } from "react-router-dom"
import Rating from "./Rating"
const CardWisata = ({data}) => {
console.log(data)
    return(
        <>
        {data.length == 0 ? <>
        <p className="text-align-justify fw-bold">Data Tidak Ditemukan</p>
        </> : <>{data.map((item, i) => (
        <div className="col m-0 " key={i}>
        <div className="card border-0 shadow-0 p-2" style={{width:"18em"}}>
        <img src={item.foto1} class="card-img-top rounded" alt='judul'/>
        <div className="card-body">
        <h5 className="card-title fw-bold text-capitalize">{item.namaWisata}</h5>
        <div className="row">
        <div className="col">
        <Link to={`/wisata/${item.id}`} style={{fontSize:'12px'}}>Lihat selengkapnya</Link>
        </div>
        <div className="col">
        <Rating value={item.rating} maxValue={5}/>
        </div>
        </div>
        </div>
        </div>
        </div>
        ))}</>}
        </>
    )
}

export default CardWisata