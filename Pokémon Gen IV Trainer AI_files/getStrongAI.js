function getStrongAI(moveData) {
	let resultAiChecks = [];
	
	if (isSubjectToDamageCalc(moveData)) {
		switch (moveData.battleEffect) {
			case "FutureAttack":
				resultAiChecks.push("Check_RiskyCanKO");
				break;
			
			case "Priority":
				resultAiChecks.push("Check_PriorityCanKO");
				break;
			
			default:
				resultAiChecks.push("Check_GeneralCanKO");
				break;
		}
		
		resultAiChecks.push("Check_CannotKO");
		resultAiChecks.push("Check_Effectiveness");
		
	} else {
		switch (moveData.battleEffect) {
			case "Selfdestruction":
				break;
			case "FocusPunch":
				resultAiChecks.push("Check_MoveCheck");
				resultAiChecks.push("Check_Effectiveness");
				break;
			
			default:
				resultAiChecks.push("Check_Effectiveness");
				break;
		}
	}
	
	return resultAiChecks.filter(check => Object.hasOwn(strongCheckText, check));
}
