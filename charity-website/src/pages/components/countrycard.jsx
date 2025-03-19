import { useNavigate } from "react-router-dom";

function CountryCard({ country, isFlipped, onClick }) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/country/${country.name.toLowerCase().replace(/\s+/g, "-")}`);
  };

  return (
    <div className="col-md-4 mb-4">
      <button className="country-btn w-100 mb-2" onClick={onClick}>
        {country.name}
      </button>
      <div 
        className={`country-card text-center p-3 ${isFlipped ? "flipped" : ""}`} 
        onClick={handleNavigation}
      >
        <div
          className="card-front"
          style={{ backgroundImage: `url(${country.flag})` }}
        ></div>
      </div>
    </div>
  );
}
