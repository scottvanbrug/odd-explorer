import { randomArcana } from './arcana'
import { hirelings } from './hirelings'

export const starterPackages = {
	1: {
		9: () => ['Sword (d6)', 'Pistol (d6)', 'Modern Armour', 'Sense nearby unearthly beings'],
		10: () =>  ['Rifle (d8 B)', 'Bayonet (d6)', hirelings.lighterBoy(), randomArcana()],
		11: () =>  ['Rifle (d8 B)', 'Modern Armour', 'Hound', randomArcana()],
		12: () =>  ['Club (d6)', 'Throwing Knives', randomArcana()],
		13: () =>  ['Pistol (d6)', 'Ether', 'Poison', randomArcana()],
		14: () =>  ['Cane (d6)', 'Acid', 'Spyglass', randomArcana()],
		15: () =>  ['Brace of Pistols (d8 B)', 'Canary', 'Ether'],
		16: () =>  ['Musket (d8 B)', 'Pocket-watch', 'Bomb'],
		17: () =>  ['Halberd (d8 B)', 'Fake Pistol', 'Artificial Lung'],
		18: () =>  ['Garotte (d6)', 'Musket (d8 B)', 'Mute']
	},
	2: {
		9: () => ['Musket (d8 B)', 'Sword (d6)', 'Flashbang', 'Sense nearby Arcana'],
		10: () => ['Musket (d8 B)', 'Hatchet (d6)', 'Hawk', randomArcana()],
		11: () => ['Hatchet (d6)', 'Pistol (d6)', 'Bolt- Cutters', randomArcana()],
		12: () => ['Musket (d8 B)', 'Mule', randomArcana()],
		13: () => ['Sword (d6)', 'Pistol (d6)', 'Crude Armour'],
		14: () => ['Pistol (d6)', 'Bell', 'Steel Wire', 'Smoke-bomb'],
		15: () => ['Longaxe (d8 B)', 'Ferret', 'Fire Oil'],
		16: () => ['Staff (d8 B)', 'Tongs', 'Glue'],
		17: () => ['Pistol (d6)', 'Net', 'Trumpet', 'Prosthetic Leg'],
		18: () => ['Pistol (d6)', 'Grease', 'Hacksaw', 'One Arm']
	},
	3: {
		9: () => ['Musket (d8 B)', 'Club (d6)', 'Immunity to extreme heat and cold'],
		10: () => ['Musket (d8 B)', 'Protective Gloves', randomArcana()],
		11: () => ['Musket (d8 B)', 'Mallet', 'Marbles', 'Fancy Hat', randomArcana()],
		12: () => ['Pick-Axe (d6)', 'Manacles', randomArcana()],
		13: () => ['Pistol (d6)', 'Smoke-bomb', 'Mutt', 'Shovel'],
		14: () => ['Longaxe (d8 B)', 'Throwing Axes', 'Fire Oil'],
		15: () => ['Club (d6)', 'Ether', 'Crowbar', 'Flute'],
		16: () => ['Hatchet (d6)', 'Net', 'Fire Oil', 'Burnt Face'],
		17: () => ['Club (d6)', 'Paint', 'Crowbar', 'Loud Lungs'],
		18: () => ['Pistol (d6)', 'Cigars', 'Poison', 'Fugitive'],
	},
	4: {
		9: () => ['Pistol (d6)', 'Knife (d6)', 'Telepathy if target fails WIL Save'],
		10: () => ['Claymore (d8 B)', 'Pistol (d6)', '2 Acid Flasks', randomArcana()],
		11: () => ['Musket (d8 B)', 'Bayonet (d6)', 'Mutt with telepathic link.'],
		12: () => ['Pistol (d6)', 'Rocket', 'Toxin-Immune'],
		13: () => ['Musket (d8 B)', 'Portable Ram', 'Game Set'],
		14: () => ['Pistol (d6)', 'Saw', 'Animal Trap', 'Spyglass'],
		15: () => ['Bow (d6 B)', 'Knife (d6)', 'Rocket', 'Fire Oil'],
		16: () => ['Pistol (d6)', 'Whip (d6)', 'Cigars', 'Lost Eye'],
		17: () => ['Musket (d8 B)', 'Accordion', 'No Nose/Scent'],
		18: () => ['Sword (d6)', 'Shield', 'Illiterate'],
	},
	5: {
		9: () => ['Blunderbuss (d8 B)', 'Hatchet (d6)', 'Mutt', 'Dreams show your undiscovered surroundings'],
		10: () => ['Brace of Pistols (d8 B)', 'Steel Wire', 'Grappling Hook', randomArcana()],
		11: () => ['Machete (d6)', 'Brace of Pistols (d8 B)', 'Talking Parrot', 'Never Sleep'],
		12: () => ['Harpoon Gun (d8 B)', 'Baton (d6)', 'Acid', 'Slightly Magnetic'],
		13: () => ['Bolt-Cutters', 'Blunderbuss (d8 B)', 'Fiddle'],
		14: () => ['Pistol (d6)', 'Grease', 'Hand Drill', 'Drum'],
		15: () => ['Sword & Dagger (d8 B)', 'Magnifying Glass', 'Lost Eye'],
		16: () => ['Pistol (d6)', 'Acid', 'Animal Repellent', 'Prosthetic Hand'],
		17: () => ['Sword (d6)', 'Steel Wire', 'Ugly Mutation'],
		18: () => ['Sword (d6)', 'Ferret', 'Tattered Clothes', 'Debt (3g)'],
	},
	6: {
		9: () => ['Musket (d8 B)', 'Hatchet (d6)', 'Flashbang', randomArcana(), 'Iron Limb'],
		10: () => ['Rifle (d8 B)', 'Mace (d6)', 'Eagle', 'Poison'],
		11: () => ['Club (d6)', '3 Bombs', 'Rocket', 'Darkvision'],
		12: () => ['Maul (d8 B)', 'Dagger (d6)', 'Chain'],
		13: () => ['Longaxe (d8 B)', 'Rum', 'Bomb'],
		14: () => ['Dagger (d6)', 'Fire Oil', 'Mirror'],
		15: () => ['Pistol (d6)', 'Knife (d6)', 'Bomb', 'Saw'],
		16: () => ['Pistol (d6)', 'Bomb', 'Shovel', 'Glowing Eyes'],
		17: () => ['Staff (d8 B)', 'Throwing Knives (d6)'],
		18: () => ['Mace (d6)', 'Pigeon', 'Disfigured'],
	}
}

export function characterStarterPackage(hitProtection, abilities) {
	const highestAbilityScore = abilities.reduce((highestAbility, ability) => {
		if (ability.score > highestAbility.score) {
			return ability
		}

		return highestAbility
	}, { score: 0 })

	const hpRows = starterPackages[hitProtection]

	return Object.entries(hpRows).find(([score, items]) => {
		return highestAbilityScore.score <= parseInt(score, 10)
	})[1]() || []
}