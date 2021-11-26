import { roll } from "../services/Dice/Dice"

export const arcana = {
	11: 'Gatekeeper’s Sigil: Create a gate between two flat surfaces that you can see. The gates close if you pass through or break line of sight.',
	12: 'Pierced Heart: State an object you desire. The heart indicates its direction and vague distance.',
	13: 'Pale Flame: An object you touch glows with white light. Contact with the glowing object causes a chilling pain. The effect wears off when the Arcanum is used again.',
	14: 'Soul Chain: Target must pass a DEX Save to avoid your touch, or they lose d6 WIL and you get a glimpse of their current desire.',
	15: 'Gavel of the Unbreakable Seal: One door, window, etc. is sealed until you open it.',
	16: 'Foul Censer: Green smoke surrounds you and everyone within 20ft. Missiles cannot pass through the smoke.',
	21: 'Bleeding Stave: Spews blood-like oil onto a 10ft area. Anyone moving or standing on the oil must make a DEX Save to avoid falling and being unable to move on their turn. Disappears in a harmless flash if ignited.',
	22: 'Pain Idol: Roll a die of your choice. If the result is odd, you lose that much STR, if it’s even your target loses that much STR.',
	23: 'Webbed Hands: Climb sheer surfaces as if you were a spider.',
	24: 'Sunblessed Bands: Glow and hum lightly. Anybody attacking you suffers Damage equal to that they cause to you. If you attack a target yourself then the effect ends until you Rest.',
	25: 'Flesh-Tome of Babble: Speak in a strange sounding language. Every living thing is able to understand and reply in the same tongue if they wish.',
	26: 'Tyrant’s Rod: Order a target to drop, fall, flee or halt unless they pass a WIL Save.',
	31: 'Black Veil: Target must pass a WIL Save or is blinded until you lift the curse or they Rest. Blinded individuals may require a DEX Save to carry out other actions that rely on sight, and their attacks are Impaired.',
	32: 'Strands of Suffering: Strands spread between two surfaces up to 20ft apart. Those within only move very slowly and painfully unless they pass a DEX Save.',
	33: 'Heat Ray: One metal object becomes too hot to touch. If it cannot be quickly dropped or removed the wielder suffers d8 Damage, ignoring armour.',
	34: 'Miniaturisation Coil: Touch an object to shrink it into a tiny miniature. Restore the object to original size at will. The original object can be up to your size, but living beings must be willing.',
	35: 'Frozen Cloud: Floats at your will. Anybody within takes d6 Damage and cannot move unless they pass a STR Save.',
	36: 'Many Phase Key: Phase through a wall or floor with any objects you are carrying.',
	41: 'Skull Magnet: You may attract or repel a single target that has a boney skull, unless they pass a WIL Save.',
	42: 'Transreal Mirror: A perfect duplicate of you is formed. It acts independently, and just like the original. It cannot interact physically with anything. The double lasts until dismissed or a new double is created.',
	43: 'Gorger’s Mask: The wearer can consume anything safely.',
	44: 'Tomb Box: Contains three tiny skeletons that obey whoever holds the box. They are too small to do any real damage, but are quite agile and clever.',
	45: 'Howling Lantern: Blowing into the lantern causes a roar that terrifies prey animals, but attracts predators.',
	46: 'Rainbow Blade: This sword (d6) can fire a beam of harmless light in any colour the wielder wishes.',
	51: 'Hawk of Prosperity: A mechanical bird (3hp, d6 claws) that will only help you to accumulate wealth. Requires a Shilling each day as food.',
	52: 'Inquisitor’s Hood: Speak a question with two possible answers. The target must pass a WIL Save or answer as honestly as they can. If they pass their Save you blurt out an inconvenient truth.',
	53: 'Winter’s Sickle: Anybody taking Damage from this Sickle (d6) is Deprived and feels cold to their bones until they spend at least an hour warming themselves by a fire or other heat source.',
	54: 'Grief Cup: Anybody drinking from this cup has upsetting visions showing the consequences of their past actions.',
	55: 'Victory Globe: Swear an oath aloud. The globe gently guides you in the direction that would help you achieve the oath, but if you fail to complete it before the end of the day it lashes your mind for d12 WIL loss.',
	56: 'Moon Lens: Look at two objects and ask a question. The lens highlights the one object that best answers the question. It cannot predict the future.',
	61: 'Fool’s Coin: Anybody that values money will crave this coin the first time they see it. The effect wears off after an hour.',
	62: 'Chance Rose: Crush this ceramic rose to change the odds of success for a single action to 50%. This cannot make the impossible possible. The rose reforms at the start of each day.',
	63: 'Homing Stick: A staff that can be called to return to you, flying by the best route possible.',
	64: 'False Platter: Anybody viewing this platter sees an illusion of luxury that they are craving right now.',
	65: 'Gold Visor: While wearing this you visualise a general sense of somebody’s honesty and sincerity while they speak.',
	66: 'Infinity Icon: You can stop time, but you can do nothing but observe and think during this time.'
}

export function randomArcana() {
	const itemKey = `${roll('1d6')}${roll('1d6')}`
	return arcana[itemKey]
}