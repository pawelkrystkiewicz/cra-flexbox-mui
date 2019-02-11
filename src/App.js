import React, { Component } from 'react';
import Main from './components/MainRoute';
import './App.scss';
export const Context = React.createContext();

class App extends Component {
	constructor() {
		super();
		this.state = {
			modal: false
		};
	}
	toggleModal = () => {
		this.setState(() => ({ modal: !this.state.modal }));
	};
	render() {
		return (
			<Context.Provider
				value={{
					toggleModal: this.toggleModal,
					state: this.state
				}}
			>
				<Main className="flex_container" />
			</Context.Provider>
		);
	}
}

export default App;
