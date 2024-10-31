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

export const productsGridFilterOptions = (categoryList) => [
    {
        id: 'priceRange',
        componentType: 'dropdown',
        clause: 'between',
        field: 'price',
        label: 'Filtriraj po cijeni',
        dropDownOptions: [
            {
                start : 10,
                end: 50,
            },
            {
                start : 50,
                end: 100,
            },
            {
                start : 100,
                end: 500,
            },
            {
                start : 1000,
                end: 5000,
            },
            {
                start : 5000,
                end: 10000,
            },
        ],
        formatValueOption: (range) => (`${range.start}-${range.end}`),
        formatTextOption: (range) => (`od ${range.start} do ${range.end}`),
    },
    // {
    //     id: 'categorySelector',
    //     componentType: 'dropdown',
    //     label: 'Filtriraj po kategoriji',
    //     clause: 'eq', // equals
    //     field: 'category',
    //     dropDownOptions: categoryList,
    //     formatTextOption: (category) => category.name,
    //     formatValueOption: (category) => category.slug,
    // },
    {
        id: 'titleSearch',
        label: 'Filtriraj po nazivu proizvoda',
        componentType: 'input',
        clause: 'includes',
        field: 'title',
    },
];
