import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
const Navbar = () => {
	const [search, setSearch] = useState('')
	const auth = localStorage.getItem('auth')
	const Logout = () =>
	{
		localStorage.removeItem('auth')
		Swal.fire({
			icon: "success",
			title: "Berhasil",
			text: "Logout berhasil",
		  }).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {
				window.location.reload()
			}
		  });
		 
	}

	const navigate = useNavigate()
	
	const submit = (search)=>{
		navigate(`/search/?item=${search}`)
	}

	return(
	<>
	<div className="p-3 bg-dark navbar-expand-lg navbar-light bg-light">
	<div className="container">
	{/* <img src="https://i.ibb.co/VQhnd05/ntt-logo.png" height={50}></img>
	<center><h4 className="fw-bold text-light">DINAS PARIWISATA DAN EKONOMI KREATIF 
	<br/>PROVINSI NUSA TENGGARA TIMUR</h4></center> */}
	<div class="container">
		<center>
  <div class="row text-white">
    <div class="col-sm item-center">
	<img src="https://i.ibb.co.com/FqMKrBM/ntt-logo.png" height={70}></img>
    </div>
    <div class="col-lg">
	<h5 className="fw-bold text-light">DINAS PARIWISATA DAN EKONOMI KREATIF 
	PROVINSI NUSA TENGGARA TIMUR</h5>
    </div>
    <div class="col-sm">
    <img src="https://i.ibb.co.com/8zJLK9Y/Capture-removebg-preview.png" height={70}></img>
    </div>
  </div>
  </center>
</div>
	</div>
	</div>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Beranda</a>
        </li>
      
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Profil
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
			<li><a class="dropdown-item" href="#">Provinsi Nusa Tenggara Timur</a></li>
            <li><a class="dropdown-item" href="#">Dinas Pariwisata dan Ekonomi NTT</a></li>
          </ul>
        </li>

		<li class="nav-item">
          <Link class="nav-link" to='/berita'>Berita</Link>
        </li>

		<li class="nav-item">
          <Link class="nav-link" to='/wisata'>Wisata</Link>
        </li>

		<li class="nav-item">
          <a class="nav-link" href="/event">Event</a>
        </li>

		<li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Akomodasi
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/hotel-suvenir">Hotel & Souvenir/Toko Oleh-Oleh</a></li>
            <li><a class="dropdown-item" href="/kulinerNTT">Kuliner</a></li>
          </ul>
        </li>

      </ul>
	  <form class="d-flex">
		{auth ? <>
			<div class="nav-item dropdown me-4">
          <a class="dropdown-toggle btn btn-primary rounded-pill" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Admin
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="/tambah-berita">Tambah berita</Link></li>
            <li><a class="dropdown-item" href="#">Tambah wisata</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a href="/" class="dropdown-item" onClick={()=>Logout()}>Logout</a></li>
          </ul>
        </div>
		</> : <><Link className="me-4" to="/login">Login</Link></>}

        <div className="input-group">
		<div className="form-outline" data-mdb-input-init>
			<input type="search" id="form1" className="form-control border" 
			onChange={(search) => setSearch(search.target.value)} placeholder="cari disini"/>
		</div>
		<button type="button" className="btn btn-primary" data-mdb-ripple-init
		onClick={()=>submit(search)}>
			<i className="fas fa-search"></i>
		</button>
		</div>
      </form>
    </div>
  </div>
</nav>
	</>
	)
}

export default Navbar