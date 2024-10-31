import React, { useEffect, useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { getDisplayData } from './gridService';
import { config } from '../../constants/config';
import GridCard from './GridCard/GridCard';
import MaterialLoader from '../Layout/MaterialLoader';
import GridFooter from './GridFooter/GridFooter';

const GridComponent = ({
    loading,
    data,
    cardItemProps,
    totalResults,
    itemsPerPage = config.defaultPaginationLimit,
    cardId = 'id',
}) => {
    const [isLoading, setIsLoading] = useState(loading);
    const [page, setPage] = useState(0);
    const [filterCount, setFilterCount] = useState(0);
    const [totalNumberOfPages, setTotalNumberOfPages] = useState(0);
    const [gridData, setGridData] = useState([]);

    useEffect(() => {
        if (!loading) {
            const { displayData, filterCount, totalNumberOfPages } = getDisplayData(cardItemProps, data, '', page, itemsPerPage, '', null, totalResults);
            setIsLoading(false);
            setGridData(displayData);
            setFilterCount(filterCount);
            setTotalNumberOfPages(totalNumberOfPages);
        }
    } , [loading]);

    const changePage = (newPage) => {
        setIsLoading(true);
        const { displayData } = getDisplayData(cardItemProps, data, '', newPage, itemsPerPage, '', null, totalResults);
        setGridData(displayData);
        setFilterCount(filterCount);
        setTotalNumberOfPages(totalNumberOfPages);
        setPage(newPage);
        setIsLoading(false);
    };


    return (
        <Box
            sx={{
                maxWidth: '1360px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                margin: '50px auto',
            }}
        >
            { isLoading && (<MaterialLoader />) }
            <Box>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    {
                        gridData.map(item => (
                            <GridCard
                                key={item[cardId]}
                                cardItem={item}
                                cardItemProps={cardItemProps}
                            />
                        ))
                    }
                </Grid>
            </Box>
            {
                !isLoading && (
                    <GridFooter
                        page={page}
                        itemsCount={gridData.length}
                        totalResults={totalResults}
                        filterCount={filterCount}
                        itemsPerPage={itemsPerPage}
                        changePage={changePage}
                        totalNumberOfPages={totalNumberOfPages}
                    />
                )
            }
        </Box>
    );
}

export default GridComponent;
