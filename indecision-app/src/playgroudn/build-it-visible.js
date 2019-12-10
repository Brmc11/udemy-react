class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props); 

		this.state = {
			visibility: false
		};

		this.onShowDetails = this.onShowDetails.bind(this); 
	}

	onShowDetails() {
		this.setState({
			visibility: !this.state.visibility
		});
		console.log(this.state.visibility) 
	}
	render() {
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.onShowDetails}>
					{this.state.visibility ? 'Hide Details' : 'Show Details'}
				</button>
				{ this.state.visibility && <p>here are your juicy details</p> }
			</div>
		);
	}
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app')); 


// let visibility = false;  
 

// const onShowDetails = () => {
// 	visibility = !visibility;
// 	renderVisible();
// }; 

// const renderVisible = () => {
// 	const template = (
// 		<div>
// 			<h1>Visibility Toggle</h1>
// 			<button onClick={ onShowDetails }>
// 				{ visibility ? 'Hide Details' : 'Show Details'}
// 			</button>
// 			{ visibility && <p>Here are some details </p> }
// 		</div>
// 	);
// 	ReactDOM.render(template, document.getElementById('app')); 
// }; 

// renderVisible(); 