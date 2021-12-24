import apiService from "../services/api-service";
import { pageSize } from '../configs/config'

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
  payload.data,
});

export const setCurrentPage = (page) => ({
  type: 'SET_CURRENT_PAGE',
  page
});

export function fetchData(param) {
  return (dispatch) => {
    const { sortOrder, sortColumn, inputValue, currentPage } = param;
    dispatch(dataAreLoading(true));
    api.getAllPeople(sortOrder, `fields.${sortColumn}`, inputValue, currentPage, pageSize)
      .then((response) => dispatch(fetchDataSuccess(response)))
      .catch(() => dispatch(dataHaveError(true)));
  };
}
