function getBasicMoveInfo(moveData) {
	let resultMoveInfoChecks = [];


	if (moveData.battleEffect !== null) {
		resultMoveInfoChecks.push(moveData.battleEffect);
	}

	switch (moveData.name){
		case "Hail":
		case "Rain Dance":
		case "Sandstorm":
		case "Sunny Day":
			resultMoveInfoChecks.push("WeatherUsing");
			break;
	}

    return resultMoveInfoChecks.filter(check => Object.hasOwn(basicMoveInfoCheckText, check));
};