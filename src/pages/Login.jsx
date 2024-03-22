import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"


export default function Login(){
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [adminusername, setAdminusername]=useState('')
const [adminpassword, setAdminpassword]=useState('')
let navigate = useNavigate();
const auth = localStorage.getItem('auth')

useEffect(()=>{
axios.get('https://api.sheety.co/d5c1b9f9f0400d6b49ecf702f01bad92/auth/sheet1')
.then(response => {
    setAdminpassword(response.data.sheet1[0].password)
    setAdminusername(response.data.sheet1[0].username)
})

},[])

if (auth){
    navigate("/")
}

const submit = () => {
    if(username == adminusername && password == adminpassword){
        localStorage.setItem('auth', true)
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
    }else{
        Swal.fire({
            icon: "error",
            title: "ERROR",
            text: "Username atau password salah",
          });
    }
}

    return(
        <>
        <section className="mt-5 d-flex justify-content-center">
        <div class="card p-2 m-2 h-50 w-50">
        <form>
    <h5 className="mb-4 mt-2">Login Admin</h5>
  <div class="form-outline mb-4">
    <input type="text" id="form2Example1" class="form-control"
    onChange={(username) => setUsername(username.target.value)} />
    <label class="form-label" for="form2Example1">Username</label>
  </div>
  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control"
    onChange={(password) => setPassword(password.target.value)} />
    <label class="form-label" for="form2Example2">Password</label>
  </div>
  <button onClick={() => submit()} type="button" class="btn btn-primary btn-block mb-4">Sign in</button>
</form>
</div>
</section>
        </>
    )
}