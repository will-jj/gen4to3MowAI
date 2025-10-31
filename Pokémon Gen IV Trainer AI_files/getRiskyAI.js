function getRiskyAI(moveData) {
	let resultAiChecks = [];


		switch (moveData.battleEffect) {
			case "InflictSleep":
				resultAiChecks.push("Risky");
				break;
		}

	return resultAiChecks.filter(check => Object.hasOwn(riskyCheckText, check));
}
