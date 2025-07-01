function getStrongAI(moveData) {
	let resultAiChecks = [];
	
	if (isSubjectToDamageCalc(moveData)) {
		switch (moveData.battleEffect) {		
			case "Priority":
				resultAiChecks.push("Check_PriorityCanKO");
				resultAiChecks.push("Check_CannotKO");
				break;
						
			default:
				resultAiChecks.push("Check_GeneralCanKO");
				resultAiChecks.push("Check_CannotKO");
				break;
		}

		resultAiChecks.push("Check_Effectiveness");		
		
	} else {
		switch (moveData.battleEffect) {
			
			// Moves in sIgnoredPowerfulMoveEffects are not checked for cannot KO
			case "DreamEater":
			case "RazorWind":
			case "SkyAttack":
			case "MustRecharge":
			case "SkullBash":
			case "Solarbeam":
			case "SpitUp":
			case "FocusPunch":
			case "Superpower":
			case "HighHpHighDamage":
			case "DamageAndUserSpattackDown2":
				resultAiChecks.push("Check_GeneralCanKO");
				resultAiChecks.push("Check_Effectiveness");
				break;
			
			case "Selfdestruction":
				resultAiChecks.push("Check_Selfdestruct");
				resultAiChecks.push("Check_Effectiveness");
				break;
			
			default:
				resultAiChecks.push("Check_Effectiveness");
				break;
		}
	}
	
	return resultAiChecks.filter(check => Object.hasOwn(strongCheckText, check));
}
