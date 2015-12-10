import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Animate from '../src/animate';
/* css file is necessary */
import '../assets/index.less';

class Demo extends Component {
	state = {
		show : false
	}
	toggleShow() {
		this.setState({
			show: !this.state.show
		});
	}
    render() {
        return (
			<div>
				<div onClick={this.toggleShow.bind(this)}>click this</div>
				<Animate transitionName="example">
					{ !!this.state.show && <div key="1">{'' + this.state.show }</div> }
				</Animate>
			</div>
        );
    }
}

ReactDOM.render(<Demo />, document.getElementById('component-example-animate-demo'));

