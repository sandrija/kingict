import URI from 'urijs';
import URITemplate from 'urijs/src/URITemplate';
import axiosInstance from './axiosInstance';
import { config } from '../constants/config';

const endpointGetMyCart = (id) => URI(config.server)
    .path(URITemplate(config.endpoints.cartMe).expand({
        id,
    }))
    .valueOf();

const CartApi = {
    getMyCart: (userId) => axiosInstance
        .get(endpointGetMyCart(userId)),
};

export default CartApi;
