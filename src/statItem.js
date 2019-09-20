import React from 'react';
import Cost from './Cost';

class StatItem extends React.Component {

	constructor(props){
		super(props)

		this.state = {
			showItems: false,
		}
	}

	handleShowItem = () => {
		this.setState( state => ({
			showItems: !state.showItems,
		}))
	}

	render(){

		let categoryValue = this.props.statItem[0].categoryValue;
		let categoryImg = this.props.statItem[0].categoryImg.slice(16) + ' costCategoryImg';

		let sum = 0;

		for(let i=0;i<this.props.statItem.length;i++) sum += +this.props.statItem[i].cost;

		return(
			<div>
				<div className = 'statisticsItem' onClick={this.handleShowItem}>
					<i className={categoryImg}></i>
					<span className='statCost'>{sum} <b className='valute'>&#x20bd;</b></span>
					<span className='statCtg'>{categoryValue}</span>
				</div>

				{this.state.showItems && <div className='detailList'>
					<ul className='detail-ul-list'>
						{this.props.statItem.map((item,index) => {
							return <li 
										key={index}
										className='detailItem'
									>
								<Cost
									index = {index}
									cost = {item.cost}
									date = {item.date}
									categoryImg = {item.categoryImg}
									categoryValue = {item.categoryValue}
								/>
							</li>
						})}
					</ul>
				</div>}
			</div>
		)
	}
}

export default StatItem;