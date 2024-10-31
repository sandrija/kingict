import React from 'react';
import Box from '@mui/material/Box';
import GridPagination from "./GridPagination";

const Pagination = ({}) => (
    <Box

    >
        <Box
            sx={{
                color: 'inherit',
                outline: 'none',
                verticalAlign: 'middle',
                display: 'block',
            }}
        >
            <GridPagination />
        </Box>
    </Box>
)
export default Pagination;
