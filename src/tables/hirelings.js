import { roll } from "../services/Dice/Dice"
import { characterBackground } from "./background"

export function stringifyHireling(hireling) {
	const background = characterBackground()
	return `${hireling.type}: ${background.forename} ${background.surname} (${hireling.abilities.map((ability) => `${ability.name.toUpperCase()}: ${ability.score}`).join(', ')}, ${hireling.hitProtection} HP, ${hireling.items.join(', ')})`
}

export const hirelings = {
	lighterBoy: () => {
		return stringifyHireling({
			type: 'Lighter Boy',
			abilities: [
				{ name: 'strength', score: roll('2d6') },
				{ name: 'dexterity', score: 10 },
				{ name: 'willpower', score: 10 }
			],
			hitProtection: roll('d6'),
			items: ['Lantern', 'Club (D6)']
		})
	},
	mercenary: () => {
		return stringifyHireling({
			type: 'Mercenary',
			abilities: [
				{ name: 'strength', score: 10 },
				{ name: 'dexterity', score: 10 },
				{ name: 'willpower', score: 10 }
			],
			hitProtection: roll('2d6'),
			items: ['Musket (D8)', 'Sword (D6)']
		})
	},
	expert: () => {
		return stringifyHireling({
			type: 'Expert',
			abilities: [
				{ name: 'strength', score: 10 },
				{ name: 'dexterity', score: 10 },
				{ name: 'willpower', score: 10 }
			],
			hitProtection: roll('d6'),
			items: ['Pistol (D6)', 'Expertise in a specific area']
		})
	}
}