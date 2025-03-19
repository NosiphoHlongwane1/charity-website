import { useParams } from "react-router-dom";

function CountryDetails() {
  const { countryName } = useParams();

  // Fetch or define detailed information about each country
  const countryInfo = {
    "South Africa:": "In South Africa we reached 20000 people. Engaged 30 communities so far...",
    "malawi": "In Malawi we reached 50000 people. Engaged 20 communities...",
    "ghana": "In Ghana we reached 50000 people. Engaged 12 communities...",
    "nigeria": "In Nigeria we reached 40000 people. Engaged 16 communities...",
    "ethiopia": "In Ethiopia we reached 30000 people. Engaged 12 communities...",
  };

  return (
    <div className="container my-5">
      <h2 className="fw-bold text-center">{countryName.replace("-", " ")}</h2>
      <p>{countryInfo[countryName] || "Information about this country is not available."}</p>
    </div>
  );
}

export default CountryDetails;
