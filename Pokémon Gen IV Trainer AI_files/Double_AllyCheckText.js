const double_AllyCheckText = {
["Acupressure"]:
`If the target's ability is not Simple, and the target's current attack, defense, speed, special attack, special defense, evasion, or accuracy is boosted to +6:
	Score -30 and terminate

If the target's ability is Simple, and the target's current attack, defense, speed, special attack, special defense, evasion, or accuracy is boosted to +3 or more:
	Score -10 and terminate

If the target's HP is under 51%:
	Score -1 and terminate

If the target's HP is over 90%:
	68.8% (176/256) chance of score +2 and terminate

Otherwise:
	34.4% (88/256) chance of score +1 and terminate`,


["Check_ElectricAttack"]:
`If the target's ability is Motor Drive, and the target's current speed is not boosted to +6:
	37.5% (96/256) chance of score +3 and terminate

If the target's ability is Volt Absorb:
	If the target is at full HP:
		Score -10 and terminate
	
	If the target's HP is over 90%:
		No scoring change and terminate
	
	If the target's HP is over 75%:
		25% (64/256) chance of score +3 and terminate
	
	If the target's HP is over 50%:
		50% (128/256) chance of score +3 and terminate
	
	Otherwise:
		75% (192/256) chance of score +3 and terminate

Otherwise:
	Score -30 and terminate`,


["Check_FireAttack"]:
`If the target's ability is Flash Fire, and Flash Fire has not been activated already:
	Score +3 and terminate

Otherwise:
	Score -30 and terminate`,


["Check_NoReason"]:
`Unconditionally:
	Score -30 and terminate`,


["Check_WaterAttack"]:
`If the target's ability is Water Absorb or Dry Skin:
	If the target is at full HP:
		Score -10 and terminate
	
	If the target's HP is over 90%:
		No scoring change and terminate
	
	If the target's HP is over 75%:
		25% (64/256) chance of score +3 and terminate
	
	If the target's HP is over 50%:
		50% (128/256) chance of score +3 and terminate
	
	Otherwise:
		75% (192/256) chance of score +3 and terminate

Otherwise:
	Score -30 and terminate`,


["GastroAcid"]:
`If the target is already under the effect of Gastro Acid:
	Score -30 and terminate

If the target's ability is Truant or Slow Start:
	Score +5 and terminate

Otherwise:
	No scoring change and terminate`,


["HelpingHand"]:
`If the target's HP is 0% (after rounding):
	Score -30 and terminate

If the target's HP is over 50%, or the target will move before both of its foes:
	With a 25% (64/256) chance:
		Score -1 and terminate
	Else:
		75% (192/256) chance of score +2 and terminate

Otherwise:
	No scoring change and terminate`,


["List_SkillSwapMoves"]:
`Fire Blast
Thunder
Cross Chop
Hydro Pump
DynamicPunch
Blizzard
Zap Cannon
Megahorn
Focus Blast
Gunk Shot
Magma Storm
Power Whip
Seed Flare
Head Smash`,


["SkillSwap"]:
`If the target's ability is Truant or Slow Start:
	Score +10 and terminate

If the user's ability is Levitate, and the target's ability is not Levitate, and the target is Electric type:
	If the target is pure Electric type:
		Score +2 and terminate
	Else:
		Score -29 and terminate

If the user's ability is CompoundEyes or No Guard, and the target knows a move in the list below:
	Score +3 and terminate

Otherwise:
	Score -30 and terminate`,


["Swagger"]:
`If the target is holding a Lum Berry or Persim Berry:
	If the target's current attack is boosted to +2 or more:
		No scoring change and terminate
	Else:
		Score +3 and terminate

Otherwise:
	Score -30 and terminate`,


["ThunderWave"]:
`If the target is Ground type:
	Score -30 and terminate`,


["Toxic"]:
`If the target's ability is Poison Heal, and the target is not already statused, and the target's HP is under 92%:
	Score +5 and terminate

Otherwise:
	Score -30 and terminate`,


["WillOWisp"]:
`If the target's ability is Flash Fire, and Flash Fire has not been activated already:
	Score +3 and terminate

If the target's ability is Guts, and the target is not currently statused, and the target is not Fire type, and the target is not holding a Flame Orb or Toxic Orb, and the target's HP is over 80%:
	Score +5 and terminate

Otherwise:
	Score -30 and terminate`,


};