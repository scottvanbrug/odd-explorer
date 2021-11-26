function AbilityScore({ ability }) {
	return (
		<div>
			{ ability.name.toUpperCase() }:
			{ ability.score }
		</div>
	);
}

export default AbilityScore;

