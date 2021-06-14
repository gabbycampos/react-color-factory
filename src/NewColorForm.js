import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const NewColorForm = ({ addColor }) => {
  const [formData, setFormData] = useState({ name: "", color: "#ffffff" });
  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addColor({ [formData.name]: formData.color });
    history.push("/colors");
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value
    }));
  };

  return (
    <div className="ColorForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Color Title: </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Color Name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="color">Color: </label>
        <input
          type="color"
          id="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />

        <button>Add Color</button>
      </form>
    </div>
  );
};

export default NewColorForm;