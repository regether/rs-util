import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import createFragment from '../src/create-fragment';

class Demo extends Component {

    render() {
        let contents = createFragment({
            left: <div>left</div>,
            right: <div>right</div>
        });
        return (
            <div>
                {contents}
            </div>
        );
    }
}

ReactDOM.render(<Demo />, document.getElementById('component-example-create-fragment-demo'));
