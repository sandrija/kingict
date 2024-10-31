import URI from 'urijs';
import axiosInstance from './axiosInstance';
import { config } from '../constants/config';

const endpointProducts = URI(config.server).path(config.endpoints.products).valueOf();

const ProductsApi = {
    getProducts: (params) => axiosInstance
        .get(endpointProducts, { params: { ...params } } ),
};

export default ProductsApi;
