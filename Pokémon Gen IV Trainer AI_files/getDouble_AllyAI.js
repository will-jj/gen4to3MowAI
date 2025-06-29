function getDouble_AllyAI(moveData) {
	let resultAiChecks = [];
	
	if (isSubjectToDamageCalc(moveData)) {
		switch (moveData.damageType) {
			case "Fire":
				resultAiChecks.push("Check_FireAttack");
				break;
			
			case "Electric":
				resultAiChecks.push("Check_ElectricAttack");
				break;
			
			case "Water":
				resultAiChecks.push("Check_WaterAttack");
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
			
			case "Thunder Wave":
				resultAiChecks.push("ThunderWave");
				resultAiChecks.push("Check_ElectricAttack");
				break;
			
			case "Helping Hand":
				resultAiChecks.push("HelpingHand");
				break;
			
			case "Swagger":
				resultAiChecks.push("Swagger");
				break;
			
			default:
				switch (moveData.battleEffect) {
					case "InflictPoison":
						resultAiChecks.push("Toxic");
						break;
					
					default:
						resultAiChecks.push("Check_NoReason");
						break;
				}
				
				break;
		}
	}
	
	return resultAiChecks.filter(check => Object.hasOwn(double_AllyCheckText, check));
}