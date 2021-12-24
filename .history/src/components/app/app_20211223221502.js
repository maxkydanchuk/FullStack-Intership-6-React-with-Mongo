import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { ChakraProvider, Box } from "@chakra-ui/react";
import MainPage from "../main-page";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import StarWarsDataGrid from "../people-data-grid";
import Spinner from "../spinner/index";
import BottomButtons from "../bottom-buttons/bottom-buttons";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../store/actions";
import { createPages } from "../../utils/pageCreator";

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
    dispatch(
      fetchData({ sortOrder, sortColumn, inputValue, currentPage }, reduxData)
    );
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
      <Router>
        <Box
          className="table__wrapper"
          border="1px solid rgba(224, 224, 224, 1)"
          borderBottom="none"
          borderRadius="4"
        >
          <NavLink to="/" exact="true"><Box mt={10}> Home</Box></NavLink>
          <SearchPanel
            onSearchChange={onSearchChange}
            inputValue={inputValue}
          />
          {/* <AppHeader
            onSortChange={onSortChange}
            sortOrder={sortOrder}
            setOrder={() => setOrder}
            sortColumn={sortColumn}
          /> */}
          <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route
              path="/people"
              element={
                <StarWarsDataGrid prizesData={reduxData} error={error}
                onSortChange={onSortChange}
                sortOrder={sortOrder}
                setOrder={() => setOrder}
                sortColumn={sortColumn}
                onSearchChange={onSearchChange}
                inputValue={inputValue} 
                />
              }
            />
          </Routes>
        </Box>
        <BottomButtons
          currentPage={currentPage}
          totalPageCount={totalPageCount}
        />
      </Router>
    </ChakraProvider>
  );
}

export default App;
