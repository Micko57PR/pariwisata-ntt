import CardArticle from "../component/CardArticle"
import axios from "axios"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import Pagination from "../component/Pagination"

export default function Berita(){
    const [artikel, setArtikel] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(8);
    
    useEffect(() => {
		axios.get('https://sheetdb.io/api/v1/d7gsiznuemgk2')
		.then(response => {
			setArtikel(response.data)
		})
	},[])

    const berita = artikel
    const changePageNo = (number) => setCurrentPage(number);
    const lastIndex = currentPage * dataPerPage;
    const firstIndex = lastIndex -  dataPerPage;
    const currentData = artikel?.slice(firstIndex,lastIndex);

    return(
        <>
        <div className="section m-3 p-3">
        <div className="container">
            <h3 className="mt-3 mb-5 fw-bold">Berita Dinas Pariwisata NTT</h3>
            <div className="row mt-0 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 g-5">
                <CardArticle data={currentData}/>
                </div>
                <center>
                <Pagination
                changePageNo={changePageNo} 
                data={artikel?.length}
                dataPerPage={dataPerPage}
                currentPage={currentPage}
                />
                </center>
        </div>
        </div>

        </>
    )
}