import { 
    FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCES, FIND_PRODUCTS_FAILURE, 
    FIND_PRODUCT_BY_ID_REQUEST,
    FIND_PRODUCT_BY_ID_FAILURE,
    FIND_PRODUCT_BY_ID_SUCCES,
    CREATE_PRODUCTS_REQUEST,
    CREATE_PRODUCTS_SUCCES,
    CREATE_PRODUCTS_FAILURE,
    DELETE_PRODUCTS_REQUEST,
    DELETE_PRODUCTS_SUCCES,
    DELETE_PRODUCTS_FAILURE
} from "./ActionType";
import { api } from "../../apiconfig/axiosconfig";

// Fetch products with filters
export const findproducts = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCTS_REQUEST });
    console.log("Dispatching FIND_PRODUCTS_REQUEST", reqData);

    try {
        const { data } = await api.get(`/api/products`, {
            params: {
                category: reqData.Category || '',
                color: reqData.colors || '',
                sizes: reqData.sizes || '',
                minprice: reqData.minprice || 0,
                maxprice: reqData.maxprice || Infinity,
                mindiscount: reqData.minDiscount || 0,
                stock: reqData.stock || '',
                sort: reqData.sort || 'price_low',
                pageNumber: reqData.pageNumber || 1,
                pageSize: reqData.pageSize || 10
            }
        });

        dispatch({ type: FIND_PRODUCTS_SUCCES, payload: data });
    } catch (error) {
        console.log("API Error:", error.message);
        dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
    }
};


// Fetch a product by ID
export const findproductsById = (productId) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });

    try {
        const { data } = await api.get(`/api/products/id/${productId}`);
        console.log("data",data)
        dispatch({ type: FIND_PRODUCT_BY_ID_SUCCES, payload: data });
    } catch (error) {
        dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
    }
};
export const createproducts=(product)=>async(dispatch)=>{
    try {
        dispatch({type:CREATE_PRODUCTS_REQUEST})
        const {data}=await api.post(`/api/admin/product`,product)
        console.log("product created",data)
        dispatch({type:CREATE_PRODUCTS_SUCCES,
            payload:data
        })
    } catch (error) {
        dispatch({type:CREATE_PRODUCTS_FAILURE,payload:error.message})
    }
}
export const deleteProduct=(productId)=>async(dispatch)=>{
    try {
        dispatch({type:DELETE_PRODUCTS_REQUEST})
        const {data}=await api.delete(`/api/admin/product/${productId}`)
        console.log("dataaaa",data)
        dispatch({type:DELETE_PRODUCTS_SUCCES,
            payload:productId
        })
    } catch (error) {
        dispatch({type:DELETE_PRODUCTS_FAILURE,payload:error.message})
    }
}