import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'

import M from 'materialize-css/dist/js/materialize.min.js'

export default class DatePicker extends React.Component {
    constructor() {
        super();
        this.datepickerRef = null;
    }
    componentDidMount() {
        const options = { format: 'dd/mm/yyyy' };
        M.Datepicker.init(this.datepickerRef, options);
    }
    render() {
        return (
            <div className="DP" style={{ width: 100 }}>
                <input type="text" className="datepicker" ref={holder => this.datepickerRef = holder}></input>
            </div>
        );
    }
}
 