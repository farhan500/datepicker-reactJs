import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'

import M from 'materialize-css/dist/js/materialize.min.js'


function DatePicker() {
    document.addEventListener('DOMContentLoaded', function() {     

        var elems = document.querySelectorAll('.datepicker');        
        const options = { format: 'dd/mm/yyyy', };
        var instances = M.Datepicker.init(elems, options);
      
      });
    return (
      <div className="DP" style={{width:100}}>
   <input type="text" className="datepicker"></input>
      </div>
    );
  }
  
  export default DatePicker;