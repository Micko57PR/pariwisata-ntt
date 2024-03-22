import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
export default function TambahBerita(){
    const auth = localStorage.getItem('auth')
    let navigate = useNavigate();
    const [judul, setJudul] = useState('')
    const [par1, setPar1] = useState('')
    const [par2, setPar2] = useState('')
    const [par3, setPar3] = useState('')
    const [par4, setPar4] = useState('')
    const [par5, setPar5] = useState('')
    const [foto, setFoto] = useState('')
    const [berita, setBerita] = useState([])
    const currDate = new Date().toLocaleDateString();
    const id = berita.length

    useEffect(() => {
    axios.get('https://sheetdb.io/api/v1/fkijxoik54rl1')
    .then(response => {
        setBerita(response.data)
    })

        if(!auth){
            navigate("/")
        }
    },[])
    
    const submit = ()=>{
        axios.post('https://api.sheety.co/9cac24de8b1458fc4bb1ce50268083e5/artikelWisata/sheet1', {
            sheet1:{
                id:id + 1,
                judul:judul,
                par1:par1, par2:par2, par3:par3, par4:par4, par5:par5,
                foto:foto,
                tanggal:currDate
            }
        })
    }

    const Delete = (id) => {
        Swal.fire({
            title: "Apakah anda yakin?",
            showCancelButton: true,
            confirmButtonText: "Hapus",
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://api.sheety.co/9cac24de8b1458fc4bb1ce50268083e5/artikelWisata/sheet1/${id}`)
                Swal.fire({
                    icon: "success",
                    title: "Berhasil",
                    text: "Berhasil dihapus",
                  }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.reload()
                    }
                })
            } else if (result.isDenied) {
              Swal.fire("Tidak dihapus", "", "info");
            }
          });
       
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
    onChange={(judul) => setJudul(judul.target.value)} value={judul} required/>
  </div>

  <div className="form-group mt-4">
    <label for="exampleInputEmail1">Deskripsi</label>
    <textarea className="form-control" placeholder="paragraf 1" onChange={(par1) => setPar1(par1.target.value)}
    value={par1}></textarea>
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
    onChange={(foto) =>setFoto(foto.target.value)} required/>
  </div>

    <div className="form-group mt-4">
    <button className="btn btn-primary rounded-pill"
    onClick={() => submit()}>Submit</button>
    </div>
    </form>

    <table className="table mt-5">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Judul</th>
      <th scope="col">Deskripsi</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {berita.map ((item, i) => ( 
    <tr>
      <th scope="row">{i + 1}</th>
      <td>{item.judul}</td>
      <td>{item.par1.slice(0, 50)}...</td>
      <td><div class="btn-group" role="group" aria-label="Basic example">
  <Link to={`/tambah-berita/edit/${item.id}/${i+2}`} class="btn btn-info text-white">Edit</Link>
  <button type="button" class="btn btn-danger"
  onClick={() => Delete(i+2)}>Delete</button>
</div></td>
    </tr>
    ))
    }
  </tbody>
</table>
    </div>
    </section>
        </>
    )
}