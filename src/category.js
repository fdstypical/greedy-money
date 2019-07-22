import React from 'react';
import SelectIcon from './selectIcon';
import { connect } from 'react-redux';

// let selectIcon;
let coords;

class Category extends React.Component{

	selectCategory = (e) => {

		if(e.target.className !== 'categoryList'){
			let target = e.target;

			while(!target.classList.contains('categoryItem')){
				target = target.parentNode;
			}

			coords = getCoords(target);

			this.props.onAddSelectIcon()

			let categoryInfo = {
				value: target.getElementsByTagName('span')[0].innerHTML ,
				img: target.getElementsByTagName('i')[0].className
			};

			this.props.setCategory(categoryInfo);

		}
	}

	render() {
		return(
			<div 
				className='categoryList' 
				onClick={this.selectCategory}
			>

				{this.props.store.showSelectIcon && <SelectIcon coords={coords} />}

				<div className='categoryItem'>
					<i className="fontAwesomIcons fas fa-wine-glass-alt"></i>
					<span>Fun</span>
				</div>
				<div className='categoryItem'>
					<i className="fontAwesomIcons fas fa-prescription-bottle-alt"></i>
					<span>Medicine</span>
				</div>
				<div className='categoryItem'>
					<i className="fontAwesomIcons fas fa-laptop"></i>
					<span>Buy</span>
				</div>

				<div className='categoryItem'>
					<i className="fontAwesomIcons fas fa-plane-departure"></i>
					<span>Travels</span>
				</div>
				<div className='categoryItem'>
					<i className="fontAwesomIcons fas fa-utensils"></i>
					<span>Food</span>
				</div>
				<div className='categoryItem'>
					<i className="fontAwesomIcons fas fa-gift"></i>
					<span>Presents</span>
				</div>
				<div className='categoryItem'>
					<i className="fontAwesomIcons fas fa-dumbbell"></i>
					<span>Sport</span>
				</div>
				<div className='categoryItem'>
					<i className="fontAwesomIcons fas fa-bus"></i>
					<span>Transport</span>
				</div>
				<div className='categoryItem'>
					<i className="fontAwesomIcons fas fa-tshirt"></i>
					<span>Clothes</span>
				</div>
			</div>
		)
	}
}

// for coords in page

function getCoords(elem) { // кроме IE8-
  var box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    left: box.left + window.pageXOffset
  };

}

export default connect(
	state => ({
		store: state
	}),
	dispatch => ({
		onAddSelectIcon: () => {
			dispatch({type:'ADD_SELECT_ICON', payload:true});
		}
	})
)(Category);
