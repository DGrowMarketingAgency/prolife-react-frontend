import React, { useState } from "react";
import "../index.css";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">
          <img src="./images/img/prolife-logo.png" alt="Prolife Logo" />
        </div>

        <nav id="nav-links" className={showMenu ? "show" : ""}>
          <ul>
            <li><a href="./">Home</a></li>
            <li><a href="./story">Our Story</a></li>
            <li><a href="./team">Our Teams</a></li>
            <li><a href="https://prolifefertility.com/">Fertility</a></li>
            <li className="dropdown">
              <a href="#">Services ▾</a>
              <ul className="dropdown-menu">
                <li><a href="./pregnancy-maternity">Pregnancy / Maternity</a></li>
                <li className="sub-dropdown">
                  <a href="#">Obstetrics ▸</a>
                  <ul className="sub-menu">
                    <li><a href="./Pre-pregnancy">Pre-pregnancy</a></li>
                    <li className="inner-dropdown">
                      <a href="#">Your Pregnancy ▸</a>
                      <ul className="inner-menu">
                        <li><a href="./just-pregnant">Just Pregnant</a></li>
                        <li><a href="./growing-time">Growing Time: 2nd Trimester</a></li>
                        <li><a href="./3rd-trimester">The End Is Near – 3rd Trimester</a></li>
                        <li><a href="./after-37-weeks">After 37 Weeks (37–40 Weeks)</a></li>
                      </ul>
                    </li>
                    <li><a href="./your-birth-its-time">Your Birth It's Time</a></li>
                    <li><a href="./post-natal-care">Post-Natal Care</a></li>
                  </ul>
                </li>
                <li className="sub-dropdown">
                  <a href="#">Gynecology ▸</a>
                  <ul className="sub-menu">
                    <li><a href="./abnormal-uterine-bleeding">Abnormal Uterine Bleeding</a></li>
                    <li><a href="./pap-smear-and-colposcopy">Pap Smear and Colposcopy</a></li>
                    <li><a href="./contraception-and-family-planning">Contraception and Family Planning</a></li>
                    <li><a href="./Pelvic Orgaprolapse-and-vaginal-reconstruction">Pelvic Organ Prolapse & Vaginal Reconstruction</a></li>
                    <li><a href="./pelvic-pain-endometriosis">Pelvic Pain & Endometriosis</a></li>
                    <li><a href="./ultrasound">Urinary Incontinence</a></li>
                    <li><a href="./ovarian-cysts">Ovarian Cysts</a></li>
                    <li><a href="./menopause-change-life">Menopause & Change Life</a></li>
                  </ul>
                </li>
                <li><a href="./fetal-medicine">Fetal Medicine</a></li>
                <li><a href="./ultrasound">Ultrasound</a></li>
                <li><a href="./surgery-and-proceures">Surgery and Procedures</a></li>
                <li><a href="./lab">Lab</a></li>
              </ul>
            </li>
            <li><a href="./galary">Gallery</a></li>
            <li><a href="./videos">Videos</a></li>
            <li><a href="./contact">Contact Us</a></li>
            <li><a href="./blogs">Blogs</a></li>
          </ul>
        </nav>

        <div className="pharmacy-btn">
          <button onClick={() => window.open('https://theprolifepharmacy.com/', '_blank')}>
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

