import { React, useCallback, useEffect, useState } from "react";
import s from "./../HomePage/HomePage.module.sass";
import { Pagination, Select } from "fwt-internship-uikit";
import { Input } from "./Input/Input";
import { Range } from "./Range/Range";
import css from "fwt-internship-uikit/dist/index.css";
import { Paitings } from "./Paitings/Paitings";
import Delete from "./../../Assets/svg/Delete.svg";
import PropTypes from "prop-types";

const HomePage = ({ isDarkTheme }) => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [authors, setAuthors] = useState([]);
  const [locations, setLocations] = useState([]);
  const [authorName, setAuthorName] = useState("");
  const [authorId, setAuthorId] = useState();
  const [locationName, setLocationName] = useState("");
  const [locationId, setLocationId] = useState();
  const [inputChange, setInputChange] = useState("");
  const [createFrom, setCreatedFrom] = useState("");
  const [createTo, setCreatedTo] = useState("");

  const handleAuthorName = useCallback(
    (value) => {
      if (!value) {
        setAuthorName("");
        setAuthorId();
        return 0;
      }
      setCurrentPage(1);
      setAuthorName(value);
      setAuthorId(authors.find((el) => el.name === value).id.toString());
    },
    [authors, setAuthorId, setCurrentPage]
  );

  const handleLocationName = useCallback(
    (value) => {
      if (!value) {
        setLocationName("");
        setLocationId();
        return 0;
      }
      setCurrentPage(1);
      setLocationName(value);
      setLocationId(locations.find((el) => el.name === value).id.toString());
    },
    [setLocationId, setCurrentPage, locations]
  );

  async function getAuthors() {
    await fetch(`https://test-front.framework.team/authors`)
      .then((res) => res.json())
      .then((result) => {
        setAuthors(result);
      });
  }

  async function getLocations() {
    await fetch(`https://test-front.framework.team/locations`)
      .then((res) => res.json())
      .then((result) => {
        setLocations(result);
      });
  }

  async function getItems() {
    const API_URL = `https://test-front.framework.team/paintings?_limit=12&_page=${currentPage}
        ${locationId ? `&locationId=${locationId}` : ""}
        ${authorId ? `&authorId=${authorId}` : ""}
        ${inputChange ? `&q=${inputChange}` : ""}
        ${createFrom ? `&created_gte=${createFrom}` : ""}
        ${createTo ? `&created_lte=${createTo}` : ""}`;
    await fetch(API_URL)
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      });
  }
  useEffect(() => {
    getItems();
    getLocations();
    getAuthors();
  }, [currentPage, locationId, authorId, inputChange, createFrom, createTo]);

  
   return (
    <div className={s.home}>
      <div className={s.container}>
        <Input
          isDarkTheme={isDarkTheme}
          placeholder="Name"
          inputChange={inputChange}
          setInputChange={setInputChange}
          setCurrentPage={setCurrentPage}
        />
        <div className={s.container__selectWrapper}>
          <Select
            className={css.Select}
            disabled={!authors}
            options={authors}
            isDarkTheme={isDarkTheme}
            value={!authorName ? "Authors" : authorName}
            onChange={handleAuthorName}
          />
          <img
            className={s.container__img}
            src={Delete}
            alt="DeleteButton"
            onClick={() => {
              handleAuthorName("");
            }}
            style={{ display: authorName ? "" : "none" }}
          />
        </div>
        <div className={s.container__selectWrapper}>
          <Select
            className={css.Select}
            disabled={!locations}
            options={locations}
            isDarkTheme={isDarkTheme}
            value={!locationName ? "Locations" : locationName}
            onChange={handleLocationName}
          />
          <img
            className={s.container__img}
            src={Delete}
            alt="DeleteButton"
            onClick={() => {
              handleLocationName("");
            }}
            style={{ display: locationName ? "" : "none" }}
          />
        </div>
        <Range
          setCreatedFrom={setCreatedFrom}
          setCurrentPage={setCurrentPage}
          setCreatedTo={setCreatedTo}
          isDarkTheme={isDarkTheme}
        />
      </div>
      <Paitings Authors={authors} Locations={locations} items={items} />
      <Pagination
        isDarkTheme={isDarkTheme}
        pagesAmount={3}
        currentPage={currentPage}
        onChange={(currentPage) => setCurrentPage(currentPage)}
      />
    </div>
  );
};
HomePage.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
};

export { HomePage };
