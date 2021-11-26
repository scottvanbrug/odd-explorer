import './App.css';
import CharacterGenerator from './components/CharacterGenerator/CharacterGenerator'

function App() {
	return (
		<div className="app">
			<header className="appHeader">
				<h1><span className="headerPrefix">Prepare to Travel</span> Into the Odd</h1>
			</header>
			<CharacterGenerator></CharacterGenerator>
		</div>
	);
}

export default App;
