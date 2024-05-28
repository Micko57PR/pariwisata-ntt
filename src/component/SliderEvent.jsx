import { Link } from "react-router-dom"
const SliderEvent = ({data}) => {
console.log(data)
    return(
        <>
        {data.length == 0 ? <>
        </> : <>{data.map((item, i) => (
        <div className="col m-0 " key={i}>
        <div className="card border-0 shadow-0 p-2" style={{width:"18em"}}>
        <img src={item.foto} class="card-img-top rounded" alt='judul'/>
        <div className="card-body">
        <h5 className="card-title fw-bold text-capitalize">{item.nama_event}</h5>
        <div className="row">
        <div className="col">
        <Link to={`/wisata/${item.id}`} style={{fontSize:'12px'}}>Klik Untuk Perbesar</Link>
        </div>
        <div className="col">
        </div>
        </div>
        </div>
        </div>
        </div>
        ))}</>}
        </>
    )
}

export default SliderEvent