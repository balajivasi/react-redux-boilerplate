import React from 'react'

import i18n from '../i18n'
export default class SelectBox extends React.Component{

  options(item){
    return <option key={item.short} value={item.short}>{item.name}</option>
  }


  render(){
    const toggle = lng => {console.log(lng); i18n.changeLanguage(lng)};
    const selected=localStorage.getItem('i18nextLng')
    return <select className="form-control" value={selected} onChange={event=>toggle(event.target.value)}>
      {this.props.data.map(item=>this.options(item))}
    </select>
  }
}
