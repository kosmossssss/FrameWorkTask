import { React } from "react";
import s from "./../Card/Card.module.sass";
import PropTypes from "prop-types";

const Card = ({ created, imageUrl, name, LocationsName, AuthorName }) => {
  const baseUrl = "https://test-front.framework.team/";
  return (
    <div className={s.PaintingCard}>
      <img src={baseUrl + imageUrl} alt="painting" />
      <div className={s.PaintingCard__info}>
        <h3 className={s.PaintingCard__title}>{name}</h3>
        <p>
          <b>Author:</b> {AuthorName}
        </p>
        <p>
          <b>Created:</b> {created}
        </p>
        <p>
          <b>Location:</b> {LocationsName}
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  created: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  LocationsName: PropTypes.string,
  AuthorName: PropTypes.string.isRequired,
};

export { Card };
