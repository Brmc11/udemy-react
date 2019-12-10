 
// JSX - Javascript XML

const app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a Computer', 
	options: ['Option One', 'Option Two'] 
}; 

const onFormSubmit = (e) => {
	e.preventDefault();
	const option = e.target.elements.option.value;
	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		renderIndecisionApp(); 
	}

};

const removeAll = () => {
	app.options = [];
	renderIndecisionApp();  
};

const onMakeDecision = () => {
	const rando = Math.floor(Math.random() * app.options.length);
	const option = app.options[rando]; 
	alert(option);  
};

const appRoot = document.getElementById('app'); 

const renderIndecisionApp = () => {

	const template = (
		<div>
			<h1>{ app.title }</h1>
			{ app.subtitle && <p>{ app.subtitle }</p> }
			<p>{ app.options.length > 0 ? 
				'Here are your options:' : 
				'No options...' } 
			</p>
			<button 
				disabled={app.options.length === 0} 
				onClick={ onMakeDecision } > 
				Make Decision 
			</button>
			<button onClick={removeAll}>Remove All</button>
			<ol>
				{ 
					app.options.map(option => {
						return <li key={option}>{ option }</li>; 
					})
				}
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option" />
				<button>Add Option</button>
			</form>
		</div>
	);
	ReactDOM.render(template, appRoot); 
}; 

renderIndecisionApp(); 
