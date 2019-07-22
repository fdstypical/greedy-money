import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component{

	render(){
		return(
			<div className='appHeader'>
				<button 
					onClick={(e) => this.props.onChangePart(e.target)}
					className = 'costBtn'
				>Сosts</button>
				<button 
					onClick={(e) => this.props.onChangePart(e.target)}
					className = 'statisticsBtn'
				>Statistics</button>
			</div>
		)
	}
}

export default connect(
	state => ({}),
	dispatch => ({
		onChangePart:(target) => {
			dispatch({type:'CHANGE_PART', payload:target})
		},
	})
)(Header); 