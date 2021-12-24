import React from "react";
import { Flex } from "@chakra-ui/react";
import ErrorIndicator from "../error-indicator";
import SwDataGridItem from "../people-data-grid-item";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";



const StarshipsPage = ({ starshipsData, error, onSortChange, sortOrder, sortColumn, onSearchChange, inputValue }) => {
  if(error) {
  return  <ErrorIndicator/>
  }
  const elements = starshipsData.map((item) => {
    const { _id, ...itemProps } = item;
    console.log(itemProps)
    return (
      <Flex
        key={_id}
        className="table__row"
        align="center"
        justify="center"
        textAlign={"center"}
        borderBottom="1px solid rgba(224, 224, 224, 1)"
        color="rgb(49, 47, 47)"
      >
        <SwDataGridItem {...itemProps} />
      </Flex>
    );
  });
  return  (<>
  <AppHeader
      onSortChange={onSortChange}
      sortOrder={sortOrder}
      sortColumn={sortColumn}
      />
  <Flex className="table__row_wrapper" direction="column"> {elements}</Flex>
  </>)
};

export default StarWarsDataGrid;
