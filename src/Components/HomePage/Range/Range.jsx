import React from "react";
import s from "./../Range/Range.module.sass";
import ArrowDown from "./../../../Assets/svg/ArrowDown.svg";
import { useState } from "react";
import PropTypes from "prop-types";

const Range = ({
  isDarkTheme,
  setCurrentPage,
  setCreatedFrom,
  setCreatedTo,
}) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`${s.Range} ${isDarkTheme ? s.RangeDark : s.RangeLight}`}
      onClick={() => {
        setActive(!active);
      }}
    >
      <img
        src={ArrowDown}
        alt="ArrowDown"
        className={`${s.Range__arrowDown} ${active ? s.rotate : ""} ${
          !isDarkTheme ? s.svgLight : ""
        }`}
      />

      <p style={{ borderRadius: active ? `8px 8px 0px 0px` : `8px` }}>
        Created
      </p>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`${s.Range__inputs} ${active ? "" : s.Hidden}`}
      >
        <input
          className={s.Range__input}
          placeholder="From"
          onChange={(e) => {
            setCreatedFrom(e.target.value);
            setCurrentPage(1);
          }}
        />
        <input
          className={s.Range__input}
          placeholder="To"
          onChange={(e) => {
            setCreatedTo(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>
    </div>
  );
};

Range.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  setCreatedTo: PropTypes.func.isRequired,
  setCreatedFrom: PropTypes.func.isRequired,
};

export { Range };
