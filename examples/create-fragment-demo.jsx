import React, { Component } from 'react';
import createFragment from '../src/create-fragment';

export default class Demo extends Component {
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
