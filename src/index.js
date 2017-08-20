import React from 'react'
import { render } from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/app'
import { Provider } from 'react-redux'
import { I18nextProvider } from 'react-i18next'
import Store from './store/index'
import i18n from './i18n'

render(<I18nextProvider i18n={i18n}>
          <Provider store={Store}>
              <App />
          </Provider>
        </I18nextProvider>,
document.getElementById('sri'))
