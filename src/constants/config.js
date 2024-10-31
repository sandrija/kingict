const domain = 'https://dummyjson.com/' || 'http://localhost';

export const config = {
    app: 'frontend',
    defaultPaginationLimit: 20,
    server: domain,
    endpoints: {
        auth: 'auth/login',
        me: 'auth/me',
        refreshToken: 'auth/refresh',
        carts: 'carts',
        cart: 'carts/{id}',
        cartMe: 'carts/user/{id}',
        products: 'products',
        product: 'products/{id}',
        productsCategories: 'products/categories',
        productsCategoriesList: 'products/category-list',
    },
    defaultHeaders: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    tokenExpiresInMins: 30,
};
