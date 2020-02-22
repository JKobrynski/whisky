import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItems, deleteItem } from "../store/actions";
import Card from "./Card";
import Spinner from "./Spinner";

export default function Content({ search, visible, setVisible }) {
  const [whiskies, setWhiskies] = useState([]);
  const [filtered, setFiltered] = useState([]);

  // Selectors
  const { data, loading, error } = useSelector(
    state => state.whiskyReducer.whiskies
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!data.length) {
      dispatch(getItems());
    }
  }, []);

  useEffect(() => {
    if (data.length) {
      setWhiskies([...data]);
      setFiltered([...data]);
    }
  }, [data]);

  useEffect(() => {
    if (whiskies) {
      let filteredW = whiskies.filter(whisky => {
        return whisky.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      });

      setFiltered([...filteredW]);
    }
  }, [search]);

  const _onDelete = id => {
    dispatch(deleteItem(id));
  };

  return (
    <div
      className="content"
      onClick={visible ? () => setVisible(false) : undefined}
    >
      {loading ? (
        <Spinner />
      ) : (
        filtered.map(item => (
          <Card key={item._id} item={item} _onDelete={_onDelete} />
        ))
      )}
    </div>
  );
}
