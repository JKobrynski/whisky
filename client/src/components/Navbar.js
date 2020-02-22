import React from "react";

export default function Navbar({ search, setSearch, visible, setVisible }) {
  const _onChange = e => {
    setSearch(e.target.value);
  };

  return (
    <div
      className="header"
      onClick={visible ? () => setVisible(false) : undefined}
    >
      <h1 className="header-title">Kobra's whisky collection</h1>
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
  );
}
