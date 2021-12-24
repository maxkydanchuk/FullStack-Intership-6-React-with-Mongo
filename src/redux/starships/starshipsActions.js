import apiService from "../../services/api-service";
import {pageSize} from '../../configs/config'
import {
    FETCH_STARSHIPS_SUCCESS,
    STARSHIPS_HAS_ERROR,
    STARSHIPS_ARE_LOADING,
    FILTER_STARSHIPS,
    SET_CURRENT_PAGE,
    RESET_STORE
} from './starshipsTypes'

const api = new apiService();

export const fetchDataSuccess = (data, totalCount) => ({
    type: FETCH_STARSHIPS_SUCCESS,
    data,
    totalCount
});

export const dataHaveError = (bool) => ({
    type: STARSHIPS_HAS_ERROR,
    haveError: bool,
});

export const dataAreLoading = (bool) => ({
    type: STARSHIPS_ARE_LOADING,
    isLoading: bool,
});

export const filterData = (payload) => ({
    type: FILTER_STARSHIPS,
    payload,
});

export const setCurrentPage = (page) => ({
    type: SET_CURRENT_PAGE,
    page
});

export const resetStore = () => ({
    type: RESET_STORE,
})


export function fetchStarshipsData(param) {
    return (dispatch) => {
        const {sortOrder, sortColumn, inputValue, currentPage} = param;
        dispatch(dataAreLoading(true));
        api.getAllStarships(sortOrder, `fields.${sortColumn}`, inputValue, currentPage, pageSize)
            .then((response) => dispatch(fetchDataSuccess(response.data, response.totalCount)))
            .catch(() => dispatch(dataHaveError(true)));
    };
}
