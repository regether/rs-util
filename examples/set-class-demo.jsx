import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import setClass from '../src/set-class';

class Demo extends Component {

    render() {
        let classes = setClass({foo: true, ni: false});
        return (
            <div>
                {classes}
            </div>
        );
    }
}

ReactDOM.render(<Demo />, document.getElementById('component-example-set-class-demo'));
