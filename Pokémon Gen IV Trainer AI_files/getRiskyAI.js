function getRiskyAI(moveData) {
	let resultAiChecks = [];


		switch (moveData.battleEffect) {
			case "InflictSleep":
			case "Selfdestruction":
			case "MirrorMove":
			case "Ohko":
			case "HighCritical":
			case "InflictConfusion":
			case "Metronome":
			case "Psywave":
			case "Counter":
			case "DestinyBond":
			case "Swagger":
			case "Attract":
			case "Present":
			case "AllStatsUpHit":
			case "BellyDrum":
			case "MirrorCoat":
			case "FocusPunch":
			case "DamageRevenge":
			case "TeeterDance":
				resultAiChecks.push("Risky");
				break;
		}

	return resultAiChecks.filter(check => Object.hasOwn(riskyCheckText, check));
}
