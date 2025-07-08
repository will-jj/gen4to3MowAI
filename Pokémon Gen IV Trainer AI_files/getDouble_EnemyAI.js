function getDouble_EnemyAI(moveData) {
	let resultAiChecks = [];

	let handled = false;

	switch (moveData.name) {

		case "Earthquake":
		case "Magnitude":
			resultAiChecks.push("Earthquake");
			handled = true;
			break;

		case "Skill Swap":
			resultAiChecks.push("SkillSwap");
			handled = true;
			break;

		case "Thunder Wave":
		case "Charge":
			resultAiChecks.push("Check_ElectricAttack");
			handled = true;
			break;

		case "Sunny Day":
		case "Will-O-Wisp":
			resultAiChecks.push("Check_UserFlashFire");
			handled = true;
			break;
	}

	switch (moveData.type) {
		case "Electric":
			resultAiChecks.push("Check_ElectricAttack");
			handled = true;
			break;

		case "Fire":
			resultAiChecks.push("Check_UserFlashFire");
			handled = true;
			break;
	}

	if (!handled) {
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
					resultAiChecks.push("Check_UserStatus_Power_Other")
					break;

				default:
					resultAiChecks.push("Check_UserStatus")
					break;
			}
		}
		else {
			resultAiChecks.push("Check_UserStatus_Power_Other")
		}
	}

	return resultAiChecks.filter(check => Object.hasOwn(double_EnemyCheckText, check));
}

