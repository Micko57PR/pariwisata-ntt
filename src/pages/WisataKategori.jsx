import { useParams } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import CardWisata from "../component/CardWisata"

export default function WisataKategori() {
const {kategori} = useParams()
const [filter, setFilter] = useState('')
const [search, setSearch] = useState('')
const [wisata, setWisata] = useState([])

useEffect(() => {
axios.get('https://api.sheety.co/9cac24de8b1458fc4bb1ce50268083e5/databaseWisata/sheet1')
.then(response => {
  const data = response.data.sheet1
  const datas = Object.values(data)
  const wisataKategori = datas.filter(dataa => dataa.kategori == kategori)
  setWisata(wisataKategori)  
})
},[])

    return(
        <>
        <div className="section m-1 p-3">
        <div className="container">
        {kategori =='alam' ? <>
        <div className="justify-content-center mb-5">
        <h3 className="mt-5 fw-bold text-center">Wisata Alam</h3>  
        <p className="text-center">Nikmati berbagai macam keindahan wisata alam yang eksotis dari berbagai <br/> daerah-daerah di seluruh Nusa Tenggara Timur</p>
        </div>
        </> : null }

        {kategori =='budaya' ? <>
        <div className="justify-content-center mb-5">
        <h3 className="mt-5 fw-bold text-center">Wisata Budaya</h3>  
        <p className="text-center">Nikmati berbagai macam keindahan wisata budaya yang eksotis dari berbagai <br/> daerah-daerah di seluruh Nusa Tenggara Timur</p>
        </div>
        </> : null }

        <select className="form-select" aria-label="Default select example"
        onChange={(filter) => setFilter(filter.target.value)}>
        <option selected value=''>Pilih kabupaten</option>
        <option value="kota_kupang">Kotamadya Kupang</option>
        <option value="alor">Kabupaten Alor</option>
        <option value="belu">Kabupaten Belu</option>
        <option value="ende">Kabupaten Ende</option>
        <option value="flotim">Kabupaten Flores Timur</option>
        <option value="lembata">Kabupaten Lembata</option>
        <option value="kab_kupang">Kabupaten Kupang</option>
        <option value="manggarai">Kabupaten Manggarai</option>
        <option value="manggarai_barat">Kabupaten Manggarai Barat</option>
        <option value="manggarai_timur">Kabupaten Manggarai Timur</option>
        <option value="malaka">Kabupaten Malaka</option>
        <option value="nagekeo">Kabupaten Nagekeo</option>
        <option value="ngada">Kabupaten Ngada</option>
        <option value="rote">Kabupaten Rote Ndao</option>
        <option value="sabu">Kabupaten Sabu Raijua</option>
        <option value="sikka">Kabupaten Sikka</option>
        <option value="sumba_barat">Kabupaten Sumba Barat</option>
        <option value="SBD">Kabupaten Sumba Barat Daya</option>
        <option value="sumba_tengah">Kabupaten Sumba Tengah</option>
        <option value="sumba_timur">Kabupaten Sumba Timur</option>
        <option value="TTS">Kabupaten Timor Tengah Selatan</option>
        <option value="TTU">Kabupaten Timor Tengah Utara</option>
        </select>

        <h4 className="mt-4 fw-bold">Daftar Wisata</h4>
        <div className="input-group mt-3 mb-3 rounded">
        <input type="search" class="form-control rounded" placeholder="Cari Tempat Wisata" aria-label="Search" 
        aria-describedby="search-addon" onChange={(search) => setSearch(search.target.value)} />
        <span className="input-group-text border-0" id="search-addon">
            <i className="fas fa-search"></i>
        </span>
        </div>
        <div className="row mt-0 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 g-5">
        {filter == '' && search == '' ? <>
        <CardWisata data={wisata}/></> :
         <><CardWisata data={wisata.filter(data => data.namaWisata.includes(search) && data.kota.includes(filter))}/></>}
        </div>
        </div>
        </div>
        </>
    )
}