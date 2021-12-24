import React from "react";
import {Flex} from "@chakra-ui/react";
import ErrorIndicator from "../error-indicator";
import PeopleDataGridItem from "./people-data-grid-item";
import AppHeader from "../app-header";
import BottomButtons from "../bottom-buttons/bottom-buttons";
import SearchPanel from "../search-panel";

const PeopleDataGrid = ({
                            peopleData, error, onSortChange, sortOrder, sortColumn, currentPage,
                          totalPageCount, dispatchSetCurrentPage, onSearchChange, inputValue
                        }) => {

    const buttons = [
        {name: "name", label: "Name"},
        {name: "birth_year", label: "Birth Year"},
        {name: "gender", label: "Gender"},
        {name: "eye_color", label: "Eye Color"},
        {name: "height", label: "Height"},
    ];

    if (error) {
        return <ErrorIndicator/>
    }
    const elements = peopleData.map((item) => {
        const {_id, ...itemProps} = item;

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
                <PeopleDataGridItem {...itemProps} />
            </Flex>
        );
    });
    return (
        <>
            <SearchPanel
                onSearchChange={onSearchChange}
                inputValue={inputValue}
            />
            <AppHeader
                onSortChange={onSortChange}
                sortOrder={sortOrder}
                sortColumn={sortColumn}
                buttons={buttons}
            />
            <Flex className="table__row_wrapper" direction="column"> {elements}</Flex>
            <BottomButtons
                currentPage={currentPage}
                totalPageCount={totalPageCount}
                dispatchSetCurrentPage={dispatchSetCurrentPage}
            />
        </>)
};

export default PeopleDataGrid;
