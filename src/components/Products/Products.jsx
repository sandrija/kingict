import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Layout from '../Layout/Layout';
import { useProducts } from '../hooks/useProducts';
// import ProductCard from "./ProductCard";
import GridComponent from '../Grid/GridComponent';
import { productGridPropNames } from '../../constants/products';

function Products() {
   const { allProducts, totalResults, loading } = useProducts();
    return (
        <Layout>
            <GridComponent
                data={allProducts}
                cardItemProps={productGridPropNames}
                totalResults={totalResults}
                loading={loading}
            />
        </Layout>
    )
}

export default Products;