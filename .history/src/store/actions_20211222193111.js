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

// export const setCurrentPage = (page) => {
//   type: 'SET_CURRENT_PAGE',
//   page
// }

// export function sortAndSearchData(param, data) {
//   return (dispatch) => {
//     console.log(data)
//     const { sortOrder, sortColumn, inputValue } = param;
//     let filteredData = data.filter((item) => {
//       return item.name.toLowerCase().includes(inputValue.toLowerCase());
//     });

//     let filteredPrizes =  api.search('people', inputValue)
//     .then((response) => dispatch(fetchDataSuccess(response)));


//     if (sortOrder ==='asc') {
//       console.log('!asc')
//         api.sort('people', 'asc', `fields.${sortColumn}`)
//       .then((response) => dispatch(fetchDataSuccess(response)))
//     }
//     if (sortOrder === 'desc') {
//       console.log('!desc')
//         api.sort('people', 'desc', `fields.${sortColumn}`)
//       .then((response) => dispatch(fetchDataSuccess(response)))
//     }

//     dispatch(filterData(filteredData));
//   };
// }

export function fetchData(param, data) {
  return (dispatch) => {
    const { sortOrder, sortColumn, inputValue } = param;

    dispatch(dataAreLoading(true));
    api.getAllPeople(sortOrder, `fields.${sortColumn}`, inputValue)
      .then((response) => dispatch(fetchDataSuccess(response)))
      .catch(() => dispatch(dataHaveError(true)));
  };
}
