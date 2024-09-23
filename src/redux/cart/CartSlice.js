import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../src/apiconfig/axiosconfig'; // Adjust the path if needed

// Thunk for fetching the cart
export const getCart = createAsyncThunk('cart/getCart', async (_, { rejectWithValue }) => {
  try {
    const { data } = await api.get('/api/cart/');
    console.log("data from the cart:", data.cart); // Log the entire cart data
    return data.cart.cart;  // Return the nested cart object
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Thunk for adding an item to the cart
export const addItemToCart = createAsyncThunk('cart/addItemToCart', async (reqData, { rejectWithValue }) => {
  try {
    const { data } = await api.put('/api/cart/add', reqData);
    console.log("add item to cart", data);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Thunk for removing an item from the cart
export const removeCartItem = createAsyncThunk('cart/removeCartItem', async (cartItemId, { rejectWithValue }) => {
  try {
    const { data } = await api.delete(`/api/cart_items/${cartItemId}`);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Thunk for updating a cart item
export const updateCartItem = createAsyncThunk('cart/updateCartItem', async (reqData, { rejectWithValue }) => {
  try {
    const { data } = await api.put(`/api/cart_items/${reqData.cartItemId}`, reqData.data);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Initial state
const initialState = {
  cartItems: [],
  totalprice: 0,
  totalDiscountprice: 0,
  discount: 0,
  totalItem: 0,
  error: null,
  loading: false,
};

// Slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // You can add synchronous actions here if needed
  },
  extraReducers: (builder) => {
    builder
      // Handle getCart
      .addCase(getCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        console.log('data scussesfully fetched :', action.payload); // Log the payload
        state.loading = false;
        state.cartItems = action.payload.cartItems || [];
        state.totalprice = action.payload.totalprice || 0;
        state.totalDiscountprice = action.payload.totalDiscountprice || 0;
        state.discount = action.payload.discount || 0;
        state.totalItem = action.payload.totalItem || 0;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handle addItemToCart
      .addCase(addItemToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addItemToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload.cartItems || state.cartItems;
      })
      .addCase(addItemToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handle removeCartItem
      .addCase(removeCartItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeCartItem.fulfilled, (state, action) => {
        
        state.loading = false;
        state.cartItems = state.cartItems.filter(item => item._id !== action.meta.arg);})
      .addCase(removeCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handle updateCartItem
      .addCase(updateCartItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        state.loading = false;
        const updatedItem = action.payload;
        const index = state.cartItems.findIndex(item => item._id === updatedItem._id);
        if (index !== -1) {
          state.cartItems[index] =  updatedItem;
        }
      })
      .addCase(updateCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export the reducer to be used in the store
export default cartSlice.reducer;
