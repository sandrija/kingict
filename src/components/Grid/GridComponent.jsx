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
    const [gridData, setGridData] = useState([]);

    // const displayData = useMemo(() => getDisplayData(), [page]);
    // const displayData = data;

    useEffect(() => {
        if (!loading) {
            const { displayData } = getDisplayData(cardItemProps, data, '', page, itemsPerPage, '', null, totalResults);
            console.log('displayData: ', displayData);
            setIsLoading(false);
            setGridData(displayData);
        }
    } , [loading]);

    const changePage = (newPage) => {
        setIsLoading(true);
        const { displayData } = getDisplayData(cardItemProps, data, '', newPage, itemsPerPage, '', null, totalResults);
        console.log('displayData changePage: ', displayData);
        setGridData(displayData);
        setPage(newPage);
        setIsLoading(false);
    };


    return (
        <Box>
            { isLoading && (<MaterialLoader />) }
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                sx={{
                    marginTop: '24px!important',
                    justifyContent: 'center',
                }}
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
                {
                    !isLoading && (
                        <GridFooter
                            page={page}
                            itemsCount={totalResults}
                            totalResults={totalResults}
                            filterCount={filterCount}
                            itemsPerPage={itemsPerPage}
                            changePage={changePage}
                            loading={isLoading}
                        />
                    )
                }
            </Grid>
        </Box>
    );
}

export default GridComponent;
