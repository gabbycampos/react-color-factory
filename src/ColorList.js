import React from "react";
import { Link } from "react-router-dom";

function Colors({ colors }) {
  console.log(colors);
  return (
    <div>
      <h1>The Color Factory</h1>
      <h2>
        <Link to="/colors/new">Add New Color</Link>
      </h2>
      <div className="Colors">
        <p>Pick a color!</p>
        <ul>
          {Object.keys(colors).map((c) => (
            <li key={c}>
              <Link to={`/colors/${c}`}>{c}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Colors;