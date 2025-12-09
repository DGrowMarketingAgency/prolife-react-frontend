
// Installation: npm install react-icons
// Usage in App.jsx:
//   import HighRiskPregnancyPage from './HighRiskPregnancyPage';
//   import './HighRiskPregnancyPage.css';
//   function App() { return <HighRiskPregnancyPage />; }

import React from 'react';
import {
  FaHeartbeat,
  FaUserMd,
  FaStethoscope,
  FaHospital,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRegClock,
  FaCheckCircle,
  FaMicroscope,
  FaBaby,
  FaHandsHelping,
  FaShieldAlt,
  FaClipboardList,
  FaComments,
} from 'react-icons/fa';

const specialists = [
  {
    name: 'Dr. Sujitha R',
    title: 'Senior Gynecologist',
    desc:
      'Expert in managing high-risk pregnancies, recurrent pregnancy loss, and complex maternal conditions.',
  },
  {
    name: 'Dr. Thamarai',
    title: 'Maternal-Fetal Medicine Specialist',
    desc:
      'Known for detailed monitoring, clear explanations, and a calm, reassuring presence.',
  },
  {
    name: 'Dr. Varshini',
    title: 'Gynecologist & High-Risk Pregnancy Specialist',
    desc:
      'Provides structured care plans and precise management for mothers with medical complications.',
  },
];

const supports = [
  'Dr. Hari Prakash, Dr. Shalini, Dr. Nithya Priyan – Experienced anesthesiologists',
  'Dr. Uma Maheshwari – Senior pediatrician providing newborn care',
];

const evaluations = [
  {
    title: 'Your Complete Medical Background',
    items: [
      'Diabetes, hypertension, heart or kidney disorders',
      'Autoimmune or thyroid conditions',
      'Medications and their pregnancy safety',
      'Weight, nutritional status, and metabolic health',
    ],
  },
  {
    title: 'Pregnancy-Specific Risks',
    items: [
      'Preeclampsia',
      'Gestational diabetes',
      'Placenta previa or low-lying placenta',
      'Preterm labor signs',
      'Reduced fetal growth',
      'Multiple pregnancies (twins, triplets)',
    ],
  },
  {
    title: 'Fetal Health Monitoring',
    items: [
      'Baby’s growth rate',
      'Blood flow patterns',
      'Placental function',
      'Heart rate and movement',
      'Risks of congenital or chromosomal issues',
    ],
  },
];

const plan = [
  {
    title: 'Frequent Monitoring',
    desc: 'Closer follow-ups—weekly, biweekly, or as recommended by your specialist.',
  },
  {
    title: 'Medical Condition Control',
    desc: 'Adjusted treatment plans for diabetes, hypertension, thyroid, kidney/cardiac, autoimmune issues.',
  },
  {
    title: 'Safe Delivery Planning',
    desc: 'Normal delivery when safe, planned C-section when necessary, NICU support if required.',
  },
  {
    title: 'Nutrition & Medication Guidance',
    desc: 'Safe diet plan, supplement guidance, and medication review for mother and baby.',
  },
  {
    title: 'Emotional & Family Support',
    desc: 'Reassurance, clear communication, and continuous guidance at every step.',
  },
];

const benefits = [
  { title: 'Prevents Complications', items: ['Preeclampsia', 'Preterm birth', 'Growth restrictions', 'Emergency C-sections'] },
  { title: 'Protects Mothers with Existing Conditions', items: ['Targeted monitoring for diabetes, hypertension, thyroid, cardiac, renal issues'] },
  { title: 'Ensures Baby’s Healthy Development', items: ['Advanced fetal assessments for early action'] },
  { title: 'Provides Safer Delivery Options', items: ['Planned, precision-based delivery choices'] },
  { title: 'Gives Confidence & Clarity', items: ['You always know what is monitored and why'] },
];

const candidates = [
  'Diabetes, hypertension, thyroid disorders',
  'Heart, kidney, or autoimmune conditions',
  'Previous miscarriages or preterm deliveries',
  'History of C-section or pregnancy complications',
  'Multiple gestations (twins/triplets)',
  'Age under 17 or over 35',
  'Fetal growth or genetic concerns',
  'Obesity or lifestyle-related risks',
];

const highlights = [
  '10+ Years of maternity excellence',
  '2,500+ Safe deliveries',
  'Trusted high-risk pregnancy management in Chennai',
  'NICU, OT & emergency care under one roof',
  'Affordable packages & insurance assistance',
  'Easy access in Manapakkam with family-friendly facilities',
];

const testimonials = [
  {
    name: 'Mohammed',
    text:
      'I received impeccable care from Dr. Thamarai Ram and Prolife Hospital for the delivery of my twins. She listens, respects choices, and is empathetic. We felt safe.',
  },
  {
    name: 'Sreya',
    text:
      "A beautiful journey with Prolife Hospital and Dr. Thamarai Ram from planning through post-delivery. Warmth, hospitality, and help made life easy.",
  },
  {
    name: 'Selva Ganesh',
    text:
      'Second delivery at Prolife. Safe delivery by Dr. Thamarai, Dr. Sujitha, Dr. Iswarya. Excellent nurse support; neat and clean rooms.',
  },
];

const faqs = [
  { q: 'What makes a pregnancy high risk?', a: 'Any condition that increases the chance of complications for the mother or baby.' },
  { q: 'How often will I need follow-ups?', a: 'Weekly, biweekly, or more frequent—depending on your condition.' },
  { q: 'Can I have a normal delivery?', a: 'Yes, many high-risk mothers still have vaginal births. Decisions vary based on safety.' },
  { q: 'Will my baby require special care?', a: 'Only if medically necessary. Our NICU team is available onsite.' },
  { q: 'What if complications occur suddenly?', a: 'Our obstetric emergency team operates 24/7.' },
  { q: 'Is treatment covered by insurance?', a: 'Coverage depends on your policy; our team helps verify details.' },
  { q: 'How do you monitor my baby?', a: 'Ultrasounds, Doppler, fetal heart monitoring, and growth scans.' },
];

const contact = {
  phone: '8220305887 / 7305737051 / 9790896211',
  email: 'prolifehospitalg@gmail.com',
  address: 'Prolife Hospitals, River View Enclave, No:1, 1st Street, IAS, IPS Colony, Manapakkam, Chennai, Tamil Nadu 600125',
  hours: 'Mon–Sat: 9 AM – 8 PM | Sun: 9 AM – 2 PM | Emergency: 24/7',
};

const related = [
  { title: 'Maternity Care', cta: 'Explore Maternity Care' },
  { title: 'Fertility Treatment', cta: 'Explore Fertility Treatment' },
  { title: 'Gynecology Care', cta: 'Explore Gynecology Care' },
  { title: 'Pediatric Care', cta: 'Explore Pediatric Care' },
  { title: 'Laparoscopic Surgery', cta: 'Explore Laparoscopic Surgery' },
];

export default function HighRiskPregnancyPage() {
  return (
    <div className="hp-page">
      <header className="hp-hero" aria-labelledby="hero-title">
        <div className="hp-hero__content">
          <p className="hp-kicker">High-Risk Pregnancy Management</p>
          <h1 id="hero-title">Advanced Care for Safe, Confident & Well-Monitored Pregnancies</h1>
          <p className="hp-hero__lead">
            A high-risk pregnancy needs more than routine care—it needs close monitoring, timely decisions,
            and specialists who understand every detail of maternal and fetal health. At Prolife Hospitals,
            Manapakkam, we support mothers facing complex pregnancies with expert oversight and advanced diagnostics.
          </p>
          <p className="hp-hero__lead">
            Our goal is simple: protect your health and guide your pregnancy safely to delivery.
          </p>
          <div className="hp-cta-group">
            <button className="hp-btn hp-btn--primary" type="button">Book Your High-Risk Pregnancy Consultation</button>
            <button className="hp-btn hp-btn--ghost" type="button">Explore Our Maternity Services</button>
          </div>
        </div>
      </header>

      <section className="hp-section hp-columns" aria-labelledby="what-heading">
        <div className="hp-section__header">
          <h2 id="what-heading">What Is High-Risk Pregnancy Management?</h2>
          <p>Specialized care for mothers with higher chances of complications due to medical history or findings during pregnancy.</p>
        </div>
        <div className="hp-card hp-card--accent">
          <p>
            Your care plan includes regular monitoring, targeted treatments, advanced fetal assessments,
            and coordinated care across specialties when needed.
          </p>
          <button className="hp-btn hp-btn--secondary" type="button">Explore Our Maternity Services</button>
        </div>
      </section>

      <section className="hp-section" aria-labelledby="why-heading">
        <div className="hp-section__header">
          <h2 id="why-heading">Why Choose Prolife for High-Risk Pregnancy Care?</h2>
        </div>
        <div className="hp-grid hp-grid--3">
          <article className="hp-card">
            <div className="hp-icon"><FaUserMd aria-hidden="true" /></div>
            <h3>Experienced High-Risk Obstetricians</h3>
            <p>We manage hypertension, diabetes, thyroid issues, placenta complications, and more.</p>
          </article>
          <article className="hp-card">
            <div className="hp-icon"><FaClipboardList aria-hidden="true" /></div>
            <h3>Focused Risk Assessment</h3>
            <p>Personalized evaluation based on history, pre-existing conditions, and current concerns.</p>
          </article>
          <article className="hp-card">
            <div className="hp-icon"><FaMicroscope aria-hidden="true" /></div>
            <h3>Advanced Fetal Monitoring</h3>
            <p>Detailed ultrasounds & 4D imaging, Doppler, fetal heart monitoring, growth scans, genetic screening.</p>
          </article>
          <article className="hp-card">
            <div className="hp-icon"><FaHandsHelping aria-hidden="true" /></div>
            <h3>Multi-Specialty Support</h3>
            <p>Cardiology, endocrinology, nephrology, and neonatology work together for complete care.</p>
          </article>
          <article className="hp-card">
            <div className="hp-icon"><FaHospital aria-hidden="true" /></div>
            <h3>24/7 Emergency Obstetric Support</h3>
            <p>Emergency team, NICU, anesthesiologists, and OTs always prepared.</p>
          </article>
        </div>
      </section>

      <section className="hp-section hp-section--alt" aria-labelledby="evaluate-heading">
        <div className="hp-section__header">
          <h2 id="evaluate-heading">What We Evaluate During Your High-Risk Pregnancy Care</h2>
        </div>
        <div className="hp-grid hp-grid--3">
          {evaluations.map((block) => (
            <article key={block.title} className="hp-card">
              <h3>{block.title}</h3>
              <ul>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="hp-cta-inline">
          <p>Not sure if your pregnancy needs special attention?</p>
          <button className="hp-btn hp-btn--primary" type="button">Connect with us</button>
        </div>
      </section>

      <section className="hp-section" aria-labelledby="plan-heading">
        <div className="hp-section__header">
          <h2 id="plan-heading">Your Personalized High-Risk Pregnancy Care Plan</h2>
        </div>
        <div className="hp-grid hp-grid--2">
          {plan.map((item) => (
            <article key={item.title} className="hp-card">
              <div className="hp-icon"><FaShieldAlt aria-hidden="true" /></div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
        <div className="hp-cta-inline">
          <button className="hp-btn hp-btn--primary" type="button">Book Your Appointment</button>
        </div>
      </section>

      <section className="hp-section hp-section--alt" aria-labelledby="benefit-heading">
        <div className="hp-section__header">
          <h2 id="benefit-heading">How High-Risk Pregnancy Management Helps</h2>
        </div>
        <div className="hp-grid hp-grid--3">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="hp-card">
              <div className="hp-icon"><FaHeartbeat aria-hidden="true" /></div>
              <h3>{benefit.title}</h3>
              <ul>
                {benefit.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="hp-cta-inline">
          <p>Need reassurance? Talk to our high-risk pregnancy doctors near you.</p>
          <button className="hp-btn hp-btn--secondary" type="button">Talk to a Doctor</button>
        </div>
      </section>

      <section className="hp-section" aria-labelledby="who-heading">
        <div className="hp-section__header">
          <h2 id="who-heading">Who Should Consider High-Risk Pregnancy Care?</h2>
        </div>
        <div className="hp-card hp-card--list">
          <ul className="hp-list">
            {candidates.map((c) => (
              <li key={c}><FaCheckCircle aria-hidden="true" /> {c}</li>
            ))}
          </ul>
        </div>
        <div className="hp-cta-inline">
          <p>If any of these apply, consult our specialists early.</p>
          <button className="hp-btn hp-btn--primary" type="button">Consult Specialists</button>
        </div>
      </section>

      <section className="hp-section hp-section--alt" aria-labelledby="specialists-heading">
        <div className="hp-section__header">
          <h2 id="specialists-heading">Meet Our High-Risk Pregnancy Specialists</h2>
        </div>
        <div className="hp-grid hp-grid--3">
          {specialists.map((doc) => (
            <article key={doc.name} className="hp-card">
              <div className="hp-icon"><FaUserMd aria-hidden="true" /></div>
              <h3>{doc.name}</h3>
              <p className="hp-muted">{doc.title}</p>
              <p>{doc.desc}</p>
            </article>
          ))}
        </div>
        <div className="hp-support">
          <h3>Supported by:</h3>
          <ul>
            {supports.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <div className="hp-cta-inline">
          <button className="hp-btn hp-btn--secondary" type="button">Meet Our Doctors</button>
        </div>
      </section>

      <section className="hp-section" aria-labelledby="whyprolife-heading">
        <div className="hp-section__header">
          <h2 id="whyprolife-heading">Why Prolife Hospitals?</h2>
        </div>
        <div className="hp-grid hp-grid--2">
          {highlights.map((item) => (
            <article key={item} className="hp-card hp-card--bullet">
              <FaCheckCircle className="hp-icon-inline" aria-hidden="true" />
              <p>{item}</p>
            </article>
          ))}
        </div>
        <div className="hp-cta-inline">
          <button className="hp-btn hp-btn--primary" type="button">Learn more about our maternity care</button>
        </div>
      </section>

      <section className="hp-section hp-section--alt" aria-labelledby="testimonials-heading">
        <div className="hp-section__header">
          <h2 id="testimonials-heading">What Our Patients Say</h2>
        </div>
        <div className="hp-grid hp-grid--3">
          {testimonials.map((t) => (
            <article key={t.name} className="hp-card hp-card--quote">
              <p className="hp-quote">“{t.text}”</p>
              <p className="hp-muted">— {t.name}</p>
            </article>
          ))}
        </div>
        <div className="hp-cta-inline">
          <button className="hp-btn hp-btn--ghost" type="button">Read More Success Stories</button>
        </div>
      </section>

      <section className="hp-section" aria-labelledby="contact-heading">
        <div className="hp-section__header">
          <h2 id="contact-heading">Book Your High-Risk Pregnancy Consultation</h2>
          <p>If you need high-risk pregnancy care—or if your pregnancy feels uncertain—our specialists are here to guide you safely.</p>
        </div>
        <div className="hp-contact">
          <div className="hp-contact__item">
            <FaPhoneAlt aria-hidden="true" /> <span>{contact.phone}</span>
          </div>
          <div className="hp-contact__item">
            <FaEnvelope aria-hidden="true" /> <span>{contact.email}</span>
          </div>
          <div className="hp-contact__item">
            <FaMapMarkerAlt aria-hidden="true" /> <span>{contact.address}</span>
          </div>
          <div className="hp-contact__item">
            <FaRegClock aria-hidden="true" /> <span>{contact.hours}</span>
          </div>
          <div className="hp-cta-group">
            <button className="hp-btn hp-btn--primary" type="button">Book Appointment Online</button>
            <button className="hp-btn hp-btn--secondary" type="button">Call Now</button>
          </div>
        </div>
      </section>

      <section className="hp-section hp-section--alt" aria-labelledby="faq-heading">
        <div className="hp-section__header">
          <h2 id="faq-heading">Frequently Asked Questions</h2>
        </div>
        <div className="hp-grid hp-grid--2">
          {faqs.map((faq) => (
            <article key={faq.q} className="hp-card hp-card--faq">
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="hp-section" aria-labelledby="related-heading">
        <div className="hp-section__header">
          <h2 id="related-heading">Related Services You May Need</h2>
        </div>
        <div className="hp-grid hp-grid--3">
          {related.map((r) => (
            <article key={r.title} className="hp-card">
              <div className="hp-icon"><FaComments aria-hidden="true" /></div>
              <h3>{r.title}</h3>
              <button className="hp-btn hp-btn--ghost" type="button">{r.cta}</button>
            </article>
          ))}
        </div>
      </section>

      <footer className="hp-footer">
        <p>Your trusted partner in maternal health and high-risk pregnancy management in Chennai.</p>
      </footer>
    </div>
  );
}

