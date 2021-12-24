const initialState = {
  data: [],
  loading: false,
  error: "",
  currentPage: 0,
  totalCount: 0
};

export const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DATA_ARE_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        data: action.data,
        totalCount: action.totalCount,
        loading: false,
      };
    case "DATA_HAVE_ERROR":
      return {
        ...state,
        loading: false,
        error: action.haveError,
      };
      case "SET_CURRENT_PAGE":
        return {
          ...state,
          currentPage: action.page
        };
    default:
      return state;
  }
};

export default peopleReducer;
