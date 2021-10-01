import React, { useState, useRef } from "react";
import Header from "../components/appBar";
import ServicesCard from "../components/servicesCard";

import "./style.css";
import Footer from "../components/footer";
import MyPlans from "../components/plans";
import ContactUs from "../components/contact";
import PaymentPage from "../components/payment";

function Registration() {
  const [selectedPlan, setSelectedPlan] = useState();

  const contactRef = useRef();
  const joinRef = useRef();
  const cardRef = useRef();

  function scrollToJoin() {
    joinRef.current.scrollIntoView({ behavior: "smooth" });
  }
  function scrollToContact() {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function onPlanClick(index) {
    setSelectedPlan(index);
    setTimeout(function () {
      cardRef.current.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  return (
    <div>
      <div className=" big-image">
        <Header click={scrollToContact} labelClick={scrollToJoin} />
      </div>
      <div className="main-style">
        
        <ServicesCard /> 
        <div ref={joinRef}>
          <MyPlans
            onClick={onPlanClick}
            selectedPlan={selectedPlan}
          />
        </div>
        <div
          ref={cardRef}
          hidden={selectedPlan === undefined}
          className="card-p"
        >
          <PaymentPage selectedPlan={selectedPlan}  />
        </div>
        <div ref={contactRef}>
          <ContactUs />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Registration;


