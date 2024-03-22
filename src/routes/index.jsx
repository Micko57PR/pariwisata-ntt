import {Routes, Route} from "react-router-dom"
import Home from '../pages/Home'
import Login from "../pages/Login"
import HalamanBerita from "../pages/HalamanBerita"
import TambahBerita from "../pages/TambahBerita"
import EditBerita from "../pages/EditBerita"
import Wisata from "../pages/Wisata"
import WisataKategori from "../pages/WisataKategori"
import WisataPage from "../pages/WisataPage"
import SearchPage from "../pages/SearchPage"
import Berita from "../pages/Berita"

export default function RoutesIndex(){
	
	return(
	<>
	<Routes>
	<Route path="/" element={<Home/>} />
	<Route path="/wisata" element={<Wisata/>} />
	<Route path="/wisata/kategori/:kategori" element={<WisataKategori/>} />
	<Route path="/login" element={<Login/>}/>
	<Route path="/tambah-berita" element={<TambahBerita/>}/>
	<Route path="/tambah-berita/edit/:id/:obj" element={<EditBerita/>}/>
	<Route path="/berita/:id" element={<HalamanBerita/>}/>
	<Route path="/wisata/:id" element={<WisataPage/>}/>
	<Route path="/search/" element={<SearchPage/>}/>
	<Route path="/berita/" element={<Berita/>} />
	</Routes>
	</>
	)
}