import apiService from "../../services/api-service";
import {pageSize} from '../../configs/config'
import {
    FETCH_PEOPLE_SUCCESS,
    PEOPLE_HAS_ERROR,
    PEOPLE_ARE_LOADING,
    SET_CURRENT_PAGE
} from './peopleTypes'

const api = new apiService();

export const fetchDataSuccess = (data, totalCount) => ({
    type: FETCH_PEOPLE_SUCCESS,
    data,
    totalCount
});

export const dataHaveError = (bool) => ({
    type: PEOPLE_HAS_ERROR,
    haveError: bool,
});

export const dataAreLoading = (bool) => ({
    type: PEOPLE_ARE_LOADING,
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

export function fetchPeopleData(param) {
    return (dispatch) => {
        const {sortOrder, sortColumn, inputValue, currentPage} = param;
        dispatch(dataAreLoading(true));
        api.getAllPeople(sortOrder, `fields.${sortColumn}`, inputValue, currentPage, pageSize)
            .then((response) => dispatch(fetchDataSuccess(response.data, response.totalCount)))
            .catch(() => dispatch(dataHaveError(true)));
    };
}

