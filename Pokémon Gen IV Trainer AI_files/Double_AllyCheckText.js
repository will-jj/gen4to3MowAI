const double_AllyCheckText = {
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


["HelpingHand"]:
`25% (64/256) chance:
	Score -1 and terminate
Otherwise:
	Score +2 and terminate`,


["List_SkillSwapMoves"]:
`Fire Blast
Thunder
Cross Chop
Hydro Pump
DynamicPunch
Blizzard
Megahorn`,


["SkillSwap"]:
`If the target's ability is Truant:
	Score +10 and terminate

If the user's ability is Levitate, and the target's ability is not Levitate, and the target is Electric type:
	If the target is pure Electric type:
		Score +2 and terminate
	Else:
		Score -29 and terminate

If the user's ability is CompoundEyes, and the target knows a move in the list below:
	Score +3 and terminate

Otherwise:
	Score -30 and terminate`,


["Swagger"]:
`If the target is holding a Persim Berry:
	If the target's current attack is boosted to +2 or more:
		No scoring change and terminate
	Else:
		Score +3 and terminate

Otherwise:
	Score -30 and terminate`,


["ThunderWave"]:
`If the target is Ground type:
	Score -30 and terminate`,


["TryStatus"]:
`If the target's ability is Guts, and the target is not currently statused, and the user's HP is over 90%:
	Score +5 and terminate

Otherwise:
	Score -30 and terminate`,


};