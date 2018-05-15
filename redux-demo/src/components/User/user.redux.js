import axios from "axios";
import { REQUEST, SUCCESS, FAILURE } from "../../shared/reducers/action-type.util";

// Action Type
export const ACTION_TYPES = {
  FETCH_DASHBOARD: "Dashboard/FETCH_DASHBOARD"
};

// init state
const initialState = {
  entities: [],
  errorMessage: null,
  error: false,
  loading: false
};

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_DASHBOARD):
      return {
        ...state,
        errorMessage: null,
        loading: true
      };
    case FAILURE(ACTION_TYPES.FETCH_DASHBOARD):
      return {
        ...state,
        loading: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_DASHBOARD):
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    default:
      return state;
  }
};

const apiUrl = '/api/app-groups';

export const getEntities = () => {
  return {
    type: ACTION_TYPES.FETCH_DASHBOARD,
    payload: axios.get(apiUrl)
  };
};