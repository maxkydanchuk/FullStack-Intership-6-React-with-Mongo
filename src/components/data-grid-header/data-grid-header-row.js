
import React from "react";
import { Box } from "@chakra-ui/react";
import { ArrowUpIcon, ArrowDownIcon, ArrowUpDownIcon } from "@chakra-ui/icons";

function getArrows(order) {
    if (order === 'asc') {
      return <ArrowUpIcon />;
    }
    if (order === "desc") {
      return <ArrowDownIcon />;
    }
  }

  
const DataGridHeaderRow = ({props}) => {

    const { buttons, sortOrder, onSortChange,sortColumn } = props;

    const newOrder = sortOrder === "asc" ? "desc" : "asc";

    return (
        buttons.map(({ name, label }) => {

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
          })
    )
}

export default DataGridHeaderRow;