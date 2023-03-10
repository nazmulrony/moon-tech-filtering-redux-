import { removeProduct } from "../actions/productAction";

const deleteProduct = (id) => {
    console.log("Function triggered");
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/product/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
            },
        });
        const data = await res.json();
        console.log(data);
        if (data.acknowledged) {
            dispatch(removeProduct(id));
        }
    };
};

export default deleteProduct;
