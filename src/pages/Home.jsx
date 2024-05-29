import CardArticle from "../component/CardArticle"
import axios from "axios"
import { useState, useEffect } from "react"
import SliderWisata from "../component/SliderWisata"
import Wisata from "./Wisata"
import { Link } from "react-router-dom"

export default function Home() {
	const [artikel, setArtikel] = useState([])
	const [utama, setUtama] = useState([])

	useEffect(() => {
		axios.get('https://sheetdb.io/api/v1/d7gsiznuemgk2')
		.then(response => {
			setArtikel(response.data)
		})
	},[])

	useEffect(() => {
		axios.get('https://api.sheety.co/92569ff1ab8ae34c8cdad7ffbb3f5d1f/databaseWisata/sheet1')
		.then(response => {
			const data = response.data.sheet1
			const utamas = Object.values(data)
			const filterUtama = utamas.filter(dataa => dataa.utama == 1);
			setUtama(filterUtama)
		})
		},[])
	const berita = artikel.slice(0, 6)
	return(
	<>
  
  <div className="container">
 <h3 className="mt-3 mb-5 fw-bold">Berita Terkini</h3>
  <div className="row mt-0 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 g-5">
 <CardArticle data={berita}/>
  </div>
 <Link to={'/berita'}><button className="btn btn-light mt-5 rounded-pill">Lihat selengkapnya</button>
 </Link> 
  </div>
  
  <div className="section m-3 p-3">
	<h4 className="mt-5 fw-bold text-center">Destinasi Utama Nusa Tenggara Timur</h4>
	<div className="mt-5">
  	<SliderWisata data={utama}/>
	</div>
	</div>
	
	
	</>
	)
}
