import {useDispatch, useSelector} from "react-redux";
import {React, useEffect} from "react";
import {fetchPeopleData} from "../../redux/people/peopleActions";
import PeopleDataGrid from "../../components/people-data-grid";


const PeoplePage = ({onSortChange, sortOrder, setOrder, sortColumn, onSearchChange, inputValue, dispatchSetCurrentPage}) => {

    const dispatch = useDispatch();

    const peopleStore = useSelector((state) => ({
        peopleData: state.people.data,
        peopleError: state.people.error,
        peopleLoading: state.people.loading,
        peopleCurrentPage: state.people.currentPage,
        peopleTotalPageCount: state.people.totalCount,
    }));

    let { peopleData = [], peopleError, peopleLoading, peopleCurrentPage, peopleTotalPageCount } = peopleStore;


    useEffect(() => {
        dispatch(
            fetchPeopleData({ sortOrder, sortColumn, inputValue, currentPage: peopleCurrentPage }, peopleData)
        );
    }, [sortOrder, sortColumn, inputValue, peopleData.length, peopleCurrentPage]);

    return (
        <PeopleDataGrid peopleData={peopleData} error={peopleError}
                        onSortChange={onSortChange}
                        sortOrder={sortOrder}
                        setOrder={() => setOrder}
                        sortColumn={sortColumn}
                        onSearchChange={onSearchChange}
                        inputValue={inputValue}
                        currentPage={peopleCurrentPage}
                        totalPageCount={peopleTotalPageCount}
                        dispatchSetCurrentPage={dispatchSetCurrentPage}
        />
    )
}

export default PeoplePage;