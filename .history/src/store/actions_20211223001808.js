import apiService from "../services/api-service";

const api = new apiService();

export const fetchDataSuccess = (payload) => ({
  type: "FETCH_DATA_SUCCESS",
  payload,
});

export const dataHaveError = (bool) => ({
  type: "DATA_HAVE_ERROR",
  haveError: bool,
});

export const dataAreLoading = (bool) => ({
  type: "DATA_ARE_LOADING",
  isLoading: bool,
});

export const filterData = (payload) => ({
  type: "FITLER_DATA",
  payload,
});

export const setCurrentPage = (page) => ({
  type: 'SET_CURRENT_PAGE',
  page
});

export function fetchData(param) {
  return (dispatch) => {
    const { sortOrder, sortColumn, inputValue } = param;

    dispatch(dataAreLoading(true));
    api.getAllPeople(sortOrder, `fields.${sortColumn}`, inputValue, +2, 4)
      .then((response) => dispatch(fetchDataSuccess(response)))
      .catch(() => dispatch(dataHaveError(true)));
  };
}
