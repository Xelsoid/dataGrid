import React from "react";
import "./index.scss";
import PropTypes from "prop-types";

const Button = ({ disabled, btnType, buttonOnClickCallback }) => (
  // eslint-disable-next-line react/button-has-type
  <button className="btn" disabled={disabled} onClick={buttonOnClickCallback} type={btnType}>
    Next
  </button>
);

export default Button;

Button.propTypes = {
  disabled: PropTypes.bool,
  btnType: PropTypes.oneOf(['button', 'submit', 'reset']),
  buttonOnClickCallback: PropTypes.func,
};

Button.defaultProps = {
  disabled: false,
  btnType: 'button',
  buttonOnClickCallback: null,
};
