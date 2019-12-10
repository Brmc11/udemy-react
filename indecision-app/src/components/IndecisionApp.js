import React from 'react';
import Header from './Header';
import Action from './Action';
import AddOption from './AddOption';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }

  handleDeleteOptions = () => {
    this.setState({
      options: []
    });
  }

  handleClearSelected = () => {
    this.setState({
      selectedOption: undefined
    });
  }

  handleAddOption = (option) => {

    if (!option) {
      return 'Enter valid value...';
    } else if (this.state.options.indexOf(option) > - 1) {
      return 'This option already exists...';
    }

    this.setState({
      options: [ ...this.state.options, option ]
    });
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  }

  handlePick = () => {
    const rando = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[rando];
    this.setState({ selectedOption: option });
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


  render() {
    const subtitle = 'Put your life in the hands a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={ this.state.options.length > 0 }
            handlePick={ this.handlePick }
          />
          <div className="widget">
            <Options
              handleDeleteOption={ this.handleDeleteOption }
              options={ this.state.options }
              handleDeleteOptions={ this.handleDeleteOptions }
            />
            <AddOption handleAddOption={ this.handleAddOption }/>
          </div>
          <OptionModal
            selectedOption={ this.state.selectedOption }
            handleClearSelected={ this.handleClearSelected }
          />
        </div>
      </div>
    );
  }
}

export default IndecisionApp;
