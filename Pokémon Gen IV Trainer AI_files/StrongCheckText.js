const strongCheckText = {
["Check_CannotKO"]:
`If the move cannot KO the target, and a different move the user knows would do more damage to the target:
	Score -1 and terminate`,


["Check_Effectiveness"]:
`If the effectiveness of the move is 4x:
	68.8% (176/256) chance of score +2 and terminate`,


["Check_GeneralCanKO"]:
`If the move can KO the target:
	Score +4 and terminate`,


["Check_MoveCheck"]:
`Unconditionally:
	80.1% (205/256) chance of score -2 and continue`,


["Check_PriorityCanKO"]:
`If the move can KO the target:
	Score +6 and terminate`,


["Check_RiskyCanKO"]:
`If the move can KO the target:
	33.6% (85/256) chance of score +4 and terminate`,


["Check_Selfdestruct"]:
`If the move can KO the target:
	No score change and terminate`,


};