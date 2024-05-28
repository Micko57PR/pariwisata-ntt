import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export default function HalamanKuliner(){
const {id} = useParams()
const [kuliner, setKuliner] = useState([])
const [allKuliner, setAllKuliner] = useState([])

console.log(kuliner);
useEffect(() => {
axios.get('https://sheetdb.io/api/v1/rh9ggicipht6s')
.then(response => {
    const data = response.data
    const datas = Object.values(data)
    const item = datas.filter(dataa => dataa.id == id);
    setKuliner(item)
    setAllKuliner(datas)
})
},[])

    return(
        <>
        <section className="justify-content-center">
        <div className="d-flex card rounded border-0 m-5 p-4 shadow-0">
        {kuliner.map((data, index) => (
            <>
        <h3 className="fw-bold mb-3 text-align-center text-capitalize">{data.nama_kuliner}</h3>
        <img src={data.foto} className="rounded w-50"/>
        <h5 className="mb-3 text-align-center">Asal Daerah : {data.asal}</h5>
        <p class="text-justify mt-3">{data.deskripsi}</p>
        <Link to={`/kulinerNTT`}>Kembali Ke Halaman Kuliner</Link>
        
        </>
        ))}
        <hr/>
        </div>
        </section>
        </>
    )
}