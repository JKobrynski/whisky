import React from "react";

export default function Card({ item, _onDelete }) {
  return (
    <div key={item._id} className="card">
      <h2 className="name">{item.name}</h2>
      <h1 className="age">{item.age}</h1>
      <h2 className="country">{item.country}</h2>
      <p className="description">{item.description}</p>
      <input
        type="button"
        value="Delete"
        className="delete-button"
        onClick={() => _onDelete(item._id)}
      />
    </div>
  );
}
