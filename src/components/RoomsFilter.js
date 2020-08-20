import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    maxPrice,
    minPrice,
    maxSize,
    minSize,
    breakfast,
    pets,
  } = context;
  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  let guests = getUnique(rooms, "capacity");
  guests = guests.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">Room Type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {guests}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price: ${price}</label>
          <input
            name="price"
            type="range"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="size">Room Size</label>
          <div className="size-inputs">
            <input
              name="minSize"
              type="number"
              min={minSize}
              max={maxSize}
              id="size"
              value={minSize}
              className="size-input"
              onChange={handleChange}
            />
            <input
              name="maxSize"
              type="number"
              min={minSize}
              max={maxSize}
              id="size"
              value={maxSize}
              className="size-input"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="single-extra">
            <label htmlFor="breakfast">Breakfast</label>
            <input
              name="breakfast"
              type="checkbox"
              id="breakfast"
              checked={breakfast}
              className="size-input"
              onChange={handleChange}
            />
          </div>
          <div className="single-extra">
            <label htmlFor="pets">Pets</label>
            <input
              name="pets"
              type="checkbox"
              id="pets"
              checked={pets}
              className="size-input"
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </section>
  );
}
