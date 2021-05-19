import PropTypes from "prop-types";

function Buttons({ color, text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="btn"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
}
Buttons.defaultProps = {
  color: "steelblue",
};
Buttons.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
export default Buttons;
