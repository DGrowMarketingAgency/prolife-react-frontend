// import React from "react";
// import "./globel.css";

// export default function Navbar() {
//   const [showMenu, setShowMenu] = useState(false);

//   return (
//     <header className="navbar">
//       <div className="container">
//         <div className="logo">
//           <img src="./img/prolife-logo.png" alt="Prolife Logo" />
//         </div>

//         <nav id="nav-links" className={showMenu ? "show" : ""}>
//           <ul>
//             <li><a href="./index.html">Home</a></li>
//             <li><a href="./story.html">Our Story</a></li>
//             <li><a href="./team.html">Our Teams</a></li>
//             <li><a href="https://prolifefertility.com/">Fertility</a></li>
//             <li className="dropdown">
//               <a href="#">Services ▾</a>
//               <ul className="dropdown-menu">
//                 <li><a href="./pregnancy-maternity.html">Pregnancy / Maternity</a></li>
//                 <li className="sub-dropdown">
//                   <a href="#">Obstetrics ▸</a>
//                   <ul className="sub-menu">
//                     <li><a href="./Pre-pregnancy.html">Pre-pregnancy</a></li>
//                     <li className="inner-dropdown">
//                       <a href="#">Your Pregnancy ▸</a>
//                       <ul className="inner-menu">
//                         <li><a href="./just-pregnant.html">Just Pregnant</a></li>
//                         <li><a href="./growing-time.html">Growing Time: 2nd Trimester</a></li>
//                         <li><a href="./3rd-trimester.html">The End Is Near – 3rd Trimester</a></li>
//                         <li><a href="./after-37-weeks.html">After 37 Weeks (37–40 Weeks)</a></li>
//                       </ul>
//                     </li>
//                     <li><a href="./your-birth-its-time.html">Your Birth It's Time</a></li>
//                     <li><a href="./post-natal-care.html">Post-Natal Care</a></li>
//                   </ul>
//                 </li>
//                 <li className="sub-dropdown">
//                   <a href="#">Gynecology ▸</a>
//                   <ul className="sub-menu">
//                     <li><a href="./abnormal-uterine-bleeding.html">Abnormal Uterine Bleeding</a></li>
//                     <li><a href="./pap-smear-and-colposcopy.html">Pap Smear and Colposcopy</a></li>
//                     <li><a href="./contraception-and-family-planning.html">Contraception and Family Planning</a></li>
//                     <li><a href="./Pelvic Orgaprolapse-and-vaginal-reconstruction.html">Pelvic Organ Prolapse & Vaginal Reconstruction</a></li>
//                     <li><a href="./pelvic-pain-endometriosis.html">Pelvic Pain & Endometriosis</a></li>
//                     <li><a href="./ultrasound.html">Urinary Incontinence</a></li>
//                     <li><a href="./ovarian-cysts.html">Ovarian Cysts</a></li>
//                     <li><a href="./menopause-change-life.html">Menopause & Change Life</a></li>
//                   </ul>
//                 </li>
//                 <li><a href="./fetal-medicine.html">Fetal Medicine</a></li>
//                 <li><a href="./ultrasound.html">Ultrasound</a></li>
//                 <li><a href="./surgery-and-proceures.html">Surgery and Procedures</a></li>
//                 <li><a href="./lab.html">Lab</a></li>
//               </ul>
//             </li>
//             <li><a href="./galary.html">Gallery</a></li>
//             <li><a href="./videos.html">Videos</a></li>
//             <li><a href="./contact.html">Contact Us</a></li>
//             <li><a href="./blogs.html">Blogs</a></li>
//           </ul>
//         </nav>

//         <div className="pharmacy-btn">
//           <button onClick={() => window.open('https://theprolifepharmacy.com/', '_blank')}>
//             PHARMACY
//           </button>
//         </div>

//         <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
//           <span></span><span></span><span></span>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Navbar;
