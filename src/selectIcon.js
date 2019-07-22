import React from 'react';

class SelectIcon extends React.Component{

	render(){
		let coords = this.props.coords;
		let style = {
			top: coords.top + 4 + 'px',
			left: coords.left + 4 + 'px'
		}
		return(
			<div>
				<i 
					className='selectIcon fas fa-check-circle'
					style = {style}
				></i>
			</div>
		)
	}
}

export default SelectIcon;