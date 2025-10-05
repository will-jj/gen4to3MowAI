function getExpertMoveInfo(moveData) {
	let resultMoveInfoChecks = [];


	if (moveData.battleEffect !== null) {
		resultMoveInfoChecks.push(moveData.battleEffect);
	}

	switch (moveData.battleEffect) {
		case "Endure":
			break;
		// Does not use the counter within endure AI so exluding for now
		//resultMoveInfoChecks.push("Protect");
		
		case "SunRecover":
			resultMoveInfoChecks.push("WeatherUsing");
			break;

	}

	switch (moveData.name) {
		case "Hail":
		case "Rain Dance":
		case "Sunny Day":
		case "Bounce":
		case "Dig":
		case "Dive":
		case "Fly":
			resultMoveInfoChecks.push("WeatherUsing");
			break;
	}

	return resultMoveInfoChecks.filter(check => Object.hasOwn(expertMoveInfoCheckText, check));
};