import { createStore,applyMiddleware } from "redux";
import { comments } from "./reducers";
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'


export default createStore(
    comments,
    composeWithDevTools(applyMiddleware(thunk))
)