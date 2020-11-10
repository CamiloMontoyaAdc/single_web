import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import MenuComponent from './MenuComponent';
import NavComponent from './NavComponent';
import AssideComponent from './AssideComponent';
import FooterComponent from './FooterComponent';

class ContainerComponent extends Component{

	render(){
		return(
			<div>
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

