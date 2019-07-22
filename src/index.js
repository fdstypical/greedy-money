import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

let initialState;

if(!localStorage.getItem('store')) {
	initialState = {
		currentPart: 'costBtn',
		costs:[],
		showSelectIcon:false
	}
} else {
	initialState = JSON.parse(localStorage.getItem('store'));
}

function reducer(state = initialState, action){
	if(action.type === 'CHANGE_PART'){
		return Object.assign({},state,{
			currentPart: action.payload.className
		})
	}
	if(action.type === 'ADD_COST'){
		return Object.assign({}, state,{
			costs: [
				...state.costs,
				action.payload
			]
		})
	}
	if(action.type === 'ADD_SELECT_ICON'){
		return Object.assign({},state,{
			showSelectIcon:action.payload
		})
	}
	if(action.type === 'REMOVE_SELECT_ICON'){
		return Object.assign({},state,{
			showSelectIcon:action.payload
		})
	}
	if(action.type === 'REMOVE_ALL'){
		return Object.assign({},state,{
			costs: []
		})
	}

	return state;
}

const store = createStore(reducer);

store.subscribe(() => {
	localStorage.setItem('store', JSON.stringify(store.getState()));
})

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root'));
