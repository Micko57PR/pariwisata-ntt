import { Link } from "react-router-dom"

const CardCulinary = ({data}) =>{
const kuliner = data

    return(
        <>
        {kuliner.map((data, index) => (
        <div className="col m-0" key={index}>
        <div className="card p-2 shadow-0" style={{width:"24em"}}>
            <img src={data.foto} class="card-img-top" alt={data.nama_kuliner}/>
            <div className="card-body">
                <h5 className="card-title">{data.nama_kuliner}</h5>
                <Link to={`/kulinerNTT/${data.id}`}>Lihat selengkapnya</Link>
    </div>
    </div>
        </div>
        ))}
        </>
    )
}

export default CardCulinary