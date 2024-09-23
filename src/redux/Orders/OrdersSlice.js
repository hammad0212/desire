import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../apiconfig/axiosconfig';
import { adminapi } from '../../admin/componenet/Adminapiconfiq/adminapiconfiq';

// Async thunk for creating an order
export const createOrder = createAsyncThunk(
  'order/createOrder',
  async (reqData, { rejectWithValue }) => {
    try {
      const { data } = await api.post('/api/orders/', reqData.address);
      if (data && data.createdOrder && data.createdOrder._id) {
        reqData.navigate(`/step=3&order_id=${data.createdOrder._id}`);
        return { orderId: data.createdOrder._id, orderData: data };
      }
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

// Async thunk for getting an order by ID
export const getOrderById = createAsyncThunk(
  'order/getOrderById',
  async (orderId, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`/api/orders/${orderId}`);
      console.log("order hy ",data)
      return data;
      
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

// Async thunk for fetching all orders
export const getAllOrders = createAsyncThunk(
  'order/getAllOrders',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await adminapi.get('/order/');
      console.log("orderDtaa=======",data)
      return data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

// Async thunk for confirming an order
export const confirmOrder = createAsyncThunk(
  'order/confirmOrder',
  async (orderId, { rejectWithValue }) => {
    try {
      const { data } = await adminapi.put(`/order/${orderId}/confirmed`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

// Async thunk for shipping an order
export const shipOrder = createAsyncThunk(
  'order/shipOrder',
  async (orderId, { rejectWithValue }) => {
    try {
      const { data } = await adminapi.put(`/order/${orderId}/ship`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

// Async thunk for delivering an order
export const deliverOrder = createAsyncThunk(
  'order/deliverOrder',
  async (orderId, { rejectWithValue }) => {
    try {
      const { data } = await adminapi.put(`/order/${orderId}/delived`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

// Async thunk for canceling an order
export const cancelOrder = createAsyncThunk(
  'order/cancelOrder',
  async (orderId, { rejectWithValue }) => {
    try {
      const { data } = await adminapi.put(`/order/${orderId}/cancel`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

// Async thunk for deleting an order
export const deleteOrder = createAsyncThunk(
  'order/deleteOrder',
  async (orderId, { rejectWithValue }) => {
    try {
      const { data } = await adminapi.delete(`/order/${orderId}/delete`);
      return data; // Assuming data contains the deleted order
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

// Order slice
const orderSlice = createSlice({
  name: 'order',
  initialState: {
    order: null,
    orders: [],
    loading: false,
    error: null,
    orderId: null,
    successMessage: null,
  },
  reducers: {
    clearOrderState: (state) => {
      state.order = null;
      state.orders = [];
      state.error = null;
      state.loading = false;
      state.orderId = null;
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Create Order
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload.orderData;
        state.orderId = action.payload.orderId;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Get Order by ID
      .addCase(getOrderById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOrderById.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
      })
      .addCase(getOrderById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Get All Orders
      .addCase(getAllOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(getAllOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Confirm Order
      .addCase(confirmOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(confirmOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.message;
      })
      .addCase(confirmOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Ship Order
      .addCase(shipOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(shipOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.message;
      })
      .addCase(shipOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Deliver Order
      .addCase(deliverOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deliverOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.message;
      })
      .addCase(deliverOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Cancel Order
      .addCase(cancelOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(cancelOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.message;
      })
      .addCase(cancelOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete Order
      .addCase(deleteOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = state.orders.filter(order => order._id !== action.payload.order._id); // Remove deleted order
        state.successMessage = action.payload.message;
      })
      .addCase(deleteOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearOrderState } = orderSlice.actions;

export default orderSlice.reducer;
