import { React, useEffect } from "react";
import { fetchStarshipsData, resetStore } from "../../redux/starships/starshipsActions";
import { useDispatch, useSelector } from "react-redux";
import StarshipsDataGrid from "../../components/starships-data-grid";


const StarshipsPage = ({
  onSortChange,
  sortOrder,
  setOrder,
  sortColumn,
  onSearchChange,
  inputValue,
  dispatchSetCurrentPage,
}) => {
  const dispatch = useDispatch();

  const starshipsStore = useSelector((state) => ({
    starshipsData: state.starships.data,
    starshipsError: state.starships.error,
    starshipsLoading: state.starships.loading,
    starshipsCurrentPage: state.starships.currentPage,
    starshipsTotalPageCount: state.starships.totalCount,
  }));
  let {
    starshipsData = [],
    starshipsCurrentPage,
    starshipsTotalPageCount,
  } = starshipsStore;

  useEffect(() => {
    dispatch(
      fetchStarshipsData(
        {sortOrder,sortColumn, inputValue,currentPage: starshipsCurrentPage,}, starshipsData
      )
    );
  }, [ sortOrder, sortColumn, inputValue, starshipsData.length, starshipsCurrentPage]);

  useEffect(() => {
    dispatch(resetStore())
  }, [])

  return (
    <StarshipsDataGrid
      starshipsData={starshipsData}
      onSortChange={onSortChange}
      sortOrder={sortOrder}
      setOrder={() => setOrder}
      sortColumn={sortColumn}
      onSearchChange={onSearchChange}
      inputValue={inputValue}
      currentPage={starshipsCurrentPage}
      totalPageCount={starshipsTotalPageCount}
      dispatchSetCurrentPage={dispatchSetCurrentPage}
    />
  );
};

export default StarshipsPage;
