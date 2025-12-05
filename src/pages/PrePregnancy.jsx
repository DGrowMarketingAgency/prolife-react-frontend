import React from "react";



const PrePregnancy = () => { 
  const features = [
    {
      title: "Experienced Gynecologists",
      desc: "Our specialists provide personalized care backed by years of successful pregnancy guidance.",
    },
    {
      title: "Thorough Health Assessment",
      desc: "We evaluate medical, lifestyle, and reproductive health factors for safer conception.",
    },
    {
      title: "Evidence-Based Fertility Support",
      desc: "Advanced diagnostic testing and proven strategies to boost natural conception.",
    },
    {
      title: "Early Problem Detection",
      desc: "Conditions like PCOS, thyroid & deficiencies are treated before they cause risks.",
    },
    {
      title: "Individualized Action Plans",
      desc: "Every woman is different. Your care plan will be 100% personalized to your health.",
    },
  ];

  const assessmentData = [
    {
      title: "Your Complete Health Picture",
      points: [
        "Chronic conditions (diabetes, thyroid, BP, asthma)",
        "Medication & pregnancy safety evaluation",
        "Weight, nutrition & metabolic health",
        "Lifestyle: smoking, alcohol, exercise & stress"
      ]
    },
    {
      title: "Reproductive Health Evaluation",
      points: [
        "Menstrual cycle pattern & symptoms",
        "PCOS or hormonal imbalance screening",
        "Ultrasound / pelvic checks for fibroids or cysts",
        "Fertility window & ovulation optimization"
      ]
    },
    {
      title: "Risk Screening & Prevention",
      points: [
        "Family history of genetic issues",
        "Previous pregnancy outcomes",
        "Required vaccinations check",
        "Infection screening if needed"
      ]
    }
  ];

  const items = [
    {
      icon: faLeaf,
      title: "Nutritional Optimization",
      description:
        "Boost key nutrients like iron, calcium, protein & essential vitamins for healthy conception.",
    },
    {
      icon: faPills,
      title: "Folic Acid & Supplements",
      description:
        "Right folic acid dosage reduces birth defects by 70% + Vitamin D & iron correction.",
    },
    {
      icon: faShieldHeart,
      title: "Medication Safety Review",
      description:
        "We recheck medications to ensure they're pregnancy-safe & replace if required.",
    },
    {
      icon: faPersonRunning,
      title: "Lifestyle Modifications",
      description:
        "Stress reduction, exercise planning, sleep guidance & habit transformation.",
    },
    {
      icon: faClock,
      title: "Fertility Timing Guidance",
      description:
        "Get your exact fertile window clarified to improve natural conception chances.",
    },
    {
      icon: faClipboardCheck,
      title: "Follow-Up Schedule",
      description:
        "Regular tracking + progress review + new guidance as you move forward.",
    },
  ];


  return (
    <div className="pre-pregnancy-page">

      {/* Hero Banner */}
      <div className="story-hero-banner">
        <img
          src="/images/img/g-bg.webp"
          alt="Pre-pregnancy Banner"
          className="story-hero-image"
        />
        <div className="story-hero-overlay">
          <h1 className="story-hero-title">Pre-Pregnancy Counselling in Chennai</h1>
        </div>
      </div>

      {/* PLAN PREGNANCY SECTION */}
<section className="plan-pregnancy-section">
  <div className="plan-container">

    <div className="plan-left">
      <h2 className="plan-title">
        Plan Your Pregnancy with <br />
        <span>Expert Medical Guidance</span>
      </h2>

      <p className="plan-description">
        Deciding to have a baby deserves proper preparation. Whether this is your
        first child or your fourth, pre-pregnancy counselling at Prolife Hospitals
        helps you conceive safely and carry a healthy pregnancy. Our pregnancy care
        in Chennai identifies risks early, optimizes your health, and gives you a
        clear plan before you conceive.
      </p>

      <a href="/contact" className="plan-btn">
        Book Your Consultation →
      </a>
    </div>

    <div className="plan-right">
      <img
        src="/images/img/pre-pregnancy1.jpg"
        alt="Pre Pregnancy Consultation"
      />
    </div>

  </div>
</section>

<section className="plan-pregnancy-section">
  <div className="plan-container">
    <div className="plan-right">
      <img
        src="/images/img/pre-pregnancy2.jpg"
        alt="Pre Pregnancy Consultation"
      />
    </div>
    <div className="plan-left">
      <h2 className="plan-title">
        What is Pre-Pregnancy Counselling?
      </h2>

      <p className="plan-description">
        Pre-pregnancy counselling is a medical evaluation you get before conceiving. We assess your reproductive health, review your medical background, check for nutritional gaps, and create a personalized fertility plan.
The goal? Get your body in the best possible condition for conception and pregnancy. Problems caught early are easier to fix.

      </p>

      <a href="/contact" className="plan-btn">
        Learn About Our Gynecology Services →
      </a>
    </div>

 

  </div>
</section>


   <section className="prolife-advance">
      <h2 className="prolife-heading">
        Why Choose <span>Prolife</span> for Pre-Pregnancy Planning?
      </h2>

      <div className="prolife-feature-flow">
        {features.map((item, i) => (
          <div className="flow-line" key={i}>
            <div className="feature-dot"></div>

            <div className="feature-box">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <a href="#" className="success-btn">
        Read Patient Success Stories →
      </a>
    </section>


<section className="assess-section">
      <h2 className="assess-title">
        What We Assess <span>During Your Visit</span>
      </h2>

      <div className="assess-card-wrapper">
        {assessmentData.map((item, index) => (
          <div className="assess-card" key={index}>
            <div className="highlighter"></div>
            <h3>{item.title}</h3>
            <ul>
              {item.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <a href="#" className="assess-btn">
        Schedule a Consultation →
      </a>
    </section>

   









      {/* Main Content */}
      {/* <section className="lab-text-section">
        <div className="lab-text-container">

          <p className="lab-text-intro">
            You’ve decided it’s your time. Whether trying for the first time or
            planning for your fourth baby, we will help by addressing your
            specific issues, optimising your individual situation, settling your
            anxiety, and reducing your stress to help achieve the best outcome
            possible for you.
          </p>

          <h3 className="lab-text-heading">SEE HOW WE CAN HELP YOU</h3>

          <div className="lab-text-block">
            <h4 className="lab-text-subheading">
              I want a baby and need help
            </h4>
            <p className="lab-text-paragraph">
              Some couples will fall pregnant quickly and others will take more
              time. This is understandably frustrating, wearisome, and
              concerning. If you have been trying without success for up to
              12 months, we recommend you and your partner come and see us. Let
              us thoroughly assess you both and ensure that everything is in
              your favour to achieve a healthy pregnancy.
            </p>
          </div>

          <div className="lab-text-block">
            <h4 className="lab-text-subheading">
              I’ve had a hard time before… I’m worried
            </h4>
            <p className="lab-text-paragraph">
              You may have had problems in a previous pregnancy and as a result
              feel fear and trepidation about embarking on the journey again. We
              will help put your mind at ease by carefully assessing and
              optimising your situation to ensure the best outcome possible in
              the future.
            </p>
          </div>

          <div className="lab-text-block">
            <h4 className="lab-text-subheading">
              Is my medical problem going to affect things?
            </h4>
            <p className="lab-text-paragraph">
              If you suffer from a medical problem, it is really important to
              understand how it may impact your pregnancy but also how your
              pregnancy may impact your own health. We will see you before
              conceiving so we can ensure you are on the correct medications and
              in the best possible health to achieve our desired outcome —
              healthy mum and baby.
            </p>
          </div>

        </div>
      </section> */}
    </div>
  );
};

export default PrePregnancy;
