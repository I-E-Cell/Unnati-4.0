import PropTypes from "prop-types";

const CompanyCard = ({ logo }) => {
  return (
    <div className={`rounded-full p-4 bg-black`}>
      {logo && <img src={logo} alt="Company Logo" className="w-16 h-16" />}
    </div>
  );
};

CompanyCard.propTypes = {
    logo: PropTypes.string
}

export default CompanyCard;