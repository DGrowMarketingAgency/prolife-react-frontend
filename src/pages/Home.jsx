import React, { useState } from "react";

const Home = () => {
  const [expanded, setExpanded] = useState(false);

  const handleSeeMore = () => {
    setExpanded(!expanded);
  };

  const cardsData = [
    { img: "/images/img/s1.jpg", label: "Pre-Pregnancy Counselling", text: "Thoughtful guidance for couples planning to conceive..." },
    { img: "/images/img/s2.jpg", label: "Maternity & Gynaecology", text: "Complete care before, during and after pregnancy..." },
    { img: "/images/img/s3.jpg", label: "Fertility Treatment", text: "Advanced reproductive care tailored to each family..." },
    { img: "/images/img/s4.jpg", label: "NICU - Neonatal Care", text: "Specialized support for premature and critical newborns..." },
    { img: "/images/img/s5.jpg", label: "Women's Wellness", text: "Gynecologic screening, menstrual care & hormonal balance..." },
    { img: "/images/img/s6.jpg", label: "Laparoscopic Surgery", text: "Minimally invasive treatment for faster recovery..." },
    { img: "/images/img/s7.jpg", label: "Pediatrics", text: "Child health monitoring, immunization & illness support..." },
    { img: "/images/img/s8.jpg", label: "Emergency & Trauma", text: "24/7 advanced emergency response team available..." },
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
              <li><a href="/team">Our Teams</a></li>
              <li><a href="https://prolifefertility.com/">Fertility</a></li>
              <li className="dropdown">
                <a href="#">Services ▾</a>
              </li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/videos">Videos</a></li>
              <li><a href="/contact">Contact Us</a></li>
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
        src="/images/img/story-sec.png"
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
            <p>Knowledgeable patients participate more actively in their care. Browse our physician-authored guides:</p>
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
        <p className="doc-sub-tit">Prolife's strength lies in our physician roster. Each doctor combines clinical training with patient-focused practice:</p>
        <div className="doc-section-container">
          {/* Paste all doctor cards exactly like in your HTML */}
          <div className="doc-section-card">
            <img src="/images/img/d1.png" alt="DR.NELLAIYAPPAN" className="doc-section-img" />
            <div className="doc-section-overlay">
              <h3>DR.NELLAIYAPPAN</h3>
              <p>Orthopedics</p>
            </div>
            <div className="doc-section-icons">
              <span><i className="fa-solid fa-user-doctor"></i></span>
              <span><i className="fa-solid fa-stethoscope"></i></span>
            </div>
          </div>
          {/* Repeat for all other doctor cards */}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section">
        <p className="sub-title">TESTIMONIALS</p>
        <div className="google-rating">⭐⭐⭐⭐⭐ <span>5/5 Google Rating</span></div>

        <div className="reviews-container">
          {/* Paste all review cards exactly like in your HTML */}
          <div className="review-card">
            <p className="review-text">I received impeccable care from Dr. Thamarai ram and Prolife Hospital for the delivery of my twins. Dr listens to us and respects our choices and is very empathetic and respectful. Great Doctor with a great personality. We felt that we are in the safe hands.</p>
            <div className="reviewer">
              <div className="avatar">M</div>
              <div>
                <h4>Mohammed</h4>
                <div className="stars">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>
          {/* Repeat for other reviews */}
        </div>

        <a href="https://g.page/r/CS9733eotKhCEBM/review" target="_blank" rel="noreferrer" className="see-more-btn">⭐ See More Reviews</a>
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

        <div className="faq-item">
          <div className="faq-question">What makes Prolife different from other hospitals in Chennai?</div>
          <div className="faq-answer">
            We focus exclusively on women's health as our primary specialty, which means deeper expertise in maternity, fertility, and gynecology. Our doctors aren't generalists—they've built their careers around these specific areas.
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">Do you handle high-risk pregnancies?</div>
          <div className="faq-answer">
            Yes. Our maternal-fetal medicine team manages conditions like gestational diabetes, preeclampsia, multiple pregnancies, and previous cesarean deliveries with specialized monitoring protocols.
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">What are your visiting hours?</div>
          <div className="faq-answer">
            Family can visit between 4 PM and 8 PM daily. We make exceptions for new fathers and primary support persons who can stay extended hours in maternity wards.
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">Is parking available at the hospital?</div>
          <div className="faq-answer">
            We maintain a dedicated parking area for patients and visitors. Attendants are available to assist during peak hours.
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">How do I book my first appointment?</div>
          <div className="faq-answer">
            Call our reception at [phone number], use our online booking system, or visit the hospital directly. First-time patients should bring any previous medical records and current medications list.
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">Do you provide emergency services?</div>
          <div className="faq-answer">
            Our emergency department operates 24/7 for obstetric emergencies, pediatric urgent care, and general medical emergencies.
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">What documents do I need for admission?</div>
          <div className="faq-answer">
            Government-issued ID, insurance card (if applicable), doctor's referral letter for planned procedures, and any relevant medical history documents.
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">Can I choose my delivery method?</div>
          <div className="faq-answer">
            Absolutely. We support both natural childbirth and cesarean delivery based on medical indications and patient preference. Your obstetrician will discuss options during prenatal visits.
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">Do you offer payment plans?</div>
          <div className="faq-answer">
            Yes. Our billing department works with families to arrange payment schedules for larger medical expenses. Discuss options during your pre-admission consultation.
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">How experienced are your gynecologists?</div>
          <div className="faq-answer">
            Our gynecology team averages 15+ years of clinical practice. Several doctors hold fellowship training in subspecialties like reproductive endocrinology and minimally invasive surgery.
          </div>
        </div>
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


   