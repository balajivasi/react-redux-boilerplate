import React from 'react'
import { render } from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import {App} from './components/app'
import { Provider } from 'react-redux'

import Store from './store/index'

render(<Provider store={Store}><App /></Provider>,document.getElementById('sri'))
