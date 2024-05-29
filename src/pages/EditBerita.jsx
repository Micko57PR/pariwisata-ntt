import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

export default function EditBerita(){
    const auth = localStorage.getItem('auth')
    const [berita, setBerita] = useState([])
    const [judul, setJudul] = useState('')
    const [par1, setPar1] = useState('')
    const [par2, setPar2] = useState('')
    const [par3, setPar3] = useState('')
    const [par4, setPar4] = useState('')
    const [par5, setPar5] = useState('')
    const [foto, setFoto] = useState('')
    const currDate = new Date().toLocaleDateString();
    const {id} = useParams()
    let navigate = useNavigate();
    const {obj} = useParams()
    console.log(obj)

useEffect(() => {
    axios.get('https://sheetdb.io/api/v1/d7gsiznuemgk2')
    .then(response => {
        const data = response.data
        const datas = Object.values(data)
        const item = datas.filter(dataa => dataa.id.includes(id));
        setBerita(item)
        setPar1(item[0].par1)
        setPar2(item[0].par2)
        setPar3(item[0].par3)
        setPar4(item[0].par4)
        setPar5(item[0].par5)
        setJudul(item[0].judul)
        setFoto(item[0].foto)
    })

    if(!auth){
        navigate("/")
    }
},[])

const Edit = () =>{
    axios.put(`https://api.sheety.co/9cac24de8b1458fc4bb1ce50268083e5/artikelWisata/sheet1/${obj}`,{
        sheet1:{
            judul:judul,
            par1:par1, par2:par2, par3:par3, par4:par4, par5:par5,
            foto:foto,
            tanggal:currDate
        }
    }).then(response => {
        navigate("/tambah-berita")}).then(data => {
        console.log(data)})
        
        window.location.reload()
    )
    
}

    return(
        <>
        <section className="mt-5 d-flex justify-content-center">
        <div class="card p-2 m-2 h-50 w-50">
        <form>
    <h5 className="mb-4 mt-2">Tambah Berita</h5>
    <div className="form-group">
    <label for="exampleInputEmail1">Judul</label>
    <input type="text" className="form-control" placeholder="tambahkan judul" 
    onChange={(judul) => setJudul(judul.target.value)} defaultValue={judul} required/>
  </div>

  <div className="form-group mt-4">
    <label for="exampleInputEmail1">Deskripsi</label>
    <textarea className="form-control" placeholder="paragraf 1" onChange={(par1) => setPar1(par1.target.value)}
    defaultValue={par1}></textarea>
  </div>

  <div className="form-group mt-4">
    <textarea className="form-control" placeholder="paragraf 2" onChange={(par2) => setPar2(par2.target.value)}
    value={par2}></textarea>
  </div>

  <div className="form-group mt-4">
    <textarea className="form-control" placeholder="paragraf 3" onChange={(par3) => setPar3(par3.target.value)}
    value={par3}></textarea>
  </div>

  <div className="form-group mt-4">
    <textarea className="form-control" placeholder="paragraf 4" onChange={(par4) => setPar4(par4.target.value)}
    value={par4}></textarea>
  </div>

  <div className="form-group mt-4">
    <textarea className="form-control" placeholder="paragraf 5" onChange={(par5) => setPar5(par5.target.value)}
    value={par5}></textarea>
  </div>

  <div className="form-group mt-4">
    <label for="exampleInputEmail1">Link foto</label>
    <input type="text" className="form-control" placeholder="tambahkan link foto"
    onChange={(foto) =>setFoto(foto.target.value)} defaultValue={foto} required/>
  </div>

    <div className="form-group mt-4">
    <button className="btn btn-primary rounded-pill"
    onClick={() => Edit()}>Edit</button>
    </div>
    </form>
    </div>
    </section>
        </>
    )
}
