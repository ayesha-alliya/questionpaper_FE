import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Memberprofile() {

  const [password,setPassword]=useState("")
  const [email,setEmail]=useState("")
  const [address,setAddress]=useState("")
  const [phone,setPhone]=useState("")
  const [name,setName]=useState("")

  useEffect(()=>{
    Getusers()
  },[])

  function Updatepassword()
  {
    const regid=sessionStorage.getItem("UserId")
    const data={password,email,address,phone,name,regid}
    axios.put("http://localhost:8080/Updateprofile",data)
    .then((res)=>{
        alert(res.data)
       
    })
    .catch((err)=>{
        alert("Error",err)
    })
  }

  function Getusers()
  {
    const id=sessionStorage.getItem("UserId")
    axios.get(`http://localhost:8080/getusers/${id}`)
        .then((res)=>{
           setAddress(res.data.address)
           setEmail(res.data.email)
           setName(res.data.name)
           setPassword(res.data.password)
           setPhone(res.data.phone)
        })
  }

  return (
    <div>
    <div className="col-sm-6 mt-5 offset-3">
    <div className="card">
      <h4 className='text-center p-2'>Update Profile</h4>

      <div class="card-body ">
      <div className="form-outline">
      <label>Enter Name</label>
      <input type="text" className='form-control' 
       value={name}
      onChange={(e) => setName(e.target.value)}  
      />
  </div>
      <div className="form-outline">
      <label>Enter  Email</label>
      <input type="text" className='form-control'   
      value={email}
      onChange={(e) => setEmail(e.target.value)} 
      />
  </div>
      <div className="form-outline">
      <label>Enter  Password</label>
      <input type="text" className='form-control'    
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />
  </div>
      <div className="form-outline">
      <label>Enter  Address</label>
      <input type="text" className='form-control'
      value={address}
      onChange={(e) => setAddress(e.target.value)}    
      />
  </div>
      <div className="form-outline">
      <label>Enter  Phone</label>
      <input type="text" className='form-control'
      value={phone}
       onChange={(e) => setPhone(e.target.value)}    
      />
  </div>

</div>
      <div className='py-2'>
      <Link className="btn btn-success p-2 me-3 float-end" type='submit' onClick={Updatepassword}>Update</Link>
     </div>
    </div>
    </div>
    </div>
  )
}
