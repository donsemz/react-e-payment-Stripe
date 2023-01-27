const productsArray = [
    {
        id: "price_1Lz2VwB7xSl0hlRQTpFLo4qR",
        title: "Coffee",
        price: 4.99
    },
    {
        id: "price_1Lz2XkB7xSl0hlRQcYmok7RG",
        title: "Sunglasses",
        price: 9.99
    },
    {
        id: "price_1Lz2ZeB7xSl0hlRQKGbGxK7r",
        title: "Camera",
        price: 39.99
    }
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };