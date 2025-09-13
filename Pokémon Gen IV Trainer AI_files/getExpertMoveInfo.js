function getExpertMoveInfo(moveData) {
	let resultMoveInfoChecks = [];


	if (moveData.battleEffect !== null) {
		resultMoveInfoChecks.push(moveData.battleEffect);
	}

    switch (moveData.battleEffect) {
        case "Endure":
			// Does not use the counter within endure AI so exluding for now
			//resultMoveInfoChecks.push("Protect");
			break;
    }

    return resultMoveInfoChecks.filter(check => Object.hasOwn(expertMoveInfoCheckText, check));
};