import React from 'react'
import { Link } from "react-router-dom";
import logo from './images/logo.jpg';

export default function Navigator() {
  // const navigate = useNavigate();
  return (
    <>
    
      <nav class="navbar navbar-expand-lg navbar-light bg-light navbar sticky-top">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/home" ><img src={logo} style={{ height: "40px", width: "55px" }}></img></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="./home">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="./showProducts">Shop Now</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/showCart" >Cart</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}



