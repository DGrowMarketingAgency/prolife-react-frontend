
import React, { useState, useEffect } from "react";



const OurStory = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [storyModal, setStoryModal] = useState({
    show: false,
    img: "",
    title: "",
    text: ""
  });

  const faqData = [
    {
      question: "Can I transfer my pregnancy care mid-term?",
      answer:
        "Yes. Many women join us after poor experiences elsewhere. Bring your medical records, and we'll continue your prenatal care seamlessly."
    },
    {
      question: "Will my partner be present during delivery?",
      answer:
        "Absolutely. Partners can stay throughout labor and delivery, including cesarean sections."
    },
    {
      question: "Do you handle emergency deliveries?",
      answer:
        "Our obstetric team is available 24/7 for labor emergencies and pregnancy complications."
    },
    {
      question: "What's your approach to fertility treatment?",
      answer:
        "We start with simpler interventions before advancing to expensive procedures. Many couples conceive with basic treatment adjustments."
    },
    {
      question: "How long is a typical hospital stay?",
      answer:
        "Natural deliveries: 24-48 hours. Cesarean sections: 3-4 days. We're flexible based on your recovery."
    },
    {
      question: "Do you provide second opinions?",
      answer:
        "Yes. Bring your test results and recommendations from other doctors. We'll give honest feedback."
    },
    {
      question: "What age range do you treat?",
      answer:
        "From adolescence (menstrual concerns, vaccination) through menopause and beyond."
    }
  ];

  const storyCards = [
    {
      img: "./img/story1.webp",
      title: "Specialized Focus on Women's Health",
      text: "Unlike general hospitals where obstetrics is just another department, women's healthcare is our entire practice. Our doctors don't split attention across multiple specialties—they've dedicated their careers exclusively to gynecology, obstetrics, and fertility care. This focused expertise means better outcomes for you."
    },
    {
      img: "./img/story2.webp",
      title: "Complete Care in One Location",
      text: "Stop running between different clinics for consultations, scans, lab tests, and medications. At Prolife, you'll complete everything in a single visit. Your doctor orders an ultrasound? Walk down the hall. Need blood work? Our lab is ready. Prescriptions? Pick them up before you leave. This saves your time and eliminates the frustration of coordinating between providers who never speak to each other."
    },
    {
      img: "./img/story3.webp",
      title: "Your Doctor, Your Entire Journey",
      text: "When you select an obstetrician at Prolife, they stay with you from your first prenatal visit through delivery and postpartum care. No rotating doctors. No strangers delivering your baby. Your physician knows your medical history, understands your birth preferences, and has built trust with you over nine months. That continuity matters when you need it most."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const openStoryModal = (card) => {
    setStoryModal({
      show: true,
      img: card.img,
      title: card.title,
      text: card.text
    });
    document.body.style.overflow = "hidden";
  };

  const closeStoryModal = () => {
    setStoryModal({ ...storyModal, show: false });
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.className === "story-modal show") {
        closeStoryModal();
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [storyModal]);

  return (
    <div className="story">
      {/* Navbar */}
      <header className="navbar">
        <div className="container">
          <div className="logo">
            <img src="./img/prolife-logo.png" alt="Prolife Logo" />
          </div>

          <nav id="nav-links">
            <ul>
              <li><a href="./index.html">Home</a></li>
              <li><a href="./story.html">Our Story</a></li>
              <li><a href="./team.html">Our Teams</a></li>
              <li><a href="https://prolifefertility.com/">Fertility</a></li>
              <li className="dropdown">
                <a href="#">Services <span className="arrow">▾</span></a>
                <ul className="dropdown-menu">
                  <li><a href="./pregnancy-maternity.html">Pregnancy / Maternity</a></li>
                  <li><a href="./Pre-pregnancy.html">Pre-pregnancy</a></li>
                  <li><a href="./just-pregnant.html">Your Pregnancy</a></li>
                  <li><a href="./post-natal-care.html">Post-Natal Care</a></li>
                  {/* Add all sub-menu items here */}
                </ul>
              </li>
              <li><a href="./galary.html">Gallery</a></li>
              <li><a href="./videos.html">Videos</a></li>
              <li><a href="./contact.html">Contact Us</a></li>
              <li><a href="./blogs.html">Blogs</a></li>
            </ul>
          </nav>

          <div className="pharmacy-btn">
            <button onClick={() => window.open("https://theprolifepharmacy.com/", "_blank")}>
              PHARMACY
            </button>
          </div>

          <div className="hamburger" id="hamburger">
            <span></span><span></span><span></span>
          </div>
        </div>
      </header>

      {/* Story Section */}
      <section className="story-hero-section">
        <div className="story-hero-banner">
          <img src="./img/download (1).webp" alt="Our Story Banner" className="story-hero-image" />
          <div className="story-hero-overlay">
            <h1 className="story-hero-title">ABOUT PROLIFE HOSPITAL</h1>
          </div>
          <p>Trusted Women's Healthcare in Chennai Since 2013</p>
        </div>

        <div className="story-hero-content">
          <div className="story-hero-text">
            <h2>OUR STORY:</h2>
            <p>Prolife Hospitals began in December 2013 with a focused mission: deliver specialized women's healthcare to families across West Chennai.</p>
            <p>Today, we're recognized as one of the best maternity hospitals in Chennai, serving women from Manapakkam, Mugalivakkam, Porur, Ramapuram, and nearby IT corridors.</p>
            <p>Over the past decade, we've helped thousands of women through pregnancy, fertility challenges, and gynecological concerns. Our growth comes from one simple principle: treat every patient the way we'd want our own family treated.</p>
          </div>

          <div className="story-hero-image-container">
            <img src="./img/story-sec.png" alt="Prolife Hospital" className="story-hero-sideimage" />
          </div>
        </div>

        <div className="story-title">
          <h2 style={{ textAlign: "center" }}>What Makes Us Different</h2>
        </div>

        <div className="story-container">
          {storyCards.map((card, i) => (
            <div key={i} className="story-card" onClick={() => openStoryModal(card)}>
              <img src={card.img} alt={card.title} className="story-image" />
              <h3 className="story-title">{card.title}</h3>
              <p className="story-text">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story Modal */}
      {storyModal.show && (
        <div className="story-modal show">
          <div className="story-modal-content">
            <span className="story-close-btn" onClick={closeStoryModal}>&times;</span>
            <img src={storyModal.img} alt="Story Image" />
            <h3>{storyModal.title}</h3>
            <p>{storyModal.text}</p>
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>FAQ</h2>
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <div className={`faq-question ${openFAQ === index ? "active" : ""}`} onClick={() => toggleFAQ(index)}>
              {item.question}
            </div>
            <div className={`faq-answer ${openFAQ === index ? "open" : ""}`}>
              {item.answer}
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-column footer-logo">
          <img src="./img/prolife-logo.png" alt="Prolife Hospital Logo" />
          <p>River View Enclave, No:1, 1st Street, IAS, IPS Colony, Manapakkam, Chennai, Tamil Nadu 600125</p>
          <p><strong>Call Us:</strong> 8220305887 / 7305737051 / 9790896211</p>
          <p><strong>Mail:</strong> prolifehospitalg@gmail.com</p>
        </div>
        <div className="footer-column">
          <h4>Quick Links</h4>
          <a href="./story.html">Our History</a><br/>
          <a href="./pregnancy-maternity.html">Obstetrics</a><br/>
          <a href="./abnormal-uterine-bleeding.html">Gynecology</a><br/>
          <a href="./team.html">Our Doctors</a><br/>
          <a href="./contact.html">Contact Us</a>
        </div>
        <div className="footer-column">
          <h4>Quick Contact</h4>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required/>
            <input type="email" placeholder="Your Email" required/>
            <input type="text" placeholder="Mobile Number" required/>
            <input type="text" placeholder="Subject"/>
            <textarea rows="4" placeholder="Your message (optional)"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="footer-bottom">
          Copyright © 2025. <a href="https://www.prolifehospitals.com/">Prolife Hospital</a>. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};



export default OurStory;
