const double_EnemyCheckText = {
["Check_AllyHelpingHand"]:
`If the user's ally knows the move Helping Hand:
	Score +1 and terminate`,


["Check_Effectiveness1"]:
`If the move cannot KO the target, and the user's ally's HP is over 0% (after rounding):
	If the effectiveness of the move is 1/2x:
		75% (192/256) chance of score -1 and continue
	
	If the effectiveness of the move is 1/4x:
		75% (192/256) chance of score -2 and continue`,


["Check_Effectiveness2"]:
`If the move did not receive a score +1 in the previous check:
	If the effectiveness of the move is 2x:
		60.9% (156/256) chance of score +1 and continue
	
	If the effectiveness of the move is 4x:
		75% (192/256) chance of score +1 and continue`,


["Check_ElectricAttack"]:
`If the target's ally's ability is certainly Lightningrod:
	If the target's ally is Ground type:
		Score -10 and terminate
	Else:
		Score -2 and terminate`,


["Check_MostDamage"]:
`If the move deals the most damage to the target when considering all of the user's ally's moves as well (regardless of if the ally is alive):
	50% (128/256) chance of score +1 and continue`,


["Check_MostDamagePriority"]:
`If the move deals the most damage to the target when considering all of the user's ally's moves as well (regardless of if the ally is alive):
	80.5% (206/256) chance of score +1 and continue`,


["Check_Surf"]:
`If the user's ally's ability is Dry Skin or Water Absorb:
	Score +3 and terminate

If the user's ally is Ground or Fire type:
	Score -10 and terminate

Otherwise:
	Score -3 and terminate`,


["Check_UserFlashFire"]:
`If the user's ability is Flash Fire, and Flash Fire has been activated already:
	Score +1 and terminate`,


["Check_WaterAttack"]:
`If the target's ally's ability is certainly Storm Drain:
	Score -1 and continue

If the user's ally's ability is Storm Drain:
	Score -10 and terminate`,


["Earthquake"]:
`If the user's ally is Flying type, or has the ability Levitate:
	Score +2 and terminate

If the user's ally is Fire, Electric, Poison, or Rock type:
	Score -10 and terminate

Otherwise:
	Score -3 and terminate`,


["FollowMe"]:
`If the user's HP is under 31%:
	75% (192/256) chance of score -5 and terminate

If the user's HP is over 90%:
	If the user's ally's HP is over 90%:
		75% (192/256) chance of score -1 and terminate
	
	If the user's ally's HP is over 50%:
		75% (192/256) chance of score +1 and terminate
	
	If the user's ally's HP is over 30%:
		75% (192/256) chance of score +2 and terminate
	
	If the user's ally's HP is under 31%:
		75% (192/256) chance of score +3 and terminate

If the user's HP is over 50%:
	If the user's ally's HP is over 90%:
		75% (192/256) chance of score -2 and terminate
	
	If the user's ally's HP is over 50%:
		75% (192/256) chance of score -1 and terminate
	
	If the user's ally's HP is over 30%:
		75% (192/256) chance of score +1 and terminate
	
	If the user's ally's HP is under 31%:
		75% (192/256) chance of score +2 and terminate

If the user's HP is over 30%:
	If the user's ally's HP is over 90%:
		75% (192/256) chance of score -2 and terminate
	
	If the user's ally's HP is over 50%:
		75% (192/256) chance of score -2 and terminate
	
	If the user's ally's HP is over 30%:
		75% (192/256) chance of score +1 and terminate
	
	If the user's ally's HP is under 31%:
		75% (192/256) chance of score +2 and terminate`,


["FutureAttack"]:
`If the user's ally knows the move Future Sight or Doom Desire:
	If the user's ally's HP is 0% (after rounding):
		No score change and terminate
	
	If the user will attack after its ally:
		Score -3 and terminate
	
	If the user will speed tie with its ally:
		25% (64/256) chance of score -3 and terminate`,


["Hail"]:
`If the user's ability is Ice Body or Snow Cloak, or the user knows the move Blizzard:
	Score +2 and continue

If the user's ally's ability is Ice Body or Snow Cloak, or the user's ally knows the move Blizzard:
	Score +2 and terminate`,


["RainDance"]:
`If the user's ability is Dry Skin, or the user is statused and its ability is Hydration:
	Score +2 and continue

If the user's ally's ability is Dry Skin, or the user's ally is statused and its ability is Hydration:
	Score +2 and terminate`,


["Sandstorm"]:
`If the user's ability is Sand Veil, or the user is Rock type:
	Score +2 and continue

If the user's ally's ability is Sand Veil, or the user's ally is Rock type:
	Score +2 and terminate`,


["SkillSwap"]:
`If the user's ability is Truant:
	Score +5 and terminate

If the target's ability is Shadow Tag, or Pure Power:
	Score +2 and terminate`,


["SunnyDay"]:
`If the user's ability is Leaf Guard, and the user is not statused, and the user's HP is over 29%:
	Score +2 and continue

If the user's ability is Flower Gift:
	Score +2 and continue

If the user's ability is Dry Skin:
	Score -2 and continue

If the user's ability is Solar Power:
	If the user's HP is over 49%:
		Score +1 and continue
	
	50% (128/256) chance of score -2 and continue

If the user's ally's ability is Leaf Guard, and the user's ally is not statused, and the user's ally HP is over 29%:
	Score +2 and continue

If the user's ally's ability is Flower Gift:
	Score +2 and continue

If the user's ally's ability is Dry Skin:
	Score -2 and continue

If the user's ally's ability is Solar Power:
	If the user's ally's HP is over 49%:
		Score +1 and continue
	
	50% (128/256) chance of score -2 and terminate`,


["Check_UserStatus_Power_Other"]:
`If the user does not have the ability Guts and is statused:
	Score -5 and terminate`,


["Check_UserStatus"]:
`If the user does not have the ability Guts and is statused:
	If the move deals the most damage to the target when considering all of the user's ally's moves as well (regardless of if the ally is alive):
		Score + 3 and terminate
	Else:
		Score +1 and terminate

If the user has the ability Guts and the user's ally knows the move Helping Hand: 
	Score + 1 and terminate`,
};