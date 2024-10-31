export async function getDataWithSequentialCalls(fetchAction, entityName, fetchArguments, totalResults = 0) {
    const limit = fetchArguments.limit;
    const skip = fetchArguments.skip;

    if (totalResults != 0 && totalResults <= fetchArguments.skip)
        return {
            [entityName]: [],
            total: totalResults,
            skip,
            limit,
        };

    const entityQuery = {
        ...fetchArguments,
        limit,
        skip,
    };

    const entityResponse = (await fetchAction(entityQuery)).data;
    const entityArray = entityResponse[entityName];

    const newTotalResults = entityResponse.total ?? totalResults;

    const nextEntity = await getDataWithSequentialCalls(fetchAction, entityName, {
        ...entityQuery,
        skip: skip + limit,
    }, newTotalResults);
    return {
        [entityName]: entityArray.concat(nextEntity[entityName]),
        total: newTotalResults,
        skip,
        limit,
    };
}
