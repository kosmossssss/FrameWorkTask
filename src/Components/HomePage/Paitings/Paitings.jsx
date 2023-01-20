import React from "react";
import s from "./../Paitings/Paitings.module.sass";
import { Card } from "./Card/Card";
import PropTypes from "prop-types";

const Paitings = ({ items, Authors, Locations }) => {

  const LocationsDataWithName =  Locations.map((obj) => {
    return {
      id: obj.id,
      name: obj.location,
    };
  })

  return (
    <div className={s.paitings}>
      {items.map((item) => {
        const authorName = Authors.find(
          (authors) => authors.id === item.authorId
        ).name;

        const locationName = LocationsDataWithName.find(
          (location) => location.id === item.locationId
        ).location;

        return (
          <Card
            key={item.id}
            {...item}
            AuthorName={authorName}
            LocationsName={locationName}
          />
        );
      })}
    </div>
  );
};

Paitings.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      authorId: PropTypes.number,
      created: PropTypes.string,
      id: PropTypes.number,
      imageUrl: PropTypes.string,
      locationId: PropTypes.number,
      name: PropTypes.string,
    })
  ),
  Authors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
  Locations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
};

export { Paitings };
