export function getTotalNumberOfPages(totalResults, itemsPerPage) {
    return totalResults % itemsPerPage ?
        Math.floor(totalResults / itemsPerPage) :
        Math.floor(totalResults / itemsPerPage) - 1;
}

function getStartParamForFirstPage(rowCount) {
    return rowCount > 0 ?
        1 : 0;
}

export function gridInfoParams(page, rowsPerPage, rowCount) {
    const isFirstPage = page === 0;

    const start = isFirstPage ?
        getStartParamForFirstPage(rowCount) :
        page * rowsPerPage + 1;

    const end = isFirstPage ?
        rowCount :
        (page * rowsPerPage) + rowCount;

    return { start, end };
}

export function sliceDisplayData(page, itemsPerPage, newFilterCount, totalPages, gridData) {
    const sliceStart = itemsPerPage * page;
    let sliceEnd;

    if (page === 0) {
        sliceEnd = (itemsPerPage > newFilterCount) ? newFilterCount : itemsPerPage;
        return gridData.slice(sliceStart, sliceEnd);
    }

    if (page === totalPages) {
        sliceEnd = newFilterCount;
        return gridData.slice(sliceStart, sliceEnd);
    }

    sliceEnd = (itemsPerPage * page) + itemsPerPage;
    return gridData.slice(sliceStart, sliceEnd);
}

export function getDisplayData(cardProps, currentData, searchText, currentPaginationPage, itemsPerPage, cardsSearch, activeSort, totalResults, resetPage = true) {
    let page = currentPaginationPage;
    let filterCount = totalResults;
    let displayData = currentData;



    const newFilterCount = (totalResults !== filterCount) ? filterCount : totalResults;
    const totalNumberOfPages = getTotalNumberOfPages(newFilterCount, itemsPerPage);

    displayData = sliceDisplayData(page, itemsPerPage, newFilterCount, totalNumberOfPages, displayData);

    return { displayData, filterCount, page, totalNumberOfPages };
}
