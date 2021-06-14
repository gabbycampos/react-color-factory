import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";

function Color({ colors }) {
  const history = useHistory();
  const { name } = useParams();
  const color = colors[name];
  if (!color) {
    history.push("/colors");
  }

  return (
    <div className="Color" style={{ backgroundColor: color }}>
      <h1>{name}</h1>

      <h3>
        <Link to="/colors">Go Back</Link>
      </h3>
    </div>
  );
}

export default Color;