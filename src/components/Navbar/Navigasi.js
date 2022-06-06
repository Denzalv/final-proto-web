import React from "react";
import "./navigasi.css";
import NavigasiLogo from "../../assets/images/Navigasi/navigasiLogo.png";
import { Link } from "react-router-dom";

const Navigasi = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">
            <img src={NavigasiLogo} alt="icon" />
          </Link>
          <ul>
            <li>
              <Link to="/">Beranda</Link>
            </li>
            <li>
              <a href="#aboutid">Tentang</a>
            </li>
            <li>
              <a href="#demoid">Demo</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navigasi;
