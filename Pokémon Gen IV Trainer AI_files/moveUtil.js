function isSubjectToDamageCalc(moveData) {
	switch (moveData.battleEffect) {
		
		// Moves specifically exempted from being included
		case "Selfdestruction":
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
		case "SuckerPunch":
		case "12Recoil":
			return false;
		
		// Moves which do nonstandard damage, but are handled correctly and included
		case "HiddenPower":
		case "NaturalGift":
		case "Judgment":
		case "DragonRage":
		case "DamageIsLevel":
		case "Psywave":
		case "Return":
		case "Frustration":
		case "Sonicboom":
		case "DamageByTargetWeight":
			return true;
		
		default:
			return (moveData.damageType !== null);
	}
}
