import React from 'react';
import { connect } from 'react-redux';
import Statistics from './statistics';
import Costs from './costmain'


class Main extends React.Component{
	render(){
		let focusPart = this.props.store.currentPart;
		let renderPart;

		if(focusPart === 'costBtn'){
			renderPart = <Costs/>
		}
		if(focusPart === 'statisticsBtn'){
			renderPart = <Statistics/>
		}

		return(
			<div>
				{renderPart}
			</div>
		)
	}
}

export default connect(
	state => ({
		store: state
	})
)(Main)