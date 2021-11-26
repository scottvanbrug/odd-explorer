import random from 'random'

export class DiceQueryError extends Error {}

// Query Format:
// Roll query consists of one or more DICE_GROUPS combined
// with an OPERATOR.
//
// DICE_GROUP: Number (N) "d" Number (D) : Roll N D sided sice
// OPERATOR: "+" / "-" : Add or subtract from result
// CONSTANT: Number (N)
// DICE_GROUP (OPERATOR DICE_GROUP)*

export function _parseQuery(rollQuery) {
	const query = rollQuery.replace(/\s/, '')
	if (!/^(?:\d*d?\d+)(?:[+-]\d*d?\d+)*$/.test(query)) {
		throw new DiceQueryError('Invalid dice query')
	}

	return query.split('').reduce((accm, char) => {
		if (char === '+' || char === '-') {
			return [...accm, char, '']
		}

		let last = accm[accm.length - 1] || ''
		return [...accm.slice(0, -1), `${last}${char}`]
	}, [])
}

export function _rollTheDie(diceGroup) {
	let [times, sides] = diceGroup.split('d')
	times = parseInt(times, 10) || 1
	sides = parseInt(sides, 10) || 1
	let total = 0
	for (let i = 0; i < times; i++) {
		total += random.int(1, sides)
	}

	return total
}

export function _evaluate(query) {
	let total = 0

	let i = -1, len = query.length
	while (i < len) {
		const operator = query[i] || '+'
		const roll = query[i + 1]
		const value = _rollTheDie(roll)

		if (operator === '-') {
			total = total - value
		} else {
			total = total + value
		}

		i = i + 2
	}

	return total
}

export function roll(rollQuery) {
	const query = _parseQuery(rollQuery)
	const total = _evaluate(query)

	return total
}