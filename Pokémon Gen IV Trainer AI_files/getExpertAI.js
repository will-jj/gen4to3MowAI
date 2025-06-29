function getExpertAI(moveData) {
	let resultAiChecks = [];
	
	// Pre-check before main effect (only effectiveness)
	switch (moveData.battleEffect) {
		case "DamageAndUserSpattackDown2":
		case "DreamEater":
		case "FocusPunch":
		case "HighHpHighDamage":
		case "MustRecharge":
		case "StealBerry":
		case "Superpower":
		case "UTurn":
		case "WakeUpSlap":
			resultAiChecks.push("Check_Effectiveness");
			break;
	}
	
	// Main effect check
	if (moveData.battleEffect !== null) {
		resultAiChecks.push(moveData.battleEffect);
	}
	
	// Post-checks after main effect
	switch (moveData.battleEffect) {
		// Anything with an associated list
		case "MirrorMove":
			resultAiChecks.push("List_MirrorMove");
			break;
		
		case "Encore":
			resultAiChecks.push("List_Encore");
			break;
		
		case "StealItem":
			resultAiChecks.push("List_StealItem");
			break;
		
		case "SkillSwap":
			resultAiChecks.push("RolePlay");
			resultAiChecks.push("List_GoodAbilities");
			break;
		
		case "RolePlay":
			resultAiChecks.push("List_GoodAbilities");
			break;
		
		case "HealBlock":
			resultAiChecks.push("List_HealingMoves");
			break;
		
		// Redirections
		case "UserAttackUp2":
			resultAiChecks.push("UserAttackUp1");
			break;
		
		case "UserDefenseUp2":
		case "BulkUp":
			resultAiChecks.push("UserDefenseUp1");
			break;
		
		case "UserSpeedUp2":
			resultAiChecks.push("UserSpeedUp1");
			break;
		
		case "UserSpattackUp2":
			resultAiChecks.push("UserSpattackUp1");
			break;
		
		case "UserSpdefenseUp2":
		case "BothDefenseUp1":
		case "CalmMind":
			resultAiChecks.push("UserSpdefenseUp1");
			break;
		
		case "UserAccuracyUp2":
			resultAiChecks.push("UserAccuracyUp1");
			break;
		
		case "UserEvasionUp2":
		case "Minimize":
			resultAiChecks.push("UserEvasionUp1");
			break;
		
		
		case "TargetAttackDown2":
			resultAiChecks.push("TargetAttackDown1");
			break;
		
		case "TargetDefenseDown2":
			resultAiChecks.push("TargetDefenseDown1");
			break;
		
		case "TargetSpeedDown2":
			resultAiChecks.push("TargetSpeedDown1");
			break;
		
		case "TargetSpattackDown2":
			resultAiChecks.push("TargetSpattackDown1");
			break;
		
		case "TargetSpdefenseDown2":
			resultAiChecks.push("TargetSpdefenseDown1");
			break;
		
		case "TargetAccuracyDown2":
			resultAiChecks.push("TargetAccuracyDown1");
			break;
		
		case "TargetEvasionDown2":
			resultAiChecks.push("TargetEvasionDown1");
			break;
		
		
		case "SkyAttack":
		case "SkullBash":
		// Moved: SolarBeam has a special clause, so it was moved to its own check
	//	case "Solarbeam":
			resultAiChecks.push("RazorWind");
			break;
		
		case "LeechSeed":
			resultAiChecks.push("Toxic");
			break;
		
		case "BlockEscape":
			resultAiChecks.push("Trap");
			break;
		
		
		case "Memento":
			resultAiChecks.push("Selfdestruction");
			break;
		
		
		case "13Recoil":
		case "VoltTackle":
		case "12Recoil":
			resultAiChecks.push("14Recoil");
			break;
		
		
		case "BlazeKick":
		case "PoisonTail":
			resultAiChecks.push("HighCritical");
			break;
		
		
		case "Tickle":
			resultAiChecks.push("DefenseDown1");
			break;
		
		
		case "SunRecover":
		case "Swallow":
			resultAiChecks.push("Recover");
			break;
		
		
		case "Flatter":
			resultAiChecks.push("InflictConfusion");
			break;
		
		
		case "Swagger":
			resultAiChecks.push("Flatter");
			resultAiChecks.push("InflictConfusion");
			break;
		
		
		case "DamageAndTargetSpeedDown1":
			switch (moveData.name) {
				case "Icy Wind":
				case "Rock Tomb":
				case "Mud Shot":
					resultAiChecks.push("IcyWind");
					resultAiChecks.push("TargetSpeedDown1");
					break;
			}
			break;
		
		
		case "Dive":
		case "Dig":
		case "Bounce":
			resultAiChecks.push("Fly");
			resultAiChecks.push("Check_ChargeTurnInvuln");
			break;
		
		case "Fly":
			resultAiChecks.push("Check_ChargeTurnInvuln");
			break;
	}
	
	return resultAiChecks.filter(check => Object.hasOwn(expertCheckText, check));
}
