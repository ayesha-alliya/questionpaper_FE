import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { IoMdLogOut } from 'react-icons/io'
import { Link, Outlet } from 'react-router-dom'


export default function Memberdash() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand> Automatic Question paper generation</Navbar.Brand>
          <Nav className="ms-auto">

            <Link className="nav-link text-white fw-bold" to="/member/question">  Add Question</Link>
            <Link className="nav-link text-white fw-bold" to="/member/paper">  Paper Genration </Link>
            <Link className="nav-link text-white fw-bold" to="/member/download">  Question paper  </Link>
            <Link className="nav-link text-white fw-bold" to="/member/Postproblem">  Post Problem   </Link>
            <Link className="nav-link text-white fw-bold" to="/member/memberprofile">  Update  profile  </Link>
            <Link className="nav-link text-white fw-bold" to="/">  Logout <IoMdLogOut /></Link>

          </Nav>
        </Container>
      </Navbar>
      <Outlet />

    </div>
  )
}
