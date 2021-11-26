import { characterBackground } from '../../tables/background'
import { characterStarterPackage } from '../../tables/starterPackages'
import { roll } from '../Dice/Dice'

export function generateCharacter() {
	const abilities = [
		{ name: 'strength', score: roll('3d6') },
		{ name: 'dexterity', score: roll('3d6') },
		{ name: 'willpower', score: roll('3d6') },
	]
	const hitProtection = roll('d6')

	return {
		abilities,
		hitProtection,
		items: characterStarterPackage(hitProtection, abilities),
		background: characterBackground()
	}
}