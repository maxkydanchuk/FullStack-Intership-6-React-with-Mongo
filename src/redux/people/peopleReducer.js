import {
  FETCH_PEOPLE_SUCCESS,
  PEOPLE_HAS_ERROR,
  PEOPLE_ARE_LOADING,
  SET_CURRENT_PAGE,
  RESET_STORE
} from './peopleTypes'

const initialState = {
  data: [],
  loading: false,
  error: "",
  currentPage: 0,
  totalCount: 0
};

export const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case PEOPLE_ARE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        data: action.data,
        totalCount: action.totalCount,
        loading: false,
      };
    case PEOPLE_HAS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.haveError,
      };
      case SET_CURRENT_PAGE:
        return {
          ...state,
          currentPage: action.page
        };
        case RESET_STORE: 
          return {
            initialState
        }
    default:
      return state;
  }
};

