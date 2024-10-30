import {legacy_createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { productDetailReducer, productReducer } from "./reducer/productReducer"
import { forgetPasswordReducer, userReducer } from "./reducer/userReducer"


const reducer=combineReducers({
    products:productReducer,
    productDetails:productDetailReducer,
    user:userReducer,
    forgetpassword:forgetPasswordReducer
})

let initialState={}

const middleware= [thunk]

const store=legacy_createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
