import React from "react";
import { Flex } from "@chakra-ui/react";
import ErrorIndicator from "../error-indicator";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import StarshipsPageItem from "./startships-data-grid-item";
import BottomButtons from "../bottom-buttons/bottom-buttons";

const StarshipsDataGrid = ({
  starshipsData,
  error,
  onSortChange,
  sortOrder,
  sortColumn,
  currentPage,
  totalPageCount,
  dispatchSetCurrentPage,
  onSearchChange,
  inputValue,
}) => {
  const buttons = [
    { name: "starship_class", label: "Starship class" },
    { name: "MGLT", label: "MGLT" },
    { name: "hyperdrive_rating", label: "Hyperdrive rating" },
    { name: "pilots", label: "Pilots" },
  ];

  if (error) {
    return <ErrorIndicator />;
  }
  const elements = starshipsData.map((item) => {
    const { _id, ...itemProps } = item;
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
        <StarshipsPageItem {...itemProps} />
      </Flex>
    );
  });
  return (
    <>
      <SearchPanel onSearchChange={onSearchChange} inputValue={inputValue} />
      <AppHeader
        onSortChange={onSortChange}
        sortOrder={sortOrder}
        sortColumn={sortColumn}
        buttons={buttons}
      />
      <Flex className="table__row_wrapper" direction="column">
        {" "}
        {elements}{" "}
      </Flex>
      <BottomButtons
        currentPage={currentPage}
        totalPageCount={totalPageCount}
        dispatchSetCurrentPage={dispatchSetCurrentPage}
      />
    </>
  );
};

export default StarshipsDataGrid;
