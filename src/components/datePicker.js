import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'

import M from 'materialize-css/dist/js/materialize.min.js'


function DatePicker() {
    let datepickerRef = null;

    document.addEventListener('DOMContentLoaded', function() {  
     
        var elems = datepickerRef;        
        const options = { format: 'dd/mm/yyyy', };
        M.Datepicker.init(elems, options);
      
      });
    return (
      <div className="DP" style={{width:100}}>
   <input type="text" className="datepicker" ref={(holder) => datepickerRef = holder} ></input>

      </div>
    );
  }
  
  export default DatePicker;