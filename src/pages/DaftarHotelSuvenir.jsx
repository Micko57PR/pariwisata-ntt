import { useParams } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import CardHotel from "../component/CardHotel"

export default function DaftarHotelSuvenir() {
const {lokasi} = useParams()
const [filter, setFilter] = useState('')
const [search, setSearch] = useState('')
const [hotelSuvenir, setHotelSuvenir] = useState([])

useEffect(() => {
axios.get('https://api.sheety.co/d5c1b9f9f0400d6b49ecf702f01bad92/hotel&suvenirNtt/sheet1')
.then(response => {
  const data = response.data.sheet1
  const datas = Object.values(data)
  const hotelSuvenirLokasi = datas.filter(dataa => dataa.lokasi == lokasi)
  setHotelSuvenir(hotelSuvenirLokasi)  
})
},[])

    return(
        <>
        <div className="section m-1 p-3">
        <div className="container">
        {lokasi =='kota_kupang' ? <>
        <div className="justify-content-center mb-5">
        <h3 className="mt-5 fw-bold text-center">Daftar Hotel & Toko Oleh-Oleh di Kota Kupang</h3>  
        <p className="text-center">Informasi hotel & toko oleh-oleh yang ada di Kota Kupang</p>
        </div>
        </> : null }

        {lokasi =='manggarai_barat' ? <>
        <div className="justify-content-center mb-5">
        <h3 className="mt-5 fw-bold text-center">Daftar Hotel & Toko Oleh-Oleh di Kabupaten Manggarai Barat</h3>  
        <p className="text-center">Informasi hotel & toko oleh-oleh yang ada di Kabupaten Manggarai Barat</p>
        </div>
        </> : null }

        {lokasi =='kab_kupang' ? <>
        <div className="justify-content-center mb-5">
        <h3 className="mt-5 fw-bold text-center">Daftar Hotel & Toko Oleh-Oleh di Kabupaten Kupang</h3>  
        <p className="text-center">Informasi hotel & toko oleh-oleh yang ada di Kabupaten Kupang</p>
        </div>
        </> : null }

        {lokasi =='SBD' ? <>
        <div className="justify-content-center mb-5">
        <h3 className="mt-5 fw-bold text-center">Daftar Hotel & Toko Oleh-Oleh di Kabupaten Sumba Barat Daya</h3>  
        <p className="text-center">Informasi hotel & toko oleh-oleh yang ada di Kabupaten Sumba Barat Daya</p>
        </div>
        </> : null }

        {lokasi =='sumba_barat' ? <>
        <div className="justify-content-center mb-5">
        <h3 className="mt-5 fw-bold text-center">Daftar Hotel & Toko Oleh-Oleh di Kabupaten Sumba Barat</h3>  
        <p className="text-center">Informasi hotel & toko oleh-oleh yang ada di Kabupaen Sumba Barat</p>
        </div>
        </> : null }

        {/* <select className="form-select" aria-label="Default select example"
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
        </select> */}

        <div className="row mt-0 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 g-5">
        { hotelSuvenir.populer == 1 ? <>
        <CardHotel data={hotelSuvenir}/></>:null}
        </div>
        </div>
        </div>
        </>
    )
}