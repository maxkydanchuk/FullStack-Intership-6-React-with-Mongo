import { React } from "react";
import { Flex } from "@chakra-ui/react";
import AppHeaderRow from "./app-header-row";

const AppHeader = ({ onSortChange, sortOrder, sortColumn , buttons}) => {

  return (
    <Flex
      className="table__header"
      align="center"
      borderBottom="1px solid rgba(224, 224, 224, 1)"
      fontWeight="bold"
      textAlign={"center"}
      h="20"
    >
      <AppHeaderRow
      onSortChange={onSortChange}
      sortOrder={sortOrder}
      sortColumn={sortColumn}
      buttons={buttons}
      />
    </Flex>
  );
};

export default AppHeader;
