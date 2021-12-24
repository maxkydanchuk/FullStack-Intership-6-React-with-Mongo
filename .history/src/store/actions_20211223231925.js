import apiService from "../services/api-service";
import { pageSize } from '../configs/config'

const api = new apiService();

export const fetchDataSuccess = (payload, count) => ({
  type: "FETCH_DATA_SUCCESS",
  payload,
  count
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
    const { sortOrder, sortColumn, inputValue, currentPage } = param;
    dispatch(dataAreLoading(true));
    console.log(api.getAllPeople())
    api.getAllPeople(sortOrder, `fields.${sortColumn}`, inputValue, currentPage, pageSize)
      .then((response) => dispatch(fetchDataSuccess(response.data, response.totalCount)))
      .catch(() => dispatch(dataHaveError(true)));
  };
}
