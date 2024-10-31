import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Layout from '../Layout/Layout';
import { useProducts } from '../hooks/useProducts';
import ProductCard from "./ProductCard";

function ProductsGrid() {
   const { allProducts, filteredProducts } = useProducts();
    console.log('filteredProducts: ', filteredProducts);
    return (
        <Layout>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    filteredProducts.map((productItem) => (
                        <ProductCard key={productItem.id} product={productItem} />
                    ))
                }
            </Grid>
        </Layout>
    )
}

export default ProductsGrid;
