import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Registration() {

  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [name, setName] = useState("")

  function HandaleSubmit() {
    const data = { password, email, address, phone, name }
    axios.post("http://localhost:8080/registration", data)
      .then((res) => {
        alert("Registration Successfully " + "Registration Id : " + res.data)
        ClearAll()
      })
      .catch((err) => {
        alert("Failed")
      })
  }

  function ClearAll() {
    setPassword("")
    setAddress("")
    setName("")
    setEmail("")
    setPhone("")
  }

  return (
    <div className=''>
      <div class="container ">
        <div class="col-8 offset-2 mt-5">

          <div class="card  shadow">
            <div class="card-body bg-white shadow">
              <h3 class="text-center">Member Registration</h3>
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

              <div class="py-2 bg-white">

                <button class="btn btn-success float-end " onClick={HandaleSubmit}>Submit</button>
                <Link class="btn btn-danger float-end me-2" to='/'>Back</Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
