function getDouble_AllyAI(moveData) {
	let resultAiChecks = [];
	
	if (!aiIsPowerOther(moveData)) {
		switch (moveData.damageType) {
			case "Fire":
				resultAiChecks.push("Check_FireAttack");
				break;

			default:
				resultAiChecks.push("Check_NoReason");
				break;
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