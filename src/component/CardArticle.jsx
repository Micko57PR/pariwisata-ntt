import { Link } from "react-router-dom"

const CardArticle = ({data}) =>{
const artikel = data

    return(
        <>
        {artikel.map((data, index) => (
        <div className="col m-0" key={index}>
        <div className="card p-2 shadow-0" style={{width:"18em"}}>
    <img src={data.foto} class="card-img-top" alt={data.judul}/>
    <div className="card-body">
        <p className="text-sm text-secondary">{data.tanggal}</p>
    <h5 className="card-title">{data.judul}</h5>
    <p className="card-text">{data.par1.slice(0,70)}.....</p>
    <Link to={`/berita/${data.id}`}>Lihat selengkapnya</Link>
    </div>
    </div>
        </div>
        ))}
        </>
    )
}

export default CardArticle