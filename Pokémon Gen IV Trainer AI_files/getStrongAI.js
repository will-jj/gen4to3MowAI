function getStrongAI(moveData) {
	let resultAiChecks = [];


	if (moveData.damageFormula == DamageFormulaType.STANDARD_DAMAGE) {
		switch (moveData.battleEffect) {
			case "Priority":
				resultAiChecks.push("Check_PriorityCanKO");
				resultAiChecks.push("Check_CannotKO");
				break;

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
				break;

			case "Selfdestruction":
				resultAiChecks.push("Check_Selfdestruct");
				break;

			default:
				resultAiChecks.push("Check_GeneralCanKO");
				resultAiChecks.push("Check_CannotKO");
				break;
		}
	}

	resultAiChecks.push("Check_Effectiveness");

	return resultAiChecks.filter(check => Object.hasOwn(strongCheckText, check));
}
