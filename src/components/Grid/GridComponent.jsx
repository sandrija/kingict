import React, { useEffect, useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { getDisplayData } from './gridService';
import { config } from '../../constants/config';
import GridCard from './GridCard/GridCard';
import MaterialLoader from '../Layout/MaterialLoader';
import GridFooter from './GridFooter/GridFooter';
import Filters from "./Filters/Filters";

const GridComponent = ({
    loading,
    data,
    cardItemProps,
    totalResults,
    itemsPerPage = config.defaultPaginationLimit,
    cardId = 'id',
    options,
}) => {
    const [isLoading, setIsLoading] = useState(loading);
    const [page, setPage] = useState(0);
    const [filterCount, setFilterCount] = useState(0);
    const [sortValue, setSortValue] = useState('');
    const [totalNumberOfPages, setTotalNumberOfPages] = useState(0);
    const [gridData, setGridData] = useState([]);

    const [filtersState, setFiltersState] = useState(options?.filterOptions?.reduce(
        (previousObject, filter) => ({
            ...previousObject,
            [filter.id]: {
                value: '',
                clause: filter.clause,
                field: filter.field,
                filterType: filter.filterType,
            }
        }),
        {}) || {});
    console.log('filtersState: ', filtersState);

    useEffect(() => {
        if (!loading) {
            const { displayData, filterCount, totalNumberOfPages } = getDisplayData(cardItemProps, data, '', page, itemsPerPage, {}, null, totalResults);
            setIsLoading(false);
            setGridData(displayData);
            setFilterCount(filterCount);
            setTotalNumberOfPages(totalNumberOfPages);
        }
    } , [loading]);

    const changePage = (newPage) => {
        setIsLoading(true);
        const { displayData } = getDisplayData(cardItemProps, data, '', newPage, itemsPerPage, filtersState, sortValue, totalResults);
        setGridData(displayData);
        setFilterCount(filterCount);
        setTotalNumberOfPages(totalNumberOfPages);
        setPage(newPage);
        setIsLoading(false);
    };

    const toggleSort = (newSortValue) => {
        setIsLoading(true);
        const { displayData } = getDisplayData(cardItemProps, data, '', 0, itemsPerPage, filtersState, newSortValue, totalResults);
        setGridData(displayData);
        setFilterCount(filterCount);
        setSortValue(newSortValue);
        setPage(0);
        setIsLoading(false);
    }

    const onApplyFilter = (filterId, newFilterValue) => {
        setIsLoading(true);
        const newFiltersState = {
            ...filtersState,
            [filterId]: {
                ...filtersState[filterId],
                value: newFilterValue,
            }
        };

        const { displayData } = getDisplayData(cardItemProps, data, '', 0, itemsPerPage, newFiltersState, sortValue, totalResults);
        setGridData(displayData);
        setFilterCount(filterCount);
        setFiltersState(newFiltersState);
        setPage(0);
        setIsLoading(false);
        console.log('onApplyFilter => filterId: ', filterId);
        console.log('onApplyFilter => newFilterValue: ', newFilterValue);
    }


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
            <Filters
                options={options}
                toggleSort={toggleSort}
                sortValue={sortValue}
                onApplyFilter={onApplyFilter}
                filtersState={filtersState}
            />
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
