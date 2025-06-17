function getDouble_EnemyAI(moveData) {
	let resultAiChecks = [];
	
	if (isSubjectToDamageCalc(moveData)) {
		switch (moveData.battleEffect) {
		//	case "Okho":
			case "DragonRage":
			case "DamageIsLevel":
			case "Psywave":
			case "Sonicboom":
				break;
			
			default:
				resultAiChecks.push("Check_Effectiveness1");
				break;
		}
		
		// -- DoubleAI_StrongAI_Start
		
		switch (moveData.battleEffect) {
			case "Priority":
				resultAiChecks.push("Check_MostDamagePriority");
				break;
			
			default:
				resultAiChecks.push("Check_MostDamage");
				break;
		}
		
		switch (moveData.battleEffect) {
			case "DragonRage":
			case "DamageIsLevel":
			case "Psywave":
			case "Sonicboom":
				break;
			
			default:
				resultAiChecks.push("Check_Effectiveness2");
				break;
		}
	}
	
	// -- DoubleAI_StrongAI_end
	
	switch (moveData.name) {
		case "Skill Swap":
			resultAiChecks.push("SkillSwap");
			break;
			
		case "Earthquake":
		case "Magnitude":
			resultAiChecks.push("Earthquake");
			break;
		
		case "Future Sight":
		case "Doom Desire":
			resultAiChecks.push("FutureAttack");
			break;
		
		case "Rain Dance":
			resultAiChecks.push("RainDance");
			break;
		
		case "Sunny Day":
			resultAiChecks.push("SunnyDay");
			break;
		
		case "Hail":
			resultAiChecks.push("Hail");
			break;
		
		case "Sandstorm":
			resultAiChecks.push("Sandstorm");
			break;
		
		case "Follow Me":
			resultAiChecks.push("FollowMe");
			break;
		
		
		default:
			switch (moveData.damageType) {
				case "Electric":
					switch (moveData.name) {
						default:
							resultAiChecks.push("Check_ElectricAttack");
							break;
					}
					
					break;
				
				case "Fire":
					resultAiChecks.push("Check_UserFlashFire");
					
					switch (moveData.name) {
						default:
							break;
					}
					
					break;
				
				case "Water":
					switch (moveData.name) {
						case "Surf":
							resultAiChecks.push("Check_Surf");
							break;
						
						default:
							resultAiChecks.push("Check_WaterAttack");
							break;
					}
					
					break;
				
				default:
					if (isSubjectToDamageCalc(moveData)) {
						switch (moveData.battleEffect) {
							case "DragonRage":
							case "DamageIsLevel":
							case "Psywave":
							case "Sonicboom":
								break;
							
							default:
								resultAiChecks.push("Check_AllyHelpingHand");
								break;
						}
					}
					
					break;
			}
			
			break;
	}
	
	
	return resultAiChecks.filter(check => Object.hasOwn(double_EnemyCheckText, check));
}
		
		