import { React, useState, useEffect } from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import StarWarsDataGrid from "../sw-data-grid";
import Spinner from '../spinner/index'
import { useSelector, useDispatch } from "react-redux";
import { fetchData, sortAndSearchData } from "../../store/actions";

function App() {
  const reduxStore = useSelector((state) => ({
    reduxData: state.data,
    error: state.error,
    loading: state.loading
  }));
  
  const pages = [1,2,3,4,5];
  const [inputValue, setSearchValue] = useState("");
  const [sortOrder, setOrder] = useState(null);
  const [sortColumn, setSortColumn] = useState(null);

  const dispatch = useDispatch();

  let { reduxData = [], error, loading } = reduxStore;

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
        <div className="pages">
          {pages.map((page, index) => <span key={index} className="page">{page}</span>)}
        </div>
      </Box>
    </ChakraProvider>
  );
}

export default App;
