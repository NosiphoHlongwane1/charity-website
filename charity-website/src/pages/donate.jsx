import React, {useState} from "react";
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
    <div className="donate-container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card donate-card text-center p-4">
        <h1>Support Our Cause</h1>
        <p>Your donation helps us continue our work. We welcome any amount.</p>

        <div className="eft-section p-3 rounded border mb-4">
          <h2 className="h5 fw-semibold">EFT / Bank Transfer</h2>
          <p className="mb-1">Bank Name: <strong>ABC Bank</strong></p>
          <p className="mb-1">Account Name: <strong>Charity Foundation</strong></p>
          <p className="mb-1">Account Number: <strong>1234567890</strong></p>
          <p className="mb-1">Branch Code: <strong>987654</strong></p>
          <p className="mb-1">SWIFT Code: <strong>ABCDEF12</strong></p>
        </div>

        <div className="mb-4">
          <h2 className="h5 fw-semibold mb-3">Donate via PayPal</h2>
          <a
            href="https://www.paypal.com/donate?hosted_button_id=YOUR_BUTTON_ID"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-lg donate-btn ${isClicked ? "clicked" : ""}`} 
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

      </div>
    </div>
  );
};

export default Donate;
