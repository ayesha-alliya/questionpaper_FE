import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { AiOutlineLogin } from "react-icons/ai";
import { FaRegRegistered } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand> Automatic Question paper generation</Navbar.Brand>
          <Nav className="ms-auto">
            <Link class="nav-link text-white fw-bold" to="/login">
              Login <AiOutlineLogin />
            </Link>
            <Link class="nav-link text-white fw-bold" to="/register">  Registration <FaRegRegistered /></Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='img'></div>
    </div>
  )
}