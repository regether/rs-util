import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classSet from '../src/classset';

class Demo extends Component {

    render() {
        let classes = classSet({foo: true, ni: false});
        return (
            <div>
                {classes}
            </div>
        );
    }
}

ReactDOM.render(<Demo />, document.getElementById('component-example-classnames-example'));
