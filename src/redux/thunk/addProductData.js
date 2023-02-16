import { addProduct } from "../actions/productAction";

const addProductData = (product) => {
    console.log(product);
    return async (dispatch, getState) => {
        const res = await fetch("http://localhost:5000/product", {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                "content-type": "application/json",
            },
        });
        const data = await res.json();
        console.log(data);
        if (data.acknowledged) {
            dispatch(addProduct({ _id: data.insertedId, ...product }));
        }
    };
};
export default addProductData;
