const API = {
    categories: "https://www.themealdb.com/api/json/v1/1/list.php?c=list",
    allProducts: "https://fakestoreapi.com/products",
    byCategory: "https://fakestoreapi.com/products/category/",
}

const getAllProducts = async() =>{
    const res = await fetch(API.allProducts);
    const data = await res.json();
    return data;
}

const getAllMealsByCategories = async() =>{
    const res = await fetch(API.categories);
    const data = await res.json();
    return data;
}
const getMealByCategory = async (category: any) => {
    const res = await fetch(`${API.byCategory}${category}`);
    const data = await res.json();
    return data;
}
export {getAllProducts, getAllMealsByCategories, getMealByCategory};
export default API;