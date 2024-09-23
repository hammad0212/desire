import { DELETE_PRODUCTS_SUCCES, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCES, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCES } from "./ActionType";

const initialState = {
    products: [],
    product: null,
    loading: false,
    error: null
    
};

export const customerproductReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_PRODUCTS_REQUEST:
        case FIND_PRODUCT_BY_ID_REQUEST:
            return { ...state, loading: true, error: null };

        case FIND_PRODUCTS_SUCCES:
            console.log("Reducer - Products Success:", action.payload);
            return { ...state, loading: false, products: action.payload.content || [], error: null };

        case FIND_PRODUCT_BY_ID_SUCCES:
            return { ...state, loading: false, product: action.payload, error: null };
        case DELETE_PRODUCTS_SUCCES:
            return{...state,loading:false,error:null,products:state.products.filter((item)=>item.id!==action.payload)}
        case FIND_PRODUCTS_FAILURE:
        case FIND_PRODUCT_BY_ID_FAILURE:
            console.log("Reducer - Error:", action.payload);
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};