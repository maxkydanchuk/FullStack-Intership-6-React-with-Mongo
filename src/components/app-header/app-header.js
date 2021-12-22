import { React } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { ArrowUpIcon, ArrowDownIcon, ArrowUpDownIcon } from "@chakra-ui/icons";

function getArrows(order) {
  if (order === 'asc') {
    return <ArrowUpIcon />;
  }
  if (order === "desc") {
    return <ArrowDownIcon />;
  }
}

const AppHeader = ({ onSortChange, sortOrder, sortColumn }) => {

 const newOrder = sortOrder === "asc" ? "desc" : "asc";

  const buttons = [
    { name: "name", label: "Name" },
    { name: "birth_year", label: "Birth Year" },
    { name: "gender", label: "Gender" },
    { name: "eye_color", label: "Eye Color" },
    { name: "height", label: "Height" },
  ];

  const Boxes = buttons.map(({ name, label }) => {

    function sortedArrows() {
      if (sortColumn === name) {
        return getArrows(newOrder);
      } else {
        return <ArrowUpDownIcon />;
      }
    }
    return (
      <Box
        key={name}
        className="table__header_year"
        onClick={() => onSortChange(name, newOrder)}
        flex="2"
        cursor="pointer"
        _hover={{
          background: "white",
          color: "teal.500",
        }}
      >
        {label} {sortedArrows()}
      </Box>
    );
  });

  return (
    <Flex
      className="table__header"
      align="center"
      borderBottom="1px solid rgba(224, 224, 224, 1)"
      fontWeight="bold"
      textAlign={"center"}
      h="20"
    >
      {Boxes}
    </Flex>
  );
};

export default AppHeader;
