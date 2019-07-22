import React from 'react';
import Cost from './Cost';

function StatItem(props) {

	let categoryValue = props.statItem[0].categoryValue;
	let categoryImg = props.statItem[0].categoryImg.slice(16) + ' costCategoryImg';

	let sum = 0;

	for(let i=0;i<props.statItem.length;i++) sum += +props.statItem[i].cost;

	return(
		<div>
			<div className = 'statisticsItem'>
				<i className={categoryImg}></i>
				<span className='statCost'>{sum} <b className='valute'>&#x20bd;</b></span>
				<span className='statCtg'>{categoryValue}</span>
			</div>
			<div className='detailList'>
				{props.statItem.length > 1 && 
					<ul className='detail-ul-list'>
						{props.statItem.map((item,index) => {
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
				}
			</div>
		</div>
	)
}

export default StatItem;