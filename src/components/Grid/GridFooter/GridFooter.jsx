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
            color: 'inherit',
            outline: 'none',
            verticalAlign: 'middle',
            display: 'block',
        }}
    >
        <Box
            sx={{
                verticalAlign: 'inherit',
                padding: '0px 15px 0px 15px',
                width: '100%',
                display: 'block',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    position: 'relative',
                    alignItems: 'center',
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
    </Box>
);

export default GridFooter;
