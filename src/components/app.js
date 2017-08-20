import React from 'react'
import Language from './language'
import { translate } from 'react-i18next'

//translate(['common'],{wait:true})
class App extends React.Component{
  render(){
    const { t } = this.props;
    return <div>
        <Language />
        <h1>{t('common:home')}</h1>
    </div>
  }
}

export default translate()(App)
