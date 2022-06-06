import React from 'react';
import "./footer.css"
import FooterLogo from "../../assets/images/Footer/footerLogo.png"
import { Link } from 'react-router-dom';
const Footer = () => {
	return (
		<>
		<footer id="page-footer">
      <section className="foot-left">
        <img src={FooterLogo} alt="company" />
        <p>
          Talentlytica adalah perusahaan penyedia platform online 
          <b> assessment</b> berbasis cloud untuk kebutuhan
          <b> Talent Management</b> terkait <b>recruitment</b>,
          <b> assessment center</b>, <b>online interview</b> dan konsultasi
          strategis.
        </p>
        <Link to="#" className="orange">Karir</Link>
        <Link to="#" className="orange">Kebijakan & Privasi</Link>
      </section>
      <section className="foot-mid">
      </section>
      <section className="foot-right">
        <div className="icon">
          <ul>
            <li><img src="#" alt=""/></li>
            <li><img src="#" alt=""/></li>
            <li><img src="#" alt=""/></li>
          </ul>
        </div>
        <p>Senin - Jumat, 08:00-17:00 <br />(WhatsApp: +62-811-1566-199)</p>
        <p>
          PT. Global Talentlytica Indonesia Menara Kuningan Lt. 30 Unit B-C Jl.
          H. Rasuna Said Kav. 5 Karet Kuningan, Setiabudi, Jakarta Selatan -
          12940
        </p>
      </section>
    </footer>
		</>
	);
}

export default Footer;