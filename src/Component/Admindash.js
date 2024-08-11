import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import { IoMdLogOut } from "react-icons/io";
export default function Admindash() {
  return (
    <div>
    
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand> Automatic Question paper generation</Navbar.Brand>
      <Nav className="ms-auto">
      
    <Link className="nav-link text-white fw-bold" to="/admin/approvemember">  Approve Member </Link>
    <Link className="nav-link text-white fw-bold" to="/admin/course">  Course </Link>
    <Link className="nav-link text-white fw-bold" to="/admin/subject">  Subject </Link>
    <Link className="nav-link text-white fw-bold" to="/admin/Solveproblem">  View Problem </Link>
    <Link className="nav-link text-white fw-bold" to="/admin/adminprofile">  Update Password </Link>
    <Link className="nav-link text-white fw-bold" to="/">  Logout <IoMdLogOut /></Link>
      </Nav>
    </Container>
  </Navbar>
        <Outlet/>
  
    </div>
  )
}
