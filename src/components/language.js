import React from 'react'
import SelectBox from './selectBox'
class Language extends React.Component{
  render(){
    let selectData=[{name:'English',short:'en'},{name:'Germany',short:'ge'}]
    return <div className="form-group">
        <label className="col-lg-2">Select Language</label>
        <div className="col-lg-3">
          <SelectBox data={selectData} />
        </div>
    </div>
  }
}

export default Language;
