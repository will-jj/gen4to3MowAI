function getBasicMoveInfo(moveData) {
	let resultMoveInfoChecks = [];


	if (moveData.battleEffect !== null) {
		resultMoveInfoChecks.push(moveData.battleEffect);
	}

    return resultMoveInfoChecks.filter(check => Object.hasOwn(basicMoveInfoCheckText, check));
};