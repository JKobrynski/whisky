import axios from "axios";

export const ACTIONS = {
  GET_ITEMS: "GET_ITEMS",
  ADD_ITEM: "ADD_ITEM",
  DELETE_ITEM: "DELETE_ITEM",
  ITEMS_LOADING: "ITEMS_LOADING",
  ERROR: "ERROR"
};

export const getItems = () => async dispatch => {
  try {
    dispatch(setItemsLoading());
    const res = await axios.get("/api/whiskies");

    dispatch({
      type: ACTIONS.GET_ITEMS,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: ACTIONS.ERROR, payload: err });
  }
};

export const addItem = item => async dispatch => {
  try {
    dispatch(setItemsLoading());
    const res = await axios.post("/api/whiskies", item);

    dispatch({
      type: ACTIONS.ADD_ITEM,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: ACTIONS.ERROR, payload: err });
  }
};

export const deleteItem = id => async dispatch => {
  try {
    dispatch(setItemsLoading());
    await axios.delete(`/api/whiskies/${id}`);

    dispatch({
      type: ACTIONS.DELETE_ITEM,
      payload: id
    });
  } catch (err) {
    dispatch({ type: ACTIONS.ERROR, payload: err });
  }
};

export const setItemsLoading = () => {
  return {
    type: ACTIONS.ITEMS_LOADING
  };
};
