import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

const Icon = ({ name }) => {
  switch (name) {
    case "circle":
      return <FaRegCircle className="circleicon" />;
    case "cross":
      return <FaTimes className="crossicon" />;
    default:
      return <FaPen className="penicon" />;
  }
};

export default Icon;
