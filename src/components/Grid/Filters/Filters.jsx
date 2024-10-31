import React from 'react';
import Box from '@mui/material/Box';
import SortComponent from "./SortComponent";

const Filters = ({
    options,
    toggleSort,
    sortValue,
}) => {
    const isSortingEnabled = options.enableSorting &&  options.sortOptions.length > 0;

    return (
        <Box>
            {isSortingEnabled && (
                <SortComponent
                    sortValue={sortValue}
                    sortOptions={options.sortOptions}
                    toggleSort={toggleSort}
                />
            )}
        </Box>
    )
}
export default Filters;
