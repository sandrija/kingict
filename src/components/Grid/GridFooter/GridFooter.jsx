import React from 'react';
import Box from '@mui/material/Box';
import GridPagination from './Pagination/GridPagination';
import GridInfo from './GridInfo/GridInfo';

const GridFooter = ({
    page,
    itemsCount,
    totalResults,
    filterCount,
    itemsPerPage,
    changePage,
    totalNumberOfPages,
}) => (
    <Box
        sx={{
            marginTop: '25px',
        }}
    >
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'end',
            }}
        >
            <GridInfo
                page={page}
                itemsPerPage={itemsPerPage}
                totalResults={totalResults}
                filterCount={filterCount}
                itemsCount={itemsCount}
            />
            <GridPagination
                page={page}
                changePage={changePage}
                totalNumberOfPages={totalNumberOfPages}
            />
        </Box>
    </Box>
);

export default GridFooter;
