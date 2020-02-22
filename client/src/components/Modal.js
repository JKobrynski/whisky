import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/actions";

export default function Modal({ visible, setVisible }) {
  const [whisky, setWhisky] = useState({
    name: "",
    age: "",
    country: "",
    description: ""
  });

  const dispatch = useDispatch();

  const _onChange = e => {
    setWhisky({
      ...whisky,
      [e.target.name]: e.target.value
    });
  };

  const _onSubmit = () => {
    dispatch(addItem(whisky));
    setVisible(false);
  };

  const _isEmpty = () => {
    const { name, age, country, description } = whisky;

    return !name || !age || !country || !description;
  };

  const showHideClassName = visible
    ? "modal display-visible"
    : "modal display-none";

  return (
    <div className={showHideClassName}>
      <h1>Add a new one</h1>
      <form onSubmit={_onSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={whisky.name}
          onChange={_onChange}
        />
        <label>Age</label>
        <input type="text" name="age" value={whisky.age} onChange={_onChange} />
        <label>Country</label>
        <input
          type="text"
          name="country"
          value={whisky.country}
          onChange={_onChange}
        />
        <label>Description</label>
        <textarea
          type="text"
          name="description"
          value={whisky.description}
          onChange={_onChange}
        />
        <input type="submit" value="Save" disabled={_isEmpty()} />
      </form>
    </div>
  );
}
