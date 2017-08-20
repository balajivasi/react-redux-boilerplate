import { createStore } from 'redux'
import rootreducer from '../reducers/index'
import {syncHistoryWithStore} from 'react-router-redux'
import {browserHistory} from 'react-router'


const defaultstate={}
const Store=createStore(rootreducer,defaultstate)



export const History = syncHistoryWithStore(browserHistory,Store)

export default Store;
