import React, { useState } from "react";
import "./Donate.css"; 

const Donate = () => {
  const [showModal, setShowModal] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleDonateClick = () => {
    setShowModal(true);
    setIsClicked(true);

    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  return (
    <div className="donate-container">
      
      {/* Section 1: Why We Need Your Help */}
      <section className="donation-intro">
        <h1>Your Help Matters</h1>
        <p>
          Your support is crucial in empowering underprivileged communities with essential resources 
          and skills. Every donation enables us to provide agricultural training, food security, and 
          sustainable development initiatives. 
        </p>
        <p>
          Through your generosity, we can continue making a difference in the lives of many by 
          providing agricultural equipment, food parcels, clothing, and training programs that 
          foster long-term self-sufficiency.
        </p>
      </section>

      {/* Section 2: Types of Donations */}
      <section className="donation-options">
        
        {/* Agricultural Equipment Donation */}
        <div className="donation-box">
          <h2>Donate Agricultural Equipment</h2>
          <p>
            We accept farming tools and equipment to distribute in different countries where we 
            operate. These donations help communities improve food production and become more 
            self-sustainable.
          </p>
        </div>

        {/* Food Parcels & Clothing Donation */}
        <div className="donation-box">
          <h2>Donate Food Parcels & Clothing</h2>
          <p>
            Food parcels and clothing go a long way in assisting those in need. Help us provide 
            for families struggling with basic necessities.
          </p>
          <div className="donation-images">
            <img src="./media/donation1.jpg" alt="Donation 1" />
            <img src="./media/donation2.jpg" alt="Donation 2" />
            <img src="./media/donation3.jpg" alt="Donation 3" />
          </div>
        </div>

      </section>

      {/* Section 3: Volunteering Opportunities */}
      <section className="volunteer-section">
        <h2>Volunteer With Us</h2>
        <p>
          Your time is just as valuable as financial support. Join us in our skills training 
          centers or agricultural sites, where you can help educate and empower individuals 
          towards sustainable development.
        </p>
      </section>

      {/* Section 4: Financial Donations */}
      <section className="financial-donations">
        <h2>Make a Financial Contribution</h2>
        <p>Your financial support allows us to continue our mission.</p>

        <div className="eft-section">
          <h3>EFT / Bank Transfer</h3>
          <p>Bank Name: <strong>ABC Bank</strong></p>
          <p>Account Name: <strong>Charity Foundation</strong></p>
          <p>Account Number: <strong>1234567890</strong></p>
          <p>Branch Code: <strong>987654</strong></p>
          <p>SWIFT Code: <strong>ABCDEF12</strong></p>
        </div>

        <div className="paypal-section">
          <h3>Donate via PayPal</h3>
          <a
            href="https://www.paypal.com/donate?hosted_button_id=YOUR_BUTTON_ID"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn donate-btn ${isClicked ? "clicked" : ""}`} 
            onClick={handleDonateClick} 
          >
            Donate with PayPal
          </a>
        </div>

        {showModal && (
          <div className="modal fade show d-block" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body text-center">
                  <p className="text-muted small fw-bold">Thank you for your generosity!!!</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

    </div>
  );
};

export default Donate;
