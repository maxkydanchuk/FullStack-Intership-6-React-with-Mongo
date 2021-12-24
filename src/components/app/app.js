import { React, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { ChakraProvider, Box } from "@chakra-ui/react";
import MainPage from "../main-page";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/people/peopleActions";

import StarshipsPage from "../../pages/starships-page";
import PeoplePage from "../../pages/people-page";

function App() {
  const [inputValue, setSearchValue] = useState("");
  const [sortOrder, setOrder] = useState(null);
  const [sortColumn, setSortColumn] = useState(null);
  const dispatch = useDispatch();

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

  const dispatchSetCurrentPage = (page) => {
    dispatch(setCurrentPage(page));
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
          <NavLink to="/" exact="true">
            <Box mt={10}> Home</Box>
          </NavLink>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route
              path="/people"
              element={
                <PeoplePage
                  onSortChange={onSortChange}
                  sortOrder={sortOrder}
                  setOrder={() => setOrder}
                  sortColumn={sortColumn}
                  onSearchChange={onSearchChange}
                  inputValue={inputValue}
                  dispatchSetCurrentPage={dispatchSetCurrentPage}
                />
              }
            />
            <Route
              path="/startships"
              element={
                <StarshipsPage
                  onSortChange={onSortChange}
                  sortOrder={sortOrder}
                  setOrder={() => setOrder}
                  sortColumn={sortColumn}
                  onSearchChange={onSearchChange}
                  inputValue={inputValue}
                  dispatchSetCurrentPage={dispatchSetCurrentPage}
                />
              }
            />
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
