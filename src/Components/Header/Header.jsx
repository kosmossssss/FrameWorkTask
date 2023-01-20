import { React } from "react";
import s from "./../Header/Header.module.sass";
import logo from "./../../Assets/svg/logo.svg";
import shine from "./../../Assets/svg/shine.svg";
import PropTypes from "prop-types";

const Header = ({ isDarkTheme, setDarkTheme }) => {
  return (
    <header className={s.header}>
      <div className={s.header__container}>
        <div className={s.header__logo}>
          <img src={logo} alt="logo" className={s.header__img} />
        </div>
        <div className={s.header__switch}>
          <img
            src={shine}
            alt="shine"
            className={s.header__switchImg}
            style={{ filter: isDarkTheme ? "" : "brightness(0)" }}
            onClick={() => {
              setDarkTheme(!isDarkTheme);
            }}
          />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
  setDarkTheme: PropTypes.func,
};

export { Header };
