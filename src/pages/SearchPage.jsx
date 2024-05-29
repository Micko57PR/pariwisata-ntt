import { useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import CardArticle from "../component/CardArticle";
import CardWisata from "../component/CardWisata";

export default function SearchPage(){
    const [searchParams] = useSearchParams();
    const cari = searchParams.get('item')
    const [berita, setBerita] = useState([])
    const [wisata, setWisata] = useState([])

    useEffect(() => {
    axios.get('https://sheetdb.io/api/v1/fkijxoik54rl1')
	.then(response => {
	    const data = response.data
        const filters = data.filter(dataa => dataa.deskripsi.includes(cari))
        setBerita(filters)
		})

    axios.get('https://api.sheety.co/92569ff1ab8ae34c8cdad7ffbb3f5d1f/databaseWisata/sheet1')
    .then(response => {
          const data = response.data.sheet1
          const datas = Object.values(data)
          const datawisata = datas.filter(dataa => dataa.namaWisata.includes(cari))
          setWisata(datawisata)  
        })
    },[cari])

    console.log(berita)
    return(
        <>
<div className="section m-3 p-3">
  <div className="container">
  <div className="justify-content-center mb-5">
  <div className="alert alert-primary" role="alert">
  Hasil pencarian: {cari}
</div> 
{berita.length > 0 || wisata.length > 0 ? <>
    <div className="row mt-0 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 g-5">
    <CardArticle data={berita}/>
    <CardWisata data={wisata} />
    </div>
</>:null}


  </div>
  </div>
  </div>
        </>
    )
}