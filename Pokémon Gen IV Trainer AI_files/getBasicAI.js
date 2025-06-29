function getBasicAI(moveData) {
	let resultAiChecks = [];
	
	if (isSubjectToDamageCalc(moveData)) {
		// General effectiveness immunity
		resultAiChecks.push("Check_DamageImmunity");
		
		// Type-specific immunities
		switch (moveData.damageType) {
			case "Electric":
				resultAiChecks.push("Check_VoltAbsorb");
				break;
			
			case "Water":
				resultAiChecks.push("Check_WaterAbsorb");
				break;
			
			case "Fire":
				resultAiChecks.push("Check_FlashFire");
				break;
			
			case "Ground":
				resultAiChecks.push("Check_Levitate");
				break;
			
			default:
				switch (moveData.name) {
					case "Hidden Power":
					case "Weather Ball":
						resultAiChecks.push("Check_VariableType");
						break;
				}
				
				break;
		}
		
		resultAiChecks.push("Check_WonderGuard");
	}
	
	// Omitted: Hyper Voice, Perish Song
	switch (moveData.name) {
		case "Growl":
		case "Roar":
		case "Sing":
		case "Supersonic":
		case "Screech":
		case "Snore":
		case "Uproar":
		case "Metal Sound": 
		case "GrassWhistle":
			resultAiChecks.push("Check_Soundproof");
			break;
	}
	
	// Pre-checks before main effect
	switch (moveData.battleEffect) {
		
		// A bunch of these are flagged to duplicate check damage immunity. I have removed that
		case "Bide":
		case "RazorWind":
		case "SuperFang":
	//	case "DragonRage":
		case "MustRecharge":
	//	case "DamageIsLevel":
	//	case "Psywave":
		case "Counter":
		case "LowHpHighDamage":
	//	case "Return":
		case "Present":
	//	case "Frustration":
	//	case "Sonicboom":
	//	case "HiddenPower":
		case "MirrorCoat":
		case "SkullBash":
		case "FocusPunch":
		case "Superpower":
		case "Endeavor":
	//	case "DamageByTargetWeight":
		case "DamageByTargetHealth":
		case "Ohko":
		case "Selfdestruction":
			resultAiChecks.push("Check_DamageImmunity");
			resultAiChecks.push("Check_WonderGuard");
			break;
		
		case "SpitUp":
			resultAiChecks.push("Check_DamageImmunity");
			resultAiChecks.push("Check_UserStockpile");
			break;
		
		
		case "InflictPoison":
			resultAiChecks.push("Toxic");
			break;
		
		
		case "InflictSleep":
			resultAiChecks.push("Check_TargetStatused");
			resultAiChecks.push("Check_TargetSafeguard");
			break;
		
		
		case "Yawn":
			resultAiChecks.push("Check_TargetStatused");
			resultAiChecks.push("Check_TargetSafeguard");
			resultAiChecks.push("InflictSleep");
			break;
		
		
		case "InflictParalysis":
			// Erroneously checks all paralysis moves instead of just Thunder Wave.
			// As a result Glare will appear to not affect ghosts.
			resultAiChecks.push("Check_DamageImmunity");
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
		
		
		case "UserAttackUp2":
			resultAiChecks.push("UserAttackUp1");
			break;
		
		case "DefenseCurl":
		case "UserDefenseUp2":
			resultAiChecks.push("UserDefenseUp1");
			break;
		
		case "UserSpeedUp2":
			resultAiChecks.push("UserSpeedUp1");
			break;
		
		case "UserSpattackUp2":
			resultAiChecks.push("UserSpattackUp1");
			break;
		
		case "UserSpdefenseUp2":
			resultAiChecks.push("UserSpdefenseUp1");
			break;
		
		case "UserAccuracyUp2":
			resultAiChecks.push("UserAccuracyUp1");
			break;
		
		case "Minimize":
		case "UserEvasionUp2":
			resultAiChecks.push("UserEvasionUp1");
			break;
		
		
		case "SleepTalk":
			resultAiChecks.push("Snore");
			break;
		
		
		case "PsychUp":
			resultAiChecks.push("Haze");
			break;
		
		
		case "SunRecover":
			resultAiChecks.push("Recover");
			break;
		
		
		case "Swagger":
		case "Flatter":
			resultAiChecks.push("InflictConfusion");
			resultAiChecks.push("Check_TargetSafeguard");
			break;
		
		
		case "KnockOff":
			resultAiChecks.push("SwitchItems");
			break;
	}
	
	// Main effect check
	if (moveData.battleEffect !== null) {
		resultAiChecks.push(moveData.battleEffect);
	}
	
	// Post-checks after main effect
	switch (moveData.battleEffect) {
		case "TargetAttackDown1":
		case "TargetDefenseDown1":
		case "TargetSpeedDown1":
		case "TargetSpattackDown1":
		case "TargetSpdefenseDown1":
		case "TargetAccuracyDown1":
		case "TargetEvasionDown1":
		case "TargetAttackDown2":
		case "TargetDefenseDown2":
		case "TargetSpeedDown2":
		case "TargetSpattackDown2":
		case "TargetSpdefenseDown2":
		case "TargetAccuracyDown2":
		case "TargetEvasionDown2":
			resultAiChecks.push("Check_ClearBody");
			break;
		
		case "InflictParalysis":
			if (moveData.name === "Thunder Wave") {
				resultAiChecks.push("Check_VoltAbsorb");
			}
			
			resultAiChecks.push("Check_TargetStatused");
			resultAiChecks.push("Check_TargetSafeguard");
			break;
		
		case "Toxic":
		case "InflictPoison":
		case "InflictBurn":
			resultAiChecks.push("Check_TargetStatused");
			resultAiChecks.push("Check_TargetSafeguard");
			break;
		
		case "Swallow":
			resultAiChecks.push("Check_UserStockpile");
			resultAiChecks.push("Recovery");
			break;
		
		case "InflictConfusion":
			resultAiChecks.push("Check_TargetSafeguard");
			break;
		
		case "BellyDrum":
			resultAiChecks.push("UserAttackUp1");
			break;
		
		case "DreamEater":
		case "Magnitude":
			resultAiChecks.push("Check_DamageImmunity");
			break;
		
	}
	
	return resultAiChecks.filter(check => Object.hasOwn(basicCheckText, check));
}
