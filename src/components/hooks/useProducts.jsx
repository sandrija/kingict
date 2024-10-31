import React, { useEffect, useState } from 'react';
import {getDataWithSequentialCalls} from "../../ApiClient/service";
import ProductsApi from "../../ApiClient/ProductsApi";

/**
 * custom hook useProducts
 * @param {Array.<Object>} sortModel
 * @param {Object} paginationModel
 * @returns {{saveCompany: ((function(*, *, *): Promise<void>)|*), refreshCompanies: (function(): void), companies: *[], rowCount: number, loading: boolean}}
 */
export const useProducts = () => {
    const [loading, setLoading] = useState(true);
    const [allProducts, setAllProducts] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const productsQuery = {
        select: 'id,title,description,thumbnail,price',
        skip: 0,
        limit: 20,
    };

    useEffect(() => {
        (async () => {
            try {
                const {
                    total,
                    products
                } = await getDataWithSequentialCalls(ProductsApi.getProducts, "products", productsQuery, totalResults);
                setTotalResults(total);
                setAllProducts(products);
                setFilteredProducts(products);
            } catch (e) {
                console.log('error fetching products: ', e);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return {
        loading,
        allProducts,
        filteredProducts,
        totalResults,
    };
};
