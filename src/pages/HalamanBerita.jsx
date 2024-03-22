import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export default function HalamanBerita(){
const {id} = useParams()
const [berita, setBerita] = useState([])
const [allberita, setAllberita] = useState([])
const [prevberita, setPrevberita] = useState(null)
const [nextberita, setNextberita] = useState(null)

useEffect(() => {
axios.get('https://sheetdb.io/api/v1/d7gsiznuemgk2')
.then(response => {
    const data = response.data
    const datas = Object.values(data)
    const item = datas.filter(dataa => dataa.id.includes(id));
    const prev = datas.map(dataa => dataa.id)
    setBerita(item)
    const cekindex = prev.findIndex(checkIndex);
    const prevs = cekindex - 1
    if (prevs < 0){
    const prevs = 0
    setPrevberita(prevs)
    } else {
    setPrevberita(prevs)
    }
    const nexts = cekindex + 1
    if (nexts >= prev.length){
        const nexts = cekindex - 1
        setNextberita(nexts)
    } else{
        setNextberita(nexts)
    }
    function checkIndex(index) {
    return index == id
    }
    setAllberita(datas)
})
},[])

console.log(prevberita)
console.log(nextberita)
    return(
        <>
        <section className="justify-content-center">
        <div className="d-flex card rounded border-0 m-5 p-4 shadow-0">
        {berita.map((data, index) => (
            <>
        <h3 className="fw-bold mb-3 text-align-center text-capitalize">{data.judul}</h3>
        <img src={data.foto} className="rounded w-50"/>
        <p class="text-justify mt-3">{data.par1}</p>
        <p class="text-justify mt-3">{data.par2}</p>
        <p class="text-justify mt-3">{data.par3}</p>
        <p class="text-justify mt-3">{data.par4}</p>
        <p class="text-justify mt-3">{data.par5}</p>
        <p className="mt-4 text-secondary">Penulis: Admin</p>
        <p className="text-secondary">Date: {data.tanggal}</p>
        </>
        ))}
        <hr/>
        <div className="row">
        <div className="col text-start">
        <p className="text-muted">Berita sebelumnya</p>
        {prevberita !== null ? <>
        <a className="text-capitalize" href={`/berita/${allberita[prevberita].id}`}>{allberita[prevberita].judul}</a>
        </>:null}
        </div>
        <div className="col text-end">
        <p className="text-muted">Berita berikutnya</p>
        {nextberita !== null ? <>
        <a className="text-capitalize" href={`/berita/${allberita[nextberita].id}`}>{allberita[nextberita].judul}</a>
        </>:null}
        </div>
        </div>
        </div>
        </section>
        </>
    )
}