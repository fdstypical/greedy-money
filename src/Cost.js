import React from 'react';
import { connect } from 'react-redux';

function Cost(props) {
	let categoryValue = props.categoryValue;
	let categoryImg = props.categoryImg.slice(16) + ' costCategoryImg';

	return(
		<div className='cost'>
			<div>
				<span className="dateTime">{props.date.time} </span>
				<span className="dateTime">{props.date.date} </span>
			</div>
			<div className='costWrap'>
				<p className='costValue'>{props.cost}<b className='valute'>&#x20bd;</b></p>
			</div>
			<div className='categoryWrap'>
				<i className={categoryImg}></i>
				<p className='costCategory'>{categoryValue}</p>
			</div>
		</div>
	)
}

export default connect(
	state => ({
		store: state
	})
)(Cost);