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
		case "12Recoil":
		case "DamageAndUserSpattackDown2":
			return false;

		default:
			return (moveData.type !== null);
	}
}

function aiIsPowerOther(moveData) {
	switch (moveData.battleEffect) {
		case "UserAttackUp2":
		case "ForceSwitch":
		case "TargetAccuracyDown1":
		case "TargetDefenseDown1":
		case "TargetAttackDown1":
		case "InflictSleep":
		case "InflictConfusion":
		case "Disable":
		case "Mist":
		case "LeechSeed":
		case "UserSpattackUp1":
		case "InflictPoison":
		case "InflictParalysis":
		case "TargetSpeedDown1":
		case "Toxic":
		case "UserAttackUp1":
		case "UserSpeedUp2":
		case "Teleport":
		case "Mimic":
		case "TargetDefenseDown2":
		case "UserEvasionUp1":
		case "Recover":
		case "UserDefenseUp1":
		case "Minimize":
		case "DefenseCurl":
		case "UserDefenseUp2":
		case "LightScreen":
		case "Haze":
		case "Reflect":
		case "FocusEnergy":
		case "Metronome":
		case "MirrorMove":
		case "UserSpdefenseUp2":
		case "Transform":
		case "NoDamage":
		case "Rest":
		case "Conversion":
		case "Substitute":
		case "Sketch":
		case "BlockEscape":
		case "LockOn":
		case "Nightmare":
		case "Curse":
		case "Conversion2":
		case "TargetSpeedDown2":
		case "Spite":
		case "Protect":
		case "BellyDrum":
		case "Spikes":
		case "Identify":
		case "DestinyBond":
		case "PerishSong":
		case "Sandstorm":
		case "Endure":
		case "TargetAttackDown2":
		case "Swagger":
		case "Attract":
		case "SleepTalk":
		case "HealBell":
		case "Safeguard":
		case "PainSplit":
		case "BatonPass":
		case "Encore":
		case "TargetEvasionDown1":
		case "SunRecover":
		case "RainDance":
		case "SunnyDay":
		case "PsychUp":
		case "Stockpile":
		case "Swallow":
		case "Hail":
		case "Torment":
		case "Flatter":
		case "InflictBurn":
		case "Memento":
		case "FollowMe":
		case "NaturePower":
		case "Charge":
		case "Taunt":
		case "HelpingHand":
		case "SwitchItems":
		case "RolePlay":
		case "Assist":
		case "Ingrain":
		case "MagicCoat":
		case "Recycle":
		case "Yawn":
		case "SkillSwap":
		case "Imprison":
		case "Refresh":
		case "Grudge":
		case "Snatch":
		case "Camouflage":
		case "UserSpattackUp2":
		case "TeeterDance":
		case "MudSport":
		case "TargetSpdefenseDown2":
		case "Tickle":
		case "BothDefenseUp1":
		case "BulkUp":
		case "WaterSport":
		case "CalmMind":
		case "DragonDance":

		// power 1 moves
		case "Ohko":
		case "Sonicboom":
		case "DamageByTargetWeight":
		case "Counter":
		case "DamageIsLevel":
		case "DragonRage":
		case "Bide":
		case "Psywave":
		case "SuperFang":
		case "LowHpHighDamage":
		case "Return":
		case "Present":
		case "Frustration":
		case "Magnitude":
		case "HiddenPower":
		case "MirrorCoat":
		case "Endeavor":
		
		//  excluded
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
		case "DamageAndUserSpattackDown2":
			return true;

		default:
			return false;
	}
}

function isPowerOther(moveData) {
	switch (moveData.battleEffect) {

	}
}
