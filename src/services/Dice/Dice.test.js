import * as Dice from './Dice'
import random from 'random'

jest.mock('random', () => {
	return {
		int: jest.fn()
	}
})

describe('Dice', () => {
	beforeEach(() => {
		random.int.mockImplementation((_, max) => {
			return max
		})
	})

	describe('_parseQuery', () => {
		test('should find a single die', () => {
			expect(Dice._parseQuery('d6')).toEqual(['d6'])
		})

		test('should find multiples of a single die', () => {
			expect(Dice._parseQuery('3d6')).toEqual(['3d6'])
		})

		test('should split die with operators', () => {
			expect(Dice._parseQuery('d6+d10')).toEqual(['d6', '+', 'd10'])
		})

		test('should find constant values', () => {
			expect(Dice._parseQuery('25')).toEqual(['25'])
		})

		test('should parse mixed dice, constants, and operators', () => {
			expect(Dice._parseQuery('d6+5-4d12+4')).toEqual(['d6', '+', '5', '-', '4d12', '+', '4'])
		})

		test('should error on non expected characters', () => {
			expect(Dice._parseQuery.bind(null, '2de')).toThrow(Dice.DiceQueryError)
		})
	})

	describe('_rollTheDie', () => {
		test('should roll a single die', () => {
			expect(Dice._rollTheDie('d6')).toEqual(6)
			expect(random.int).toHaveBeenCalledTimes(1)
			expect(random.int).toHaveBeenCalledWith(1, 6)
		})


		test('should roll a multiple die', () => {
			expect(Dice._rollTheDie('3d6')).toEqual(18)
			expect(random.int).toHaveBeenCalledTimes(3)
			expect(random.int).toHaveBeenCalledWith(1, 6)
		})

		test.each([
			['2d10', 2, 10, 20],
			['18d4', 18, 4, 72],
			['1d12', 1, 12, 12]
		])('should roll %s die', (roll, times, sides, total) => {
			expect(Dice._rollTheDie(roll)).toEqual(total)
			expect(random.int).toHaveBeenCalledTimes(times)
			expect(random.int).toHaveBeenCalledWith(1, sides)
		});
	})

	describe('_evaluate', () => {
		test('should evaluate a single dice group', () => {
			expect(Dice._evaluate(['2d10'])).toEqual(20)
		})

		test.each([
			[['2d6', '+', '3d10'], 42],
			[['2d6', '-', '3d10'], -18],
			[['2d6', '-', '3d10', '+', '6d20'], 102]
		])
		('should evaluate %s to %d', (rollQuery, total) => {
			expect(Dice._evaluate(rollQuery)).toEqual(total)
		})
	})

	describe('roll', () => {
		test.each([
			['2d6', 12],
			['4d10', 40],
			['4d10+2d4', 48],
			['4d10+2d4-d10', 38],
			['4d10+2d4-d10+5', 43],
			['4d10+2d4-d10+5-12d2', 19],
		])('should roll %s to %d', (rollQuery, total) => {
			expect(Dice.roll(rollQuery)).toEqual(total)
		})
	})
})