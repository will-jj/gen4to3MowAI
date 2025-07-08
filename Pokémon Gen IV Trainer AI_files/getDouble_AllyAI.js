function getDouble_AllyAI(moveData) {
	let resultAiChecks = [];

	if (moveData.damageFormula == DamageFormulaType.STANDARD_DAMAGE) {
		switch (moveData.battleEffect) {
			// Verbose listing of MOVE_POWER_OTHER moves with standard damage
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
			case "Selfdestruction":
				resultAiChecks.push("Check_NoReason");
				break;

			default:
				switch (moveData.type) {
					case "Fire":
						resultAiChecks.push("Check_FireAttack");
						break;

					default:
						resultAiChecks.push("Check_NoReason");
						break;
				}
		}

	} else {
		switch (moveData.name) {
			case "Skill Swap":
				resultAiChecks.push("SkillSwap");
				resultAiChecks.push("List_SkillSwapMoves");
				break;

			case "Will-O-Wisp":
			case "Toxic":
				resultAiChecks.push("TryStatus");
				break;

			case "Helping Hand":
				resultAiChecks.push("HelpingHand");
				break;

			case "Swagger":
				resultAiChecks.push("Swagger");
				break;

			default:
				resultAiChecks.push("Check_NoReason");
				break;
		}
	}

	return resultAiChecks.filter(check => Object.hasOwn(double_AllyCheckText, check));
}