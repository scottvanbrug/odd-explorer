import './CharacterGenerator.css'

import { useState } from 'react'
import { generateCharacter } from '../../services/CharacterGenerator/CharacterGenerator';
import AbilityScore from '../AbilityScore/AbilityScore'

function CharacterGenerator() {
	let [character, setCharacter] = useState(generateCharacter())

	const rollUp = function () {
		setCharacter(generateCharacter())
	}

	return (
			<main className="characterSheet">
				<button className="regenerate" onClick={rollUp}>They're Dead!</button>
				<h2 className="characterName">{ character.background.forename } { character.background.surname }</h2>
				<p className="characterOccupation">{ character.background.occupation }</p>
				<div className="characterAttributes">
					<div className="characterStats">
						<h3>Hit Protection</h3>
						<p>{ character.hitProtection } / { character.hitProtection }</p>
						<h3>Abilities</h3>
						{ character.abilities.map((ability) => <AbilityScore key={ ability.name } ability={ ability }></AbilityScore>) }
					</div>
					<div className="characterInventory">
						<h3>Items</h3>
						<ul>
							{ character.items.map((item, idx) => <li key={idx}>{ item }</li> ) }
						</ul>
					</div>
				</div>
		</main>
	);
}

export default CharacterGenerator;
