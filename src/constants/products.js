export const productGridPropNames = {
    title: 'title',
    thumbnail: 'thumbnail',
    price: 'price',
    description: 'description',
};

export const productsGridSortOptions = [
    {
        label: 'Cijena: od najviše do najniže',
        field: 'price',
        sortDirection: 'desc',
        numeric: true,
    },
    {
        label: 'Cijena: od najniže do najviše',
        field: 'price',
        sortDirection: 'asc',
        numeric: true,
    },
    {
        label: 'Naziv: A do Z',
        field: 'title',
        sortDirection: 'asc',
    },
    {
        label: 'Naziv: Z do A',
        field: 'title',
        sortDirection: 'desc',
    },
];
