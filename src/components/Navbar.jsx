import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="/images/img/prolife-logo.png" alt="Prolife Logo" />
          </Link>
        </div>

        <nav id="nav-links" className={showMenu ? "show" : ""}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/story">Our Story</Link></li>
            <li><Link to="/ourteam">Our Teams</Link></li>
            <li><a href="https://prolifefertility.com/" target="_blank">Fertility</a></li>

            <li className="dropdown">
              <a href="#">Services ▾</a>
              <ul className="dropdown-menu">
                <li><Link to="/pregnancy-maternity">Pregnancy / Maternity</Link></li>

                <li className="sub-dropdown">
                  <a href="#">Obstetrics ▸</a>
                  <ul className="sub-menu">
                    <li><Link to="/pre-pregnancy">Pre-pregnancy</Link></li>

                    <li className="inner-dropdown">
                      <a href="#">Your Pregnancy ▸</a>
                      <ul className="inner-menu">
                        <li><Link to="/just-pregnant">Just Pregnant</Link></li>
                        <li><Link to="/growing-time">Growing Time: 2nd Trimester</Link></li>
                        <li><Link to="/3rd-trimester">3rd Trimester</Link></li>
                        <li><Link to="/after-37-weeks">After 37 Weeks</Link></li>
                      </ul>
                    </li>

                    <li><Link to="/your-birth-its-time">Your Birth It's Time</Link></li>
                    <li><Link to="/post-natal-care">Post-Natal Care</Link></li>
                  </ul>
                </li>

                <li className="sub-dropdown">
                  <a href="#">Gynecology ▸</a>
                  <ul className="sub-menu">
                    <li><Link to="/abnormal-uterine-bleeding">Abnormal Uterine Bleeding</Link></li>
                    <li><Link to="/pap-smear-and-colposcopy">Pap Smear & Colposcopy</Link></li>
                    <li><Link to="/contraception-and-family-planning">Contraception</Link></li>
                    <li><Link to="/pelvic-organ-prolapse">Pelvic Organ Prolapse</Link></li>
                    <li><Link to="/pelvic-pain-endometriosis">Pelvic Pain</Link></li>
                    <li><Link to="/urinary-incontinence">Urinary Incontinence</Link></li>
                    <li><Link to="/ovarian-cysts">Ovarian Cysts</Link></li>
                    <li><Link to="/menopause">Menopause</Link></li>
                  </ul>
                </li>

                <li><Link to="/fetal-medicine">Fetal Medicine</Link></li>
                <li><Link to="/ultrasound">Ultrasound</Link></li>
                <li><Link to="/surgery-and-procedures">Surgery & Procedures</Link></li>
                <li><Link to="/lab">Lab</Link></li>
              </ul>
            </li>

            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/videos">Videos</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
          </ul>
        </nav>

        <div className="pharmacy-btn">
          <button
            onClick={() =>
              window.open("https://theprolifepharmacy.com/", "_blank")
            }
          >
            PHARMACY
          </button>
        </div>

        <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
          <span></span><span></span><span></span>
        </div>
      </div>
    </header>
  );
}
