import { ACTIONS } from "./actions";

const initialState = {
  whiskies: {
    data: [],
    loading: false,
    error: null
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.GET_ITEMS:
      return {
        ...state,
        whiskies: {
          data: action.payload,
          loading: false,
          error: null
        }
      };
    case ACTIONS.DELETE_ITEM:
      return {
        ...state,
        whiskies: {
          loading: false,
          data: state.whiskies.data.filter(
            whisky => whisky._id !== action.payload
          ),
          error: null
        }
      };
    case ACTIONS.ADD_ITEM:
      return {
        ...state,
        whiskies: {
          data: [action.payload, ...state.whiskies.data],
          loading: false,
          error: null
        }
      };
    case ACTIONS.ITEMS_LOADING:
      return {
        ...state,
        whiskies: {
          ...state.whiskies,
          loading: true
        }
      };
    case ACTIONS.ERROR:
      return {
        ...state,
        whiskies: {
          ...state.whiskies,
          error: action.payload
        }
      };
    default:
      return state;
  }
}
