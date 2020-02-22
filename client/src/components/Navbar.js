import React from "react";
import { useSelector } from "react-redux";

export default function Navbar({ search, setSearch, visible, setVisible }) {
  const _onChange = e => {
    setSearch(e.target.value);
  };

  const whiskies = useSelector(state => state.whiskyReducer.whiskies);

  return whiskies.data.length ? (
    <div
      className="header"
      onClick={visible ? () => setVisible(false) : undefined}
    >
      <h1 className="header-title">{`Kobra's ${whiskies.data.length} whiskies`}</h1>
      <div className="end">
        <input
          className="add-button"
          type="button"
          value="+"
          onClick={() => setVisible(true)}
        />
        <input
          type="text"
          name="search"
          value={search}
          onChange={_onChange}
          onBlur={() => setSearch("")}
        />
      </div>
    </div>
  ) : null;
}
