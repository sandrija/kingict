import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { FirstPage, ChevronLeft, ChevronRight, LastPage } from '@mui/icons-material';
import { paginationButtonNames } from '../../../../constants/pagination';

const paginationButtonSxStyle = {
    background: 'transparent',
    height: '35px',
    minWidth: '35px',
    width: '35px',
};

const GridPagination = ({
    page,
    changePage,
    totalNumberOfPages,
}) => {
    const isLastAndNextPageDisabled = page === totalNumberOfPages;

    function handleChangePage(paginationButton) {
        switch (paginationButton) {
            case paginationButtonNames.firstPage:
                changePage(0);
                break;
            case paginationButtonNames.previousPage:
                changePage(page - 1);
                break;
            case paginationButtonNames.nextPage:
                changePage(page + 1);
                break;
            case paginationButtonNames.lastPage:
                changePage(totalNumberOfPages);
                break;
            default:
                break;
        }
    }

    return (
        <Box
            sx={{
                display: 'block',
                flexShrink: '0',
                marginLeft: '20px',
                marginRight: '80px',
            }}
        >
            <IconButton
                sx={paginationButtonSxStyle}
                onClick={() => handleChangePage(paginationButtonNames.firstPage)}
                disabled={page === 0}
                title="Prva stranica"
                size="large"
            >
                <FirstPage fontSize="large" />
            </IconButton>
            <IconButton
                sx={paginationButtonSxStyle}
                onClick={() => handleChangePage(paginationButtonNames.previousPage)}
                disabled={page === 0}
                title="Prethodna stranica"
                size="large"
            >
                <ChevronLeft fontSize="large" />
            </IconButton>
            <IconButton
                sx={paginationButtonSxStyle}
                onClick={() => handleChangePage(paginationButtonNames.nextPage)}
                disabled={isLastAndNextPageDisabled}
                title="Sljedeća stranica"
                size="large"
            >
                <ChevronRight fontSize="large" />
            </IconButton>
            <IconButton
                sx={paginationButtonSxStyle}
                onClick={() => handleChangePage(paginationButtonNames.lastPage)}
                disabled={isLastAndNextPageDisabled}
                title="Zadnja stranica"
                size="large"
            >
                <LastPage fontSize="large" />
            </IconButton>
        </Box>
    );
}

export default GridPagination;
