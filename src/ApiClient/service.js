export async function getDataWithSequentialCalls(fetchAction, entityName, fetchArguments, total = null) {
    const limit = fetchArguments.limit;
    const skip = fetchArguments.skip;

    if (total !== null && total <= fetchArguments.skip)
        return {
            [entityName]: [],
            total,
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

    const newTotalResults = entityResponse.total ?? total;

    const nextEntity = await getDataWithSequentialCalls(fetchAction, entityName, {
        ...entityQuery,
        skip: skip + limit,
    }, newTotalResults);
    return {
        [entityName]: entityArray.concat(nextEntity[entityName]),
        total,
        skip,
        limit,
    };
}
