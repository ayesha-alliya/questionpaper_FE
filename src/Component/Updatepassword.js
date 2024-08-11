import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

export default function Updatepassword() {

    const [password,setPassword]=useState("")

  function Updatepassword()
  {
    const id=sessionStorage.getItem("UserId")
    const data={password,id}
    axios.put("http://localhost:8080/Updatepassword",data)
    .then((res)=>{
        alert(res.data)
        ClearAll()
    })
    .catch((err)=>{
        alert("Error",err)
    })
  }

  function ClearAll()
  {
    setPassword("")
  }

  return (
    <div>
    <div className="col-sm-6 mt-5 offset-3">
    <div className="card">
      <h4 className='text-center p-2'>Update Password</h4>

      <div className="card-body">
      <div className="form-outline">
          <label>Enter Update Password</label>
          <input type="text" className='form-control'    
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
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
