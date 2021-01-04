import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import MenuComponent from './MenuComponent';
import NavComponent from './NavComponent';
import AssideComponent from './AssideComponent';
import FooterComponent from './FooterComponent';
import '../styles/ContainerComponent.css';

class ContainerComponent extends Component{

	render(){
		return(
			<div className = "ContainerComponent">
				<div>
					<HeaderComponent/>
				</div>
				<div>
					<MenuComponent/>
				</div>
				<div>
					<NavComponent/>
				</div>
				<div>
					<AssideComponent/>
				</div>
				<div>
					<FooterComponent/>
				</div>
			</div>
		);
	}
}

export default ContainerComponent;

