import axios from "axios"
import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    CLEAR_ERRORS
} from "../constant/productConstant"

export const getProduct= (keyword="")=> async(dispatch)=>{
    try{
        dispatch({type:ALL_PRODUCT_REQUEST})

        let link = `/api/v1/product?keyword=${keyword}`

        const {data}=await axios.get(link)

        dispatch({
            type:ALL_PRODUCT_SUCCESS,
            payload:data
        })

    }catch (error) {
        dispatch({
            type:ALL_PRODUCT_FAIL,
            payload:error.response.data.message
        })
    }
}

export const getProductDetail = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/v1/product/${id}`)

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data.product
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const clearErrors = () => async (dispatch) => {

    dispatch({
        type:CLEAR_ERRORS
    })
}