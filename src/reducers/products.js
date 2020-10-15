var initialState = [
    {
        id : 1,
        name : 'IP 6PLUS',
        image : 'https://www.didongmy.com/vnt_upload/product/07_2020/thumbs/(600x600)_iphone_11_mau_den_2_1.jpg',
        desciption : 'Product by apple',
        price : 500,
        inventory : 10,
        rating : 4
    },
    {
        id : 2,
        name : 'IP 7PLUS',
        image : 'https://didongviet.vn/pub/media/catalog/product/i/p/iphone-11-64gb-chinh-hang_1.jpg',
        desciption : 'Product by apple',
        price : 400,
        inventory : 15,
        rating : 3
    },
    {
        id : 3,
        name : 'IP 8PLUS',
        image : 'https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-red-600x600.jpg',
        desciption : 'Product by apple',
        price : 300,
        inventory : 5,
        rating  : 5
    }
];

const products = (state = initialState , action ) => {
    switch (action.type){
        default : return [...state];
    }
}

export default products;