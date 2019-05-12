import React, { Component } from 'react'

class HomeSpecials extends Component{

	constructor(){
		super();
		this.state = {
			specials: [],
			response: ''
		}
	}

	componentDidMount(){
		fetch('/api/specials')
			.then(res =>res.json())
			.then(specials => this.setState({specials}, () => console.log('Specials:', specials)));

		console.log("did mount: ");
		console.log(this.state.specials);
	}

	render() {
		return (
			<div>
				<h2>Specials</h2>
				<ul>
					{this.state.specials.map(special =>
						<li>{special.productName} - ${special.productPrice}</li>
					)}
				</ul>
			</div>
        );
    }
}

export default HomeSpecials;