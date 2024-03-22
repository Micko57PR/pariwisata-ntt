import CardArticle from "../component/CardArticle"
import axios from "axios"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Berita(){
    const [artikel, setArtikel] = useState([])

    
    useEffect(() => {
		axios.get('https://sheetdb.io/api/v1/d7gsiznuemgk2')
		.then(response => {
			setArtikel(response.data)
		})
	},[])

    const berita = artikel.slice(0, 3)

    return(
        <>
        <div className="section m-3 p-3">
        <div className="container">
            <h3 className="mt-3 mb-5 fw-bold">Berita Dinas Pariwisata NTT</h3>
            <div className="row mt-0 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 g-5">
                <CardArticle data={berita}/>
                </div>
                <Link to={'/berita'}>
                    <center>
                    <button className="btn btn-light mt-5 rounded-pill">Lihat selengkapnya</button>
                    </center>
                </Link>
        </div>
        </div>

        </>
    )
}