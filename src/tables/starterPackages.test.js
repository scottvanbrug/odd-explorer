import { characterStarterPackage, starterPackages } from './starterPackages'

describe('starterPackages', () => {
	describe('characterStarterPackage', () => {
		test.each([
			[1, [{ score: 10 }, { score: 15 }], starterPackages[1][15]()],
			[2, [{ score: 15 }, { score: 11 }], starterPackages[2][15]()],
			[3, [{ score: 5 }, { score: 4 }], starterPackages[3][9]()],
			[6, [{ score: 5 }, { score: 4 }, { score: 18 }], starterPackages[6][18]()],
		])('should find the right starter package for %d %o', (hp, abilities, items) => {
			expect(characterStarterPackage(hp, abilities)).toEqual(items)
		})
	})
})