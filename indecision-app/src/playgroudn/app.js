
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

class IndecisionApp extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			options: []
		};
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
	}

	componentDidMount() {

		try {
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);
			if (options) {
				this.setState({ options });
			}

		} catch (e) {
			// Do nothing at all
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		}
	}

	handleDeleteOptions() {
		this.setState({
			options: []
		});
	}

	handleAddOption(option) {

		if (!option) {
			return 'Enter valid value...';
		} else if (this.state.options.indexOf(option) > -1) {
			return 'This option already exists...';
		}

		this.setState({
			options: [ ...this.state.options, option ]
		});
	}

	handleDeleteOption(optionToRemove) {
		this.setState((prevState) => ({
			options: prevState.options.filter(option => optionToRemove !== option)
		}));
	}

	handlePick() {
		const options = this.state.options;
		const rando = Math.floor(Math.random() * options.length);
		alert(options[rando]);
	}

	render() {
		const subtitle = 'Put your life in the hands a computer';

		return (
			<div>
				<Header subtitle={subtitle} />
				<Action
					hasOptions={ this.state.options.length > 0 }
					handlePick={ this.handlePick }
				/>
				<Options
					handleDeleteOption={ this.handleDeleteOption }
					options={ this.state.options }
					handleDeleteOptions={ this.handleDeleteOptions }
				/>
				<AddOption handleAddOption={ this.handleAddOption }/>
			</div>
		);
	}
}


const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			{props.subtitle && <h2>{props.subtitle}</h2>}
		</div>
	);
};

Header.defaultProps = {
	title: 'IndecisionApp',
};

const Action = (props) => {
	return (
		<div>
				<button
					onClick={props.handlePick}
					disabled={!props.hasOptions}
				>
					What should I do?
				</button>
			</div>
	);
}

const Option = (props) => {
	return (
		<div>
			{props.option}
			<button
				onClick={(e) => {
					props.handleDeleteOption(props.option);
			}}>
				Remove
			</button>
		</div>
	);
};


const Options = (props) => {
	return (
		<div>
			<button onClick={props.handleDeleteOptions}>Remove All</button>
			{props.options.length === 0 && <p>Please add an option to get started!</p>}
			{props.options.map(option => (
				 <Option
				 	key={option}
				 	option={option}
				 	handleDeleteOption={props.handleDeleteOption}/>
			))}
		</div>
	)
};

class AddOption extends React.Component {

	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			error: undefined,
			option: '',
		};
	}

	handleAddOption(e) {
		e.preventDefault();
		const option = e.target.elements.option.value.trim()
		const error = this.props.handleAddOption(option);

		this.setState(() => {
			return {
				error,
				option: ''
			};
		});

		if (!error) {
			e.target.elements.option.value = '';
		}
	}


	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<input type='text' name='option' />
					<button> Add Option</button>
				</form>
			</div>
		);
	}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
