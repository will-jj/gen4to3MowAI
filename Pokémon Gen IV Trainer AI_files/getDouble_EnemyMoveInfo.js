function getDouble_EnemyMoveInfo(moveData) {
	let resultMoveInfoChecks = [];

	switch (moveData.name) {
		case "Earthquake":
		case "Magnitude":
			resultMoveInfoChecks.push("Earthquake");
			break;
	}

	if (moveData.battleEffect !== null) {
		resultMoveInfoChecks.push(moveData.battleEffect);
	}

	return resultMoveInfoChecks.filter(check => Object.hasOwn(double_EnemyMoveInfoCheckText, check));
};