import React, { useState } from "react";

const Home = () => {
  const [expanded, setExpanded] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const handleSeeMore = () => {
    setExpanded(!expanded);
  };

  const faqData = [
    {
      question: "What makes Prolife different from other hospitals in Chennai?",
      answer:
        "We focus exclusively on women's health as our primary specialty, which means deeper expertise in maternity, fertility, and gynecology. Our doctors aren't generalists—they've built their careers around these specific areas."
    },
    {
      question: "Do you handle high-risk pregnancies?",
      answer:
        " Yes. Our maternal-fetal medicine team manages conditions like gestational diabetes, preeclampsia, multiple pregnancies, and previous cesarean deliveries with specialized monitoring protocols"
    },
    {
      question: "What are your visiting hours?",
      answer:
        " Family can visit between 4 PM and 8 PM daily. We make exceptions for new fathers and primary support persons who can stay extended hours in maternity wards."
    },
    {
      question: "Is parking available at the hospital?",
      answer:
        " We maintain a dedicated parking area for patients and visitors. Attendants are available to assist during peak hours."
    },
    {
      question: "How do I book my first appointment?",
      answer:
        " Call our reception at [phone number], use our online booking system, or visit the hospital directly. First-time patients should bring any previous medical records and current medications list."
    },
    {
      question: "Do you provide emergency services?",
      answer:
        " Our emergency department operates 24/7 for obstetric emergencies, pediatric urgent care, and general medical emergencies."
    },
    {
      question: "What documents do I need for admission?",
      answer:
        " Government-issued ID, insurance card (if applicable), doctor's referral letter for planned procedures, and any relevant medical history documents."
    },
    {
      question: "Can I choose my delivery method?",
      answer:
        " Absolutely. We support both natural childbirth and cesarean delivery based on medical indications and patient preference. Your obstetrician will discuss options during prenatal visits."
    },
    {
      question: "Do you offer payment plans?",
      answer:
        " Yes. Our billing department works with families to arrange payment schedules for larger medical expenses. Discuss options during your pre-admission consultation."
    },
    {
      question: "How experienced are your gynecologists?",
      answer:
        "  Our gynecology team averages 15+ years of clinical practice. Several doctors hold fellowship training in subspecialties like reproductive endocrinology and minimally invasive surger"
    },
  ];
  
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  const cardsData = [
    { img: "/images/img/s1.jpg", label: "Pre-Pregnancy Counselling", text: "Thoughtful guidance for couples planning to conceive. We evaluate medical history, lifestyle factors, and potential risks to help you begin pregnancy with confidence." },
    { img: "/images/img/s2.jpg", label: "Pregnancy Care", text: "Comprehensive antenatal check-ups focused on maternal and fetal wellbeing. We monitor growth, screen for complications, and support you through every stage of pregnancy." },
    { img: "/images/img/s3.jpg", label: "High-Risk Pregnancy Management", text: "Conditions like diabetes, hypertension, thyroid disorders, and previous complications can make pregnancy challenging. Our specialists deliver evidence-based monitoring to ensure safe outcomes." },
    { img: "/images/img/s4.jpg", label: "GDM (Gestational Diabetes Mellitus)", text: "Early screening, diet planning, glucose monitoring, and safe treatment options to protect both mother and baby throughout pregnancy." },
    { img: "/images/img/s5.jpg", label: "Women's Wellness", text: "Gynecologic screening, menstrual care & hormonal balance..." },
    { img: "/images/img/s6.jpg", label: "Thyroid Disorders in Pregnancy", text: "Balanced thyroid levels are essential for fetal development. We provide targeted evaluation and treatment for hypothyroidism and hyperthyroidism during pregnancy." },
    { img: "/images/img/s7.jpg", label: "Hypertension in Pregnancy", text: "CFrom gestational hypertension to preeclampsia, we offer vigilant monitoring, medication guidance, and safe delivery planning." },
    { img: "/images/img/s8.jpg", label: "Preterm Labour Management", text: "Advanced assessment and timely intervention to prevent premature delivery and support optimal neonatal outcomes." },

    { img: "/images/img/s1.jpg", label: "Normal Vaginal Delivery (NVD)", text: "Encouraging natural birth through supportive care, continuous monitoring, and evidence-based labour practices." },

    { img: "/images/img/s2.jpg", label: "Assisted Delivery – Vacuum & Forceps", text: "When required for safe delivery, our specialists perform assisted procedures with precision to ensure the wellbeing of both mother and baby." },

    { img: "/images/img/s3.jpg", label: "Caesarean Sections (LSCS)", text: "Safe surgical delivery performed when medically required. We prioritise maternal comfort, minimal pain, and fast recovery." },

    { img: "/images/img/s4.jpg", label: "Emergency LSCS", text: "Immediate response for time-sensitive complications to protect maternal and fetal health." },

    { img: "/images/img/s5.jpg", label: "Elective LSCS", text: "Planned C-sections scheduled for medical or personal reasons, ensuring a comfortable, well-prepared birthing experience." },

    { img: "/images/img/s6.jpg", label: "Elective LSCS + Sterilisation", text: "Combined procedure for women who prefer permanent contraception during their planned caesarean section." },

    { img: "/images/img/s7.jpg", label: "Cervical Encirclage (Cervical Cerclage)", text: "A targeted procedure to support pregnancies affected by cervical insufficiency. Helps reduce risk of miscarriage or preterm birth." },

    { img: "/images/img/s8.jpg", label: "LAB Services", text: "On-site laboratory for essential prenatal and pregnancy-related investigations—blood tests, hormonal panels, infection screening, and emergency diagnostics." },
  ];

  const doctorsData = [
  { img: "./images/img/d1.png", name: "DR.NELLAIYAPPAN", specialization: "Orthopedics" },
  { img: "./images/img/d2.png", name: "DR.KUMANAN", specialization: "Oncology" },
  { img: "./images/img/d3.png", name: "DR.HARI PRAKASH", specialization: "Anesthesiology" },
  { img: "./images/img/d4.png", name: "DR.BALA", specialization: "Oncology" },
  { img: "./images/img/d5.png", name: "DR.SHALINI", specialization: "Anesthesiology" },
  { img: "./images/img/d6.png", name: "DR.PAULIA DEVI", specialization: "General Surgery" },
  { img: "./images/img/d7.png", name: "DR.SATHYA MOORTHY", specialization: "Internal Medicine" },
  { img: "./images/img/d8.png", name: "DR.NITHYA PRIYAN", specialization: "Anesthesiology" },
  { img: "./images/img/d9.png", name: "DR.SOORIYA.S", specialization: "Dermatology" },
  { img: "./images/img/d10.png", name: "DR.SUJITHA.R", specialization: "Gynecology" },
  { img: "./images/img/d11.png", name: "Dr.Thamarai", specialization: "Gynecology" },
  { img: "./images/img/d12.png", name: "DR.UMA MAHESHWARI", specialization: "Pediatrics" },
  { img: "./images/img/d13.png", name: "Dr.Varshini", specialization: "Gynecology" },
  { img: "./images/img/d14.png", name: "DR.PAVITHRA", specialization: "Duty Medical Officer" },
];


const reviewsData = [
  {
    text: "I received impeccable care from Dr. Thamarai ram and Prolife Hospital for the delivery of my twins. Dr listens to us and respects our choices and is very empathetic and respectful. Great Doctor with a great personality. We felt that we are in the safe hands.",
    name: "Mohammed",
    avatar: "M",
    rating: 5
  },
  {
    text: "It's was a beautiful and pleasant experience and journey with Prolife Hospital and Dr.Thamarai Ram during planning for pregnancy, pregnancy, delivery and post delivery. Warmth, hospitality and helping tendency during delivery time makes our life easy and to be appreciated. Hope and trust this will be continued in years to come.",
    name: "Sreya",
    avatar: "S",
    rating: 5
  },
  {
    text: "We had our second delivery in prolife. We had safe delivery experience by Dr. tamarai, Dr. Sujitha, Dr Iswarya . We had excellent support and care by ward staff and nurses.They take care of my wife and daughter very well. Rooms also neat and clean",
    name: "Selva Ganesh",
    avatar: "S",
    rating: 5
  }
];

  const openPharmacy = () => {
    window.open("https://theprolifepharmacy.com/", "_blank");
  };


  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <div className="container">
          <div className="logo">
            <img src="/images/img/prolife-logo.png" alt="Prolife Logo" />
          </div>

          <nav id="nav-links">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/story">Our Story</a></li>
              <li><a href="/Ourteam">Our Teams</a></li>
              <li><a href="https://prolifefertility.com/">Fertility</a></li>
              <li className="dropdown">
                <a href="#">Services ▾</a>
              </li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/videos">Videos</a></li>
              <li><a href="/Contact">Contact Us</a></li>
              <li><a href="/blogs">Blogs</a></li>
            </ul>
          </nav>

          <div className="pharmacy-btn">
            <button onClick={openPharmacy}>PHARMACY</button>
          </div>

          <div className="hamburger" id="hamburger">
            <span></span><span></span><span></span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="master-section">
        <div className="master-section-container">
          <div className="master-section-content">
            <h1 className="master-section-title">
              Prolife Hospitals - Premier Maternity Hospital in Chennai
            </h1>
            <p className="master-section-desc">
              Your Family Deserves Expert Care at Every Stage
            </p>
            <a href="/contact" className="master-section-btn">
              Book your Appointment Today →
            </a>
          </div>

          <div className="master-section-image">
            <img src="/images/img/hero1.png" alt="Happy Family" />
          </div>
        </div>
      </section>

      {/* Section 1 - Specialized Healthcare */}

<section className="story-hero-section home-2">
  <div className="story-hero-content home-2">
    <div className="story-hero-text home-2">
      <h2>Specialized Healthcare for Women and Growing Families</h2>
      <p>
        Choosing where to receive medical care shapes your entire health experience.
        Prolife Hospitals stands as a reliable maternity hospital in Chennai,
        supporting families from conception planning through childbirth and well beyond.
      </p>
      <p>
        We specialize in women's health care—covering maternity, fertility treatments,
        and gynecological services. More than a medical facility, we're a partner
        in your family's health story.
      </p>
    </div>

    <div className="story-hero-image-container home-2">
      <img
        src="/images/img/Prolife-office.png"
        alt="Prolife Hospital"
        className="story-hero-sideimage"
      />
    </div>
  </div>
</section>


{/* Section 2 - About Prolife */}

<section className="section-two">
  <div className="section-two-container">
    <div className="section-two-images">
      <div className="section-two-main-img">
        <img src="/images/img/home-section2img.png" alt="Family" />
      </div>
    </div>

    <div className="section-two-content">
      <span className="section-two-subtitle">About Prolife Hospitals</span>
      <h2 className="section-two-title">Three Decades of Clinical Excellence</h2>

      <p className="section-two-desc">
        Women deserve healthcare providers who listen first and respond with precision.
        Prolife creates an environment where medical expertise meets genuine understanding.
      </p>

      <p className="section-two-desc">
        Our reputation as a leading fertility hospital in Chennai comes from blending
        proven clinical protocols with personalized attention. We don't simply
        address symptoms—we support your goals, answer your concerns, and
        share in your milestones.
      </p>

      <p className="section-two-desc">
        Planning your first pregnancy? Managing a gynecological condition? Seeking specialist
        consultation? You'll work with seasoned professionals who prioritize your wellbeing.
      </p>

      <a href="/story" className="section-two-btn">
        Learn About Our Approach →
      </a>
    </div>
  </div>
</section>


      <section className="gynaecology-section">
        <h2 className="section-title">What Sets Prolife Apart</h2>
        <p className="section-subtitle">Medical Excellence Meets Patient Comfort</p>

        <div className="gynaecology-container">
          <div className="gynaecology-column left">
            <div className="feature-box">
              <div className="icon-circle">
                <i className="fa-solid fa-hospital"></i>
              </div>
              <div>
                <h3>Fully Equipped Surgical Suites</h3>
                <p>
                  Our modular operation theatres handle both complex and routine procedures with strict safety protocols and surgical precision.
                </p>
              </div>
            </div>

            <div className="feature-box">
              <div className="icon-circle">
                <i className="fa-solid fa-user-nurse"></i>
              </div>
              <div>
                <h3>Private Recovery Rooms</h3>
                <p>
                  Spacious accommodations with climate control and contemporary furnishings provide the privacy families need during hospital stays.
                </p>
              </div>
            </div>

            <div className="feature-box">
              <div className="icon-circle">
                <i className="fa-solid fa-baby"></i>
              </div>
              <div>
                <h3>Comprehensive Pregnancy Services</h3>
                <p>
                  From initial ultrasounds to postpartum follow-ups, our coordinated team approach means consistent care throughout your pregnancy.
                </p>
              </div>
            </div>
          </div>

          <div className="doctor-image">
            <img src="/images/img/section3-home.png" alt="Doctor" />
          </div>

          <div className="gynaecology-column right">
            <div className="feature-box">
              <div className="icon-circle">
                <i className="fa-solid fa-vials"></i>
              </div>
              <div>
                <h3>In-House Diagnostic Facilities</h3>
                <p>
                  Fast, reliable test results enable timely medical decisions—reducing wait times and uncertainty.
                </p>
              </div>
            </div>

            <div className="feature-box">
              <div className="icon-circle">
                <i className="fa-solid fa-clock"></i>
              </div>
              <div>
                <h3>24-Hour Pharmacy Access</h3>
                <p>
                  Always-available medication and banking services eliminate logistical stress during your hospital visit.
                </p>
              </div>
            </div>

            <div className="feature-box">
              <div className="icon-circle">
                <i className="fa-solid fa-hand-holding-heart"></i>
              </div>
              <div>
                <h3>Transparent Pricing</h3>
                <p>
                  Healthcare should be accessible. Our straightforward costs ensure families can plan financially without surprise bills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-three">
        <div className="section-three-container">
          <div className="section-three-header">
            <h3 className="section-three-subtitle">Health Education Resources</h3>
            <p className="section-three-desc">Evidence-Based Information for Better Decisions</p>
            <p className="section-three-desc">Knowledgeable patients participate more actively in their care. Browse our physician-authored guides:</p>
          </div>

          <div className="section-three-cards">
            <div className="section-three-card">
              <img src="/images/img/h1.jpg" alt="Preparing for labour" />
              <div className="section-three-overlay">
                <h4>Labour Preparation Guide</h4>
                <p>Practical information about delivery day—what to expect, what to pack, and how to stay calm.</p>
                <button>
                  <a style={{ color: "#fff", textDecoration: "none" }} href="./Pre-pregnancy.html">
                    View More
                  </a>
                </button>
              </div>
            </div>

            <div className="section-three-card">
              <img src="/images/img/h2.webp" alt="Laparoscopic procedure" />
              <div className="section-three-overlay">
                <h4>Laparoscopic Surgery Explained</h4>
                <p>Understanding when minimally invasive options benefit your specific condition.</p>
                <button>
                  <a style={{ color: "#fff", textDecoration: "none" }} href="./surgery-and-proceures.html">
                    View More
                  </a>
                </button>
              </div>
            </div>

            <div className="section-three-card">
              <img src="/images/img/h3.webp" alt="Menopausal" />
              <div className="section-three-overlay">
                <h4>Menopause Recognition</h4>
                <p>Identifying symptoms and managing this transition with medical support.</p>
                <button>
                  <a style={{ color: "#fff", textDecoration: "none" }} href="./lab.html">
                    View More
                  </a>
                </button>
              </div>
            </div>

            <div className="section-three-card">
              <img src="/images/img/h4.jpg" alt="Hormonal imbalance" />
              <div className="section-three-overlay">
                <h4>Hormonal Balance Strategies</h4>
                <p>Lifestyle modifications and treatment options for hormonal concerns.</p>
                <button>
                  <a style={{ color: "#fff", textDecoration: "none" }} href="./menopause-change-life.html">
                    View More
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    <section className="specialization-section">
      <div className="specialization-container">
        <h2 className="specialization-title">Clinical Departments</h2>
        <p className="specialization-subtitle">Multi-Specialty Care Coordination</p>

        <div className="specialization-grid">
          {cardsData.map((card, index) => (
            <div
              className="specialization-card"
              key={index}
              style={{
                display: expanded || index < 6 ? "block" : "none"
              }}
            >
              <div className="card-img">
                <img src={card.img} alt={card.label} />
              </div>
              <div className="card-label">{card.label}</div>
              <p className="card-text">{card.text}</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
          ))}
        </div>

        <button className="see-more-btn" onClick={handleSeeMore}>
          {expanded ? "Show Less" : "See More..."}
        </button>
      </div>
    </section>
 
       
<section className="doc-section">
  <h2>Our Medical Team</h2>
  <h5>Board-Certified Specialists</h5>
  <p className="doc-sub-tit">
    Prolife's strength lies in our physician roster. Each doctor combines clinical training with patient-focused practice:
  </p>

  <div className="doc-section-container">
    {doctorsData.map((doc, index) => (
      <div className="doc-section-card" key={index}>
        <img src={doc.img} alt={doc.name} className="doc-section-img" />
        <div className="doc-section-overlay">
          <h3>{doc.name}</h3>
          <p>{doc.specialization}</p>
        </div>
        <div className="doc-section-icons">
          <span><i className="fa-solid fa-user-doctor"></i></span>
          <span><i className="fa-solid fa-stethoscope"></i></span>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Reviews Section */}
      <section className="reviews-section">
  <p className="sub-title">TESTIMONIALS</p>
  <div className="google-rating">
    ⭐⭐⭐⭐⭐ <span>5/5 Google Rating</span>
  </div>

  <div className="reviews-container">
    {reviewsData.map((review, index) => (
      <div className="review-card" key={index}>
        <p className="review-text">{review.text}</p>
        <div className="reviewer">
          <div className="avatar">{review.avatar}</div>
          <div>
            <h4>{review.name}</h4>
            <div className="stars">{"⭐".repeat(review.rating)}</div>
          </div>
        </div>
      </div>
    ))}
  </div>

  <a
    href="https://g.page/r/CS9733eotKhCEBM/review"
    target="_blank"
    rel="noreferrer"
    className="see-more-btn"
  >
    ⭐ See More Reviews
  </a>
</section>


    
  
      {/* Insurance Section */}
      <section className="slide-section">
        <h2>Insurance Accepted</h2>
        <p>Working With Your Coverage Provider</p>
        <p>Prolife partners with major insurance companies to facilitate billing and coverage. Contact our admissions desk to verify your specific plan.</p>

        <div className="slider-wrapper">
          <div className="slider-track" id="sliderTrack">
            <img src="/images/img/b (1).jpg" alt="" />
            <img src="/images/img/b (2).jpg" alt="" />
            <img src="/images/img/b (3).jpg" alt="" />
            <img src="/images/img/b (4).jpg" alt="" />
            <img src="/images/img/b (5).jpg" alt="" />
            <img src="/images/img/b (6).jpg" alt="" />
            <img src="/images/img/b (7).jpg" alt="" />
            <img src="/images/img/b (8).jpg" alt="" />
            <img src="/images/img/b (9).jpg" alt="" />
            <img src="/images/img/b (10).jpg" alt="" />
            <img src="/images/img/b (11).jpg" alt="" />
            <img src="/images/img/b (12).jpg" alt="" />
            <img src="/images/img/b (13).jpg" alt="" />
          </div>
        </div>
      </section>

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

      {/* Care Journey Section */}
      <section className="journey-section">
        <div className="journey-container">
          <div className="journey-grid">
            <div className="journey-image">
              <div className="journey-content">
                <h2>Begin Your Care Journey</h2>
                <p>Need expert medical attention? Prolife Hospitals provides the specialized care your family deserves.</p>
                <button className="appointment-btn">Book Appointment</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}

export default Home;


   