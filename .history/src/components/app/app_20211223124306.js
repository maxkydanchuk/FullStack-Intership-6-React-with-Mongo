import { React, useState, useEffect } from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import StarWarsDataGrid from "../sw-data-grid";
import Spinner from "../spinner/index";
import BottomButtons from "../bottom-buttons/bottom-buttons";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, setCurrentPage } from "../../store/actions";
import { createPages } from '../../utils/pageCreator'

function App() {
  const reduxStore = useSelector((state) => ({
    reduxData: state.data,
    error: state.error,
    loading: state.loading,
    currentPage: state.currentPage,
    totalPageCount: state.totalCount,
  }));
  let {
    reduxData = [],
    error,
    loading,
    currentPage,
    totalPageCount,
  } = reduxStore;

  const pages = [];
  const pageCount = Math.ceil(totalPageCount / 5);
  createPages(pages, pageCount, currentPage);

  const [inputValue, setSearchValue] = useState("");
  const [sortOrder, setOrder] = useState(null);
  const [sortColumn, setSortColumn] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData({ sortOrder, sortColumn, inputValue, currentPage }, reduxData));
  }, [sortOrder, sortColumn, inputValue, reduxData.length, currentPage]);

  const onSortChange = (newSortColumn, newSortOrder) => {
    if (sortColumn === newSortColumn) {
      setOrder(newSortOrder);
    } else {
      setOrder("asc");
    }

    setSortColumn(newSortColumn);
  };

  const onSearchChange = (e) => {
    setSearchValue(e.target.value); //rename value
  };

  return (
    <ChakraProvider>
      <Box
        className="table__wrapper"
        border="1px solid rgba(224, 224, 224, 1)"
        borderBottom="none"
        borderRadius="4"
      >
        <SearchPanel onSearchChange={onSearchChange} inputValue={inputValue} />
        <AppHeader
          onSortChange={onSortChange}
          sortOrder={sortOrder}
          setOrder={() => setOrder}
          sortColumn={sortColumn}
        />
        {loading ? (
          <Spinner />
        ) : (
          <StarWarsDataGrid prizesData={reduxData} error={error} />
        )}
      </Box>
      <BottomButtons
      currentPage={currentPage}
      totalPageCount={totalPageCount}
      setCurrentPage={() => setCurrentPage()}
      />

      <div className="pages">{pages.map((page, index) => <span key={index} onClick={() => dispatch(setCurrentPage(page))}>{page}</span>)}</div>
    </ChakraProvider>
  );
}

export default App;
