import React from 'react';
import { connect } from 'react-redux';
import Cost from './Cost';
import Category from './category'

let categoryItem;

class Costs extends React.Component{

	costRef = React.createRef();

	addCosts = () => {
		let cost = this.costRef.current.value;

		if(!categoryItem){
			alert('please select a category ');
			return;
		}
		if(!isNaN(cost) && cost !== ''){
			this.props.onAddCosts(cost, categoryItem);
			this.costRef.current.value = '';
		} else{
			alert('please enter the amount of money');
			return;
		}
		this.props.onRemoveSelectIcon();

		categoryItem = null;
	}

	handleSetCategory = (categoryInfo) => {
		categoryItem = categoryInfo;
	}

	render(){

		return(
			<div>
				<h2 className='costTitle'>Costs</h2>
				<p className='costInfo'>here you can keep your expenses</p>
				<input 
					className = 'costInput'
					type='text'
					ref = {this.costRef}
				/>

				<Category setCategory={this.handleSetCategory}/>

				<button 
					onClick={this.addCosts}
					className='addBtn'
				>Add
				</button>

				<div>
					<ul className="costList">
						{this.props.store.costs.map((item, index) => {
							return(
								<li 
									key={index}
									className="costItem"
									>
									<Cost
										index = {index}
										cost = {item.cost}
										date = {item.date}
										categoryImg = {item.categoryImg}
										categoryValue = {item.categoryValue}
									/>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		)
	}
}

export default connect(
	state => ({
		store: state
	}),
	dispatch => ({
		onAddCosts: (cost, category) => {
			dispatch({type:'ADD_COST', payload: {
				cost: cost,
				categoryImg: category.img,
				categoryValue: category.value,
				date: {
					time: new Date().toLocaleTimeString(),
					date: new Date().toLocaleDateString()
				},
			}})
		},
		onRemoveSelectIcon: () => {
			dispatch({type:'REMOVE_SELECT_ICON', payload:false})
		},
	})
)(Costs)