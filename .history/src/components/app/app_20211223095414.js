import { React, useState, useEffect } from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import StarWarsDataGrid from "../people-data-grid";
import Spinner from '../spinner/index'
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../store/actions";


function App() {
  const reduxStore = useSelector((state) => ({
    reduxData: state.data,
    error: state.error,
    loading: state.loading,
    currentPage: state.currentPage,
    totalPageCount: state.totalCount
  }));
  
  const pageCount = Math.ceil(totalCount, 10)
  console.log(pageCount)
  const [inputValue, setSearchValue] = useState("");
  const [sortOrder, setOrder] = useState(null);
  const [sortColumn, setSortColumn] = useState(null);

  const dispatch = useDispatch();

  let { reduxData = [], error, loading, currentPage, totalPageCount } = reduxStore;

  useEffect(() => {
    dispatch(fetchData({ sortOrder, sortColumn, inputValue }, reduxData));
  }, [sortOrder, sortColumn, inputValue, reduxData.length]);


  const onSortChange = (newSortColumn, newSortOrder) => {
    if (sortColumn === newSortColumn) {
      setOrder(newSortOrder);
    } else {
      setOrder('asc');
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
        borderBottom='none'
        borderRadius="4"

      >
        <SearchPanel onSearchChange={onSearchChange} inputValue={inputValue} />
        <AppHeader
          onSortChange={onSortChange}
          sortOrder={sortOrder}
          setOrder={() => setOrder}
          sortColumn={sortColumn}
        />
        {loading ? <Spinner/> : <StarWarsDataGrid prizesData={reduxData} error={error}/>}
      </Box>
    </ChakraProvider>
  );
}

export default App;
