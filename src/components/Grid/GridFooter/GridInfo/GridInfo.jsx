import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { gridInfoParams } from '../../gridService';

const gridInfoText = (start, end, totalResults) => `${start} do ${end} od ${totalResults}`;
const gridInfoFilteredText = (start, end, filterCount, totalResults) => `${start} do ${end} od ${filterCount}, (filtrirano od ${totalResults})`;

const GridInfo = ({
    page,
    itemsPerPage,
    totalResults,
    filterCount,
    itemsCount,
}) => {
    const [infoParams, setInfoParams] = useState(gridInfoParams(page, itemsPerPage, itemsCount));
    const isGridFiltered = totalResults !== filterCount;

    useEffect(() => {
        const newInfoParams = gridInfoParams(page, itemsPerPage, itemsCount);
        setInfoParams(newInfoParams);
    }, [page, itemsCount]);

    const getInfoText = () => {
        const { end, start } = infoParams;

        return isGridFiltered ?
            gridInfoFilteredText(start, end, filterCount, totalResults) :
            gridInfoText(start, end, totalResults);
    }

    return (
        <Typography>
            {getInfoText()}
        </Typography>
    );
}
export default GridInfo;
