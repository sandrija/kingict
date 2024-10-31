import React from 'react';
import Box from '@mui/material/Box';
import SortComponent from './SortComponent';
import FilterComponent from './FilterComponent';

const Filters = ({
    options,
    toggleSort,
    sortValue,
    onApplyFilter,
}) => {
    const isSortingEnabled = options.enableSorting && options.sortOptions.length > 0;
    const isFilteringEnabled = options.enableFiltering && options.filterOptions.length > 0;

    return (
        <Box>
            {isSortingEnabled && (
                <SortComponent
                    sortValue={sortValue}
                    sortOptions={options.sortOptions}
                    toggleSort={toggleSort}
                />
            )}
            {
                isFilteringEnabled && (
                    <FilterComponent
                        onApplyFilter={onApplyFilter}
                        filterList={options.filterOptions}
                        filtersState={{}}
                    />
                )
            }
        </Box>
    )
}
export default Filters;
