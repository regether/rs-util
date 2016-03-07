import React, { Component } from 'react';
import setClass from '../src/set-class';

export default class Demo extends Component {
    render() {
        let classes = setClass({foo: true, ni: false});
        return (
            <div>
                {classes}
            </div>
        );
    }
}
