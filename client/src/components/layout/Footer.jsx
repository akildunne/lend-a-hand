import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <Link to="/">
        <i className="fas fa-home"></i>
      </Link>
      <Link to="/create">
        <i className="fas fa-plus-circle"></i>
      </Link>
      <div>
      <Link to="/calendar">
      <i className="far fa-calendar-alt"></i>
      </Link>
      </div>
    </div>
  );
}
