import logo from './logo.svg';
import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'leaflet/dist/leaflet.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from 'axios'
import {useState, useEffect} from 'react'
import Rating from '../src/component/Rating'
import  RoutesIndex from './routes'
import Navbar from './component/Navbar';
import Footer from './component/Footer';

function App() {

  return (
<>
<Navbar/>
<RoutesIndex/>
<Footer/>
</>
  );
}

export default App;
