import { React } from "react";
import s from "./Input.module.sass";
import PropTypes from "prop-types";

const Input = ({ isDarkTheme, inputChange, setInputChange }) => {
  return (
    <input
      value={inputChange}
      onChange={(e) => {
        setInputChange(e.target.value);
      }}
      className={isDarkTheme ? s.inputDark : s.inputLight}
      placeholder={"Name"}
      style={{ minHeight: "42px" }}
    ></input>
  );
};

Input.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
  inputChange: PropTypes.string.isRequired,
  setInputChange: PropTypes.func.isRequired,
};

export { Input };
