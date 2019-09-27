
const getProducts = () => {
    fetch('/api/products')
    .then (res => res.json())
    .then (data => {
        return { filteredProducts: data }
    });
};

export default getProducts;