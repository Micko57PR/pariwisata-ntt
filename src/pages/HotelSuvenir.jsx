
import { Navigate, useParams } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function HotelSuvenir() {
        const {daerahNTT} = useParams();
        const [lokasi, setLokasi] = useState('');
        let navigate = useNavigate();
        const [hotelSuvenir, setHotelSuvenir] = useState([])
        
        useEffect(() => {
        axios.get('https://api.sheety.co/d5c1b9f9f0400d6b49ecf702f01bad92/hotel&suvenirNtt/sheet1')
        .then(response => {
          const data = response.data.sheet1
          const datas = Object.values(data)
          const hotelSuvenir = datas.filter(dataa => dataa.lokasi == lokasi)
          setHotelSuvenir(hotelSuvenir)  
        })
        },[])

        
            return(
                <>
                <div className="section m-1 p-3">
                <div className="container">
                <h3 className="fw-bold mb-4 text-capitalize text-center">Hotel & Toko Oleh-Oleh/Suvenir</h3>
                <p className="text-center">Informasi hotel & toko oleh-oleh yang ada di Provinsi Nusa Tenggara Timur</p>
                <select className="form-select" aria-label="Default select example"
                onChange={(lokasi) => setLokasi(lokasi.target.value)}>
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

                <button className="btn btn-primary rounded-pill" onClick={() => navigate(`/DaftarHotelSuvenir/${lokasi}`)}>Lanjut</button>
        

                </div>
                </div>
                </>
            )
        }
    
