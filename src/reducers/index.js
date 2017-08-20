import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import GlobalData from './globalReducer'


const rootreducer=combineReducers({GlobalData,routing:routerReducer})


export default rootreducer;
