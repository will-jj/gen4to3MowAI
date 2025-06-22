const basicCheckText = {
["Attract"]:
`If the target is already infatuated:
	Score -10 and terminate

If the target's ability is Oblivious:
	Score -10 and terminate

If the target is not the opposite gender as the user:
	Score -10 and terminate`,


["BatonPass"]:
`If the user has no other living party members:
	Score -10 and terminate`,


["BellyDrum"]:
`If the user's HP is under 51%:
	Score -10 and terminate`,


["BlockEscape"]:
`If the target is already prevented from escaping:
	Score -10 and terminate`,


["BothDefenseUp1"]:
`If the user's current defense is boosted to +6:
	Score -10 and terminate

If the user's current special defense is boosted to +6:
	Score -8 and terminate`,


["BulkUp"]:
`If the user's current attack is boosted to +6:
	Score -10 and terminate

If the user's current defense is boosted to +6:
	Score -8 and terminate`,


["CalmMind"]:
`If the user's current special attack is boosted to +6:
	Score -10 and terminate

If the user's current special defense is boosted to +6:
	Score -8 and terminate`,


["Check_ClearBody"]:
`If the target's ability is Clear Body or White Smoke:
	Score -10 and terminate`,


["Check_DamageImmunity"]:
`If the effectiveness of the move is 0x:
	Score -10 and terminate`,


["Check_FlashFire"]:
`If the target's ability is Flash Fire:
	Score -12 and terminate`,


["Check_Levitate"]:
`If the target's ability is Levitate:
	Score -12 and terminate`,


["Check_Soundproof"]:
`If the target's ability is Soundproof:
	Score -10 and terminate`,


["Check_TargetSafeguard"]:
`If the target is protected by Safeguard:
	Score -10 and terminate`,


["Check_TargetStatused"]:
`If the target is already statused:
	Score -10 and terminate`,


["Check_UserStockpile"]:
`If the user's Stockpile count is 0:
	Score -10 and terminate`,


["Check_VariableType"]:
`If the target is immune to the move's damage due to Volt Absorb, Motor Drive, Water Absorb, or Flash Fire:
	Score -12 and terminate`,


["Check_VoltAbsorb"]:
`If the target's ability is Volt Absorb or Motor Drive:
	Score -12 and terminate`,


["Check_WaterAbsorb"]:
`If the target's ability is Water Absorb:
	Score -12 and terminate`,


["Check_WonderGuard"]:
`If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x or 4x:
	Score -10 and terminate`,


["Curse"]:
`If the user's current attack or defense is boosted to +6:
	Score -10 and terminate`,


["Disable"]:
`If the target is already disabled:
	Score -8 and terminate`,


["DragonDance"]:
`If the user's current attack is boosted to +6:
	Score -10 and terminate

If the user's current speed is boosted to +6:
	Score -8 and terminate`,


["DreamEater"]:
`If the target is not asleep:
	Score -8 and terminate`,


["Encore"]:
`If the target is already under the effect of Encore:
	Score -8 and terminate`,


["FakeOut"]:
`If this is not the first turn the user is active:
	Score -10 and terminate`,


["FocusEnergy"]:
`If the user is already under the effect of Focus Energy:
	Score -10 and terminate`,


["ForceSwitch"]:
`If the target has no other living party members:
	Score -10 and terminate

If the target's ability is Suction Cups:
	Score -10 and terminate`,


["FutureAttack"]:
`If the user's side is awaiting a future attack:
	Score -12 and terminate

If the target's side is awaiting a future attack:
	Score -12 and terminate`,


["Hail"]:
`If the weather is already hail:
	Score -8 and terminate

If the foe's ability is Ice Body:
	If the user's ability is Ice Body:
		No scoring change and terminate
	Else:
		Score -8 and terminate`,


["Haze"]:
`If any of the user's stats are reduced:
	No scoring change and terminate

If any of the target's stats are boosted:
	No scoring change and terminate

Otherwise:
	Score -10 and terminate`,


["HealBlock"]:
`If the target is already under the effect of Heal Block:
	Score -10 and terminate`,


["HelpingHand"]:
`If the fight is not a double or multi battle:
	Score -10 and terminate`,


["Identify"]:
`If the target is already identified by Foresight or Odor Sleuth:
	Score -10 and terminate`,


["Imprison"]:
`If the user is currently imprisoning the target, or is currently being imprisoned by the target:
	Score -10 and terminate`,


["InflictBurn"]:
`If the target's ability is Water Veil or Magic Guard:
	Score -10 and terminate

If the target is a Fire type:
	Score -10 and terminate`,


["InflictConfusion"]:
`If the target is already confused:
	Score -5 and terminate

If the target's ability is Own Tempo:
	Score -10 and terminate`,


["InflictParalysis"]:
`If the target's ability is Limber or Magic Guard:
	Score -10 and terminate`,


["InflictSleep"]:
`If the target's ability is Insomnia or Vital Spirit:
	Score -10 and terminate`,


["Ingrain"]:
`If the user is already under the effect of Ingrain:
	Score -10 and terminate`,


["LeechSeed"]:
`If the target is already under the effect of Leech Seed:
	Score -10 and terminate

If the target is Grass type:
	Score -10 and terminate

If the target's ability is Magic Guard:
	Score -10 and terminate`,


["LightScreen"]:
`If the user's side of the field already has Light Screen active:
	Score -8 and terminate`,


["LockOn"]:
`If the target is already under the effect of Lock-On:
	Score -10 and terminate

If the user's ability is No Guard, or the target's ability is No Guard:
	Score -10 and terminate`,


["Magnitude"]:
`If the target's ability is Levitate:
	Score -10 and terminate`,


["Memento"]:
`If the target's ability is Clear Body or White Smoke and the user's ability is not Mold Breaker:
	Score -10 and terminate

If the target's current attack is reduced to -6:
	Score -10 and terminate

If the target's current special attack is reduced to -6:
	Score -8 and terminate

If the user has no living party members:
	Score -10 and terminate`,


["Mist"]:
`If the user's side of the field already has Mist active:
	Score -8 and terminate`,


["MudSport"]:
`If the user is already under the effect of Mud Sport:
	Score -10 and terminate`,


["Nightmare"]:
`If the target is already having a nightmare:
	Score -10 and terminate

If the target is not asleep:
	Score -8 and terminate

If the target's ability is Magic Guard:
	Score -10 and terminate`,


["Ohko"]:
`If the target's ability is Sturdy and the user's ability is not Mold Breaker:
	Score -10 and terminate

If the target is a higher level than the user:
	Score -10 and terminate`,


["PerishSong"]:
`If the target is already under the effect of Perish Song:
	Score -10 and terminate`,


["RainDance"]:
`If the user's ability is Swift Swim or Hydration:
	If it is already raining:
		Score -8 and terminate
	Else:
		No score change and terminate
	
If the foe's ability is Hydration, and they are statused:
	Score -8 and terminate

If it is already raining:
	Score -8 and terminate`,


["Recover"]:
`If the user's HP is full:
	Score -8 and terminate`,


["Recycle"]:
`If the user has no item to recycle:
	Score -10 and terminate`,


["Reflect"]:
`If the user's side of the field already has Reflect active:
	Score -8 and terminate`,


["Refresh"]:
`If the user is not burned, paralyzed, or poisoned:
	Score -10 and terminate`,


["Safeguard"]:
`If the user is already under the effect of Safeguard:
	Score -8 and terminate`,


["Sandstorm"]:
`If the weather is already a sandstorm:
	Score -8 and terminate`,


["Selfdestruction"]:
`If the target's ability is Damp:
	Score -10 and terminate

If the user has other living party members:
	No score change and terminate

If the target has other living party members:
	Score -10 and terminate

Otherwise:
	Score -1 and terminate`,


["Snore"]:
`If the user is not asleep:
	Score -8 and terminate`,


["SoundBased"]:
`If the target's ability is Soundproof:
	Score -10 and terminate`,


["Spikes"]:
`If the target's side of the field already has 3 layers of Spikes:
	Score -10 and terminate

If the target has no other living party members:
	Score -10 and terminate`,


["Stockpile"]:
`If the user's Stockpile count is 3:
	Score -10 and terminate`,


["Substitute"]:
`If the user already has a substitute:
	Score -8 and terminate

If the user's HP is under 26%:
	Score -10 and terminate`,


["SunnyDay"]:
`If the user's ability is not Flower Gift, Leaf Guard, or Solar Power, and the foe's ability is Hydration, and the foe is statused:
	Score -10 and terminate

If it is already sunny:
	Score -8 and terminate`,


["Swallow"]:
`If the effectiveness of the move is 0x:
	Score -10 and terminate`,


["SwitchItems"]:
`If the target's ability is Sticky Hold:
	Score -10 and terminate

If the target is not holding any item:
	Score -10 and terminate`,


["TargetAccuracyDown1"]:
`If the target's accuracy is reduced to -6:
	Score -10 and terminate

If the user's ability is No Guard:
	Score -10 and terminate

If the target's ability is No Guard or Keen Eye:
	Score -10 and terminate`,


["TargetAttackDown1"]:
`If the target's attack is reduced to -6:
	Score -10 and terminate

If the target's ability is Hyper Cutter:
	Score -10 and terminate`,


["TargetDefenseDown1"]:
`If the target's defense is reduced to -6:
	Score -10 and terminate`,


["TargetEvasionDown1"]:
`If the target's evasion is reduced to -6:
	Score -10 and terminate

If the user's ability is No Guard:
	Score -10 and terminate

If the target's ability is No Guard:
	Score -10 and terminate`,


["TargetSpattackDown1"]:
`If the target's special attack is reduced to -6:
	Score -10 and terminate`,


["TargetSpdefenseDown1"]:
`If the target's special defense is reduced to -6:
	Score -10 and terminate`,


["TargetSpeedDown1"]:
`If the target's speed is reduced to -6:
	Score -10 and terminate

If the target's ability is certainly Speed Boost:
	Score -10 and terminate`,


["Teleport"]:
`Unconditionally:
	Score -10 and terminate`,


["Tickle"]:
`If the target's ability is Clear Body or White Smoke and the user's ability is not Mold Breaker:
	Score -10 and terminate

If the target's current attack is reduced to -6:
	Score -10 and terminate

If the target's current defense is reduced to -6:
	Score -8 and terminate`,


["Torment"]:
`If the target is already under the effect of Torment:
	Score -10 and terminate`,


["Toxic"]:
`If the target is Steel or Poison type:
	Score -10 and terminate

If the target's ability is Immunity, Magic Guard, or Poison Heal:
	Score -10 and terminate

If the weather is sunny and the target's ability is Leaf Guard, or the weather is rainy and the target's ability is Hydration:
	Score -10 and terminate`,


["UserAccuracyUp1"]:
`If the user's ability is No Guard, or the target's ability is No Guard:
	Score -10 and terminate

If the user's current accuracy is boosted to +6:
	Score -10 and terminate`,


["UserAttackUp1"]:
`If the user's current attack is boosted to +6:
	Score -10 and terminate`,


["UserDefenseUp1"]:
`If the user's current defense is boosted to +6:
	Score -10 and terminate`,


["UserEvasionUp1"]:
`If the user's ability is No Guard, or the target's ability is No Guard:
	Score -10 and terminate

If the user's current evasion is boosted to +6:
	Score -10 and terminate`,


["UserSpattackUp1"]:
`If the user's current special attack is boosted to +6:
	Score -10 and terminate`,


["UserSpdefenseUp1"]:
`If the user's current special defense is boosted to +6:
	Score -10 and terminate`,


["UserSpeedUp1"]:
`If the user's current speed is boosted to +6:
	Score -10 and terminate`,


["WaterSport"]:
`If the user is already under the effect of Water Sport:
	Score -10 and terminate`,


};