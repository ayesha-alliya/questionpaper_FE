import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaLock, FaUser } from "react-icons/fa";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { MdHome } from "react-icons/md";
import axios from 'axios';

export default function Login() {
  const UserType = ["Admin", "Member"];

  const [user, setUser] = useState("");
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  function Login(e) {
    debugger
    e.preventDefault();

    const data = {
      usertype: user,
      id: userid,
      password: password,
    };
    axios
      .post('http://localhost:8080/LoginVerify', data)
      .then((res) => {

        sessionStorage.setItem("UserId", userid)

        debugger;
        if (res.data === "Admin") {
          alert("Login Successfully")

          navigate("/admin");
        }


        else if (res.data === "Member") {
          alert("Login Successfully")

          navigate("/member/question");
        }
        else {
         alert(res.data)
        }

      })
      .catch((err) => {
        console.log(err);
        alert("invalid")
      });
  }



  return (
    <div className="img1">
      <div className="">
        <div className="shadow">
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand> Automatic Question paper generation</Navbar.Brand>
              <Nav className="ms-auto">

                <Link className="nav-link text-white fw-bold" to="/">  Home <MdHome /></Link>
              </Nav>
            </Container>
          </Navbar>

        </div>

        <router-outlet></router-outlet>



        <div class="container">

          <div className="col-lg-6 mt-5 " >

            <div className="bg-white shadow rounded">


              <div className=" pe-0">
                <div className="form-left h-100 py-5 px-5">
                  <div className="row g-4" style={{ height: '100%' }}>
                    <h3 className="mb-3 text-center tracking-in-expand" style={{ color: 'rgb(220, 140, 75)', fontSize: ' 35px', fontWeight: ' bold' }}>Login Now</h3>
                    <div className="form-group">
                      <label className="form-label">Usertype</label>

                      <select
                        className="form-select mb-1 text-center "
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        required
                      >
                        <option selected value="" hidden>
                          ----Select----
                        </option>
                        {UserType.map((user, index) => {
                          return (
                            <option key={index} value={user}>
                              {user}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="col-12">
                      <label>User Id</label>
                      <div className="input-group">
                        <div className="input-group-text"><FaUser /></div>
                        <input type="text" className='form-control' value={userid}
                          onChange={(e) => setUserid(e.target.value)}
                          required />
                      </div>
                    </div>

                    <div class="col-12">
                      <label>Password</label>
                      <div className="input-group">
                        <div className="input-group-text"><FaLock /></div>
                        <input type="password" className='form-control' onChange={(e) => setPassword(e.target.value)}
                          required />
                      </div>
                    </div>

                    <div className="p-2 d-flex justify-content-end">
                      <button className="btn btn-primary" type="submit" onClick={Login}>
                        Submit
                      </button>
                      <Link className="btn btn-danger mx-3" to="/" >
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>


            </div>

          </div>

        </div>



      </div>
    </div>
  )
}
