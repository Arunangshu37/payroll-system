import {
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,
    ORDER_PAY_REQUEST,
    ORDER_PAY_SUCCESS,
    ORDER_PAY_FAIL,
    ORDER_LIST_USER_REQUEST,
    ORDER_LIST_USER_SUCCESS,
    ORDER_LIST_USER_FAIL,
    ORDER_UPDATE_FAIL,
    ORDER_UPDATE_REQUEST,
    ORDER_UPDATE_SUCCESS,
    ORDER_ALL_REQUEST,
    ORDER_ALL_SUCCESS,
    ORDER_ALL_FAIL,
    ORDER_ALL_RESET

} from '../constants/orderConstants'
import axios from 'axios'

export const createOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_CREATE_REQUEST,
        })

        // Get user login and user info
        const {
            userLogin: { userInfo },
        } = getState()

        console.log("${userInfo.token}", userInfo);

        // Header to send with the request
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        
        // Make request to server and get the response data
        const { data } = await axios.post(`/api/orders`, order, config)

        // Dispatch user order success after making the request
        dispatch({
            type: ORDER_CREATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const getOrderDetails = (orderId) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_DETAILS_REQUEST,
        })

        // Get user login to get the bearertoken
        const {
            userLogin: { userInfo },
        } = getState()

        // Header to send with the request
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        // Make request to server and get the response data
        const { data } = await axios.get(`/api/orders/${orderId}`, config)

        // Dispatch user order success after making the request
        dispatch({
            type: ORDER_DETAILS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ORDER_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const payOrder = (orderId, paymentResult) => async (
    dispatch,
    getState
) => {
    try {
        dispatch({
            type: ORDER_PAY_REQUEST,
        })

        // Get user login to get the bearer token
        const {
            userLogin: { userInfo },
        } = getState()

        // Header to send with the request
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        // Make request to server and get the response data
        const { data } = await axios.put(
            `/api/orders/${orderId}/pay`,
            paymentResult,
            config
        )

        // Dispatch user order pay success after making the request
        dispatch({
            type: ORDER_PAY_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ORDER_PAY_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const listUserOrders = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_LIST_USER_REQUEST,
        })

        // Get user login to get the bearer token
        const {
            userLogin: { userInfo },
        } = getState()

        // Header to send with the request
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        // // Make request to server and get the response data
        const { data } = await axios.get(`/api/orders/myorders`, config)
      
   
        // Dispatch user order pay success after making the request
        dispatch({
            type: ORDER_LIST_USER_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ORDER_LIST_USER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const getAllOrders = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_ALL_REQUEST,
        })

        // Get user login to get the bearer token
        const {
            userLogin: { userInfo },
        } = getState()

        // Header to send with the request
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        // // Make request to server and get the response data
    
        const { data } = await axios.get(`/api/orders/allorders`, config)
     
        // Dispatch user order pay success after making the request
        dispatch({
            type: ORDER_ALL_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ORDER_ALL_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}


//update api 
export const updateOrderStatus = (orderData,id) => async (
    dispatch,
    getState
) => {
    try {
        dispatch({
            type: ORDER_UPDATE_REQUEST,
        })

        // Get user login to get the bearer token
        const {
            userLogin: { userInfo },
        } = getState()

        // Header to send with the request
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }
       
        // Make request to server and get the response data
        const { data } = await axios.put(
            `/api/orders/${id}/status`,
            orderData,
            config
        )
        // Dispatch user order pay success after making the request
        dispatch({
            type: ORDER_UPDATE_SUCCESS,
            payload: data,
        })
     
    } catch (error) {
        dispatch({
            type: ORDER_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
      
    }
}

//get all order details
