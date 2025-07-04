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
			resultAiChecks.push("Check_UserStatus")
		}
		else {
			resultAiChecks.push("Check_UserStatus_Power_Other")
		}
	}

	return resultAiChecks.filter(check => Object.hasOwn(double_EnemyCheckText, check));
}

