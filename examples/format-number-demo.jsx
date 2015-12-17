import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import formatNumber from '../src/format-number';

class Demo extends Component {

    render() {
        console.log(
            formatNumber(10000),
            formatNumber(10000, 2),
            formatNumber(10000.123456, 2),
            formatNumber(10000.123456, 2, ' '),
            formatNumber(.123456, 2, ' '),
            formatNumber(56., 2, ' '),
            formatNumber(56., 0, ' '),
            formatNumber('56.'),
            formatNumber('56.a')
        );
        return (
            <div>Test</div>
        );
    }
}

ReactDOM.render(<Demo />, document.getElementById('component-example-format-number-demo'));
