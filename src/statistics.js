import React from 'react';
import { connect } from 'react-redux';
import StatItem from './statItem';

class Statistics extends React.Component{

	handleRemoveAll = () => {
		this.props.onRemoveAll();
	}

	render(){

		let costs = this.props.store.costs;
		let oldCtg = [];
		let a = [];

		for(let i=0;i<costs.length;i++){

			let ctg = costs[i].categoryValue;
			let b = oldCtg.indexOf(ctg);
			oldCtg.push(ctg);

			if( b === -1 ){
				let e = costs.filter( (item) => {
					return item.categoryValue === ctg;
				});
				a.push(e);
			}

		}

		console.log(a);

		return(
			<div>
				<h2 className='statTitle'>Statistics</h2>
				<p className='statInfo'>here you can check your stats</p>
				<ul className = 'statList'>	
					{a.map((item,index) => {
						return <li 
									key={index}
									className='statListItem'>
							<StatItem statItem={item}/>
						</li>
					})}
				</ul>
				<button 
					onClick={this.handleRemoveAll}
					className='removeBtn'
				>Remove All</button>
			</div>
		)
	}
}

export default connect(
	state => ({
		store: state
	}),
	dispatch => ({
		onRemoveAll: () => {
			dispatch({type:'REMOVE_ALL'})
		}
	})
)(Statistics)