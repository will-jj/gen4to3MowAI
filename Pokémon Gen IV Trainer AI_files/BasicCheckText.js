const basicCheckText = {
["AquaRing"]:
`If the user is already under the effect of Aqua Ring:
	Score -10 and terminate`,


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
`If the user's ability is Simple, and its current defense or special defense is boosted to +3 or more:
	Score -10 and terminate

If the user's current defense is boosted to +6:
	Score -10 and terminate

If the user's current special defense is boosted to +6:
	Score -8 and terminate`,


["BulkUp"]:
`If the user's ability is Simple, and its current attack or defense is boosted to +3 or more:
	Score -10 and terminate

If the user's current attack is boosted to +6:
	Score -10 and terminate

If the user's current defense is boosted to +6:
	Score -8 and terminate`,


["CalmMind"]:
`If the user's ability is Simple, and its current special attack or special defense is boosted to +3 or more:
	Score -10 and terminate

If the user's current special attack is boosted to +6:
	Score -10 and terminate

If the user's current special defense is boosted to +6:
	Score -8 and terminate`,


["Camouflage"]:
`If the user is currently under the effect of Camouflage:
	Score -10 and terminate`,


["Captivate"]:
`If the target's ability is Oblivious, Clear Body, or White Smoke, and the user's ability is not Mold Breaker:
	Score -10 and terminate

If the target is not the opposite gender as the user:
	Score -10 and terminate

If the target's special attack is reduced to -6:
	Score -10 and terminate`,


["Check_ClearBody"]:
`If the target's ability is Clear Body or White Smoke:
	Score -10 and terminate`,


["Check_DamageImmunity"]:
`If the effectiveness of the move is 0x:
	Score -10 and terminate`,


["Check_FlashFire"]:
`If the target's ability is Flash Fire, and the user's ability is not Mold Breaker:
	Score -12 and terminate`,


["Check_Levitate"]:
`If the target's ability is Levitate, and the user's ability is not Mold Breaker:
	Score -12 and terminate`,


["Check_Soundproof"]:
`If the target's ability is Soundproof, and the user's ability is not Mold Breaker:
	Score -10 and terminate`,


["Check_TargetSafeguard"]:
`If the target is protected by Safeguard:
	Score -10 and terminate`,


["Check_TargetStatused"]:
`If the target is already statused:
	Score -10 and terminate`,


["Check_TrickRoom"]:
`If Trick Room is currently active:
	Score -10 and terminate`,


["Check_UserStockpile"]:
`If the user's Stockpile count is 0:
	Score -10 and terminate`,


["Check_VariableType"]:
`If the target is immune to the move's damage due to Volt Absorb, Motor Drive, Water Absorb, or Flash Fire, and the user's ability is not Mold Breaker:
	Score -12 and terminate`,


["Check_VoltAbsorb"]:
`If the target's ability is Volt Absorb or Motor Drive, and the user's ability is not Mold Breaker:
	Score -12 and terminate`,


["Check_WaterAbsorb"]:
`If the target's ability is Water Absorb, and the user's ability is not Mold Breaker:
	Score -12 and terminate`,


["Check_WonderGuard"]:
`If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x or 4x, and the user's ability is not Mold Breaker:
	Score -12 and terminate`,


["Copycat"]:
`If this is the first turn of the battle:
	Score -10 and terminate`,


["Curse"]:
`If the user is Ghost type:
	If the target is already under the effect of Curse:
		Score -10 and terminate
	
	If the target's ability is Magic Guard:
		Score -10 and terminate

If the user is not Ghost type:
	If the user's ability is Simple, and its current attack or defense is boosted to +3 or more:
		Score -10 and terminate
	
	If the user's current attack or defense is boosted to +6:
		Score -10 and terminate`,


["Defog"]:
`If the target's evasion is not reduced to -6:
	No scoring change and terminate

If the target's side of the field has Light Screen or Reflect active:
	No scoring change and terminate

If the weather is foggy:
	No scoring change and terminate

If the target has no other living party members:
	Score -10 and terminate

If the target's side of the field does not have Stealth Rock, Spikes, or Toxic Spikes active:
	Score -10 and terminate`,


["Disable"]:
`If the target is already disabled:
	Score -8 and terminate`,


["DragonDance"]:
`If the user's ability is Simple, and its current attack or speed is boosted to +3 or more:
	Score -10 and terminate

If the user's current attack is boosted to +6:
	Score -10 and terminate

If the user's current speed is boosted to +6:
	Score -8 and terminate`,


["DreamEater"]:
`If the target is not asleep:
	Score -8 and terminate`,


["Embargo"]:
`If the target is already under the effect of Embargo:
	Score -10 and terminate

If the target has no item it could Recycle:
	No scoring change and terminate

If the fight is a Frontier fight:
	Score -10 and terminate`,


["Encore"]:
`If the target is already under the effect of Encore:
	Score -8 and terminate`,


["FakeOut"]:
`If this is not the first turn the user is active:
	Score -10 and terminate`,


["Fling"]:
`If the user is not holding an item:
	Score -10 and terminate

If the user is holding a Poison Barb or Toxic Orb:
	If the user's ability is Poison Heal, or the target is protected by Safeguard, or is already statused, or is Poison or Steel type, or has the ability Immunity, Poison Heal, or Magic Guard:
		If the user is protected by Safeguard, or is already statused, or is Poison or Steel type, or has the ability Klutz, Immunity, Poison Heal, Magic Guard, or Guts:
			Score -5 and terminate
		Else:
			Score +3 and terminate

If the user is holding a Flame Orb:
	If the target is protected by Safeguard, or is already statused, or is Fire type, or has the ability Magic Guard or Water Veil:
		If the user protected by Safeguard, or is already statused, or is Fire type, or has the ability Klutz, Magic Guard, Water Veil, or Guts:
			Score -5 and terminate
		Else:
			Score +3 and terminate

If the user is holding a Light Ball:
	If the target is protected by Safeguard, or is already statused, or has the ability Limber:
		Score -5 and terminate`,


["FocusEnergy"]:
`If the user is already under the effect of Focus Energy:
	Score -10 and terminate`,


["ForceSwitch"]:
`If the target has no other living party members:
	Score -10 and terminate

If the target's ability is Suction Cups, and the user's ability is not Mold Breaker:
	Score -10 and terminate`,


["FutureAttack"]:
`If the user's side is awaiting a future attack:
	Score -12 and terminate

If the target's side is awaiting a future attack:
	Score -12 and terminate`,


["GastroAcid"]:
`If the target is already under the effect of Gastro Acid:
	Score -10 and terminate

If the target's ability is Multitype, Truant, Slow Start, Stench, Run Away, Pickup, or Honey Gather:
	Score -10 and terminate`,


["Gravity"]:
`If Gravity is currently active:
	Score -10 and terminate`,


["GuardSwap"]:
`If the user's defense boosts and special defense boosts are both equal to or greater than the target's:
	Score -10 and terminate`,


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


["HealingWish"]:
`Unconditionally:
	Score -20 and continue

If the user has no other living party members:
	Score -10 and terminate

If the user has no other living party member that is statused, or not at full HP:
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


["LastResort"]:
`If the user has not used all of its other moves:
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


["LuckyChant"]:
`If the user's side of the field is already under the effect of Lucky Chant:
	Score -10 and terminate`,


["LunarDance"]:
`Unconditionally:
	Score -20 and continue

If the user has no other living party members:
	Score -10 and terminate

If the user has no other living party member that is statused, or not at full HP, or missing any PP:
	Score -10 and terminate`,


["MagnetRise"]:
`If the user is already under the effect of Magnet Rise, or has the ability Levitate, or is Flying type:
	Score -10 and terminate`,


["Magnitude"]:
`If the target's ability is Levitate, and the user's ability is not Mold Breaker:
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


["MetalBurst"]:
`If the target's ability is Stall, or the target is holding a Shiny Stone:
	Score -10 and terminate

If the user's ability is Stall, or the user is holding a Shiny Stone:
	No scoring change and terminate

If the user will attack before the target:
	Score -10 and terminate`,


["MiracleEye"]:
`If the target is already under the effect of Miracle Eye:
	Score -10 and terminate`,


["Mist"]:
`If the user's side of the field already has Mist active:
	Score -8 and terminate`,


["MudSport"]:
`If the user is already under the effect of Mud Sport:
	Score -10 and terminate`,


["NaturalGift"]:
`If the user is not holding a berry:
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


["PowerSwap"]:
`If the user's attack boosts and special attack boosts are both equal to or greater than the target's:
	Score -10 and terminate`,


["PowerTrick"]:
`If the user is already under the effect of Power Trick:
	Score -10 and terminate`,


["PsychoShift"]:
`If the user is not statused:
	Score -10 and terminate

If the target is protected by Safeguard, or is already statused:
	Score -10 and terminate

If the user is poisoned:
	If the user's ability is Poison Heal:
		Score -10 and terminate
	
	If the target is Poison or Steel type, or has the ability Immunity, Poison Heal, or Magic Guard:
		Score -10 and terminate
	
If the user is burned:
	If the target is Fire type, or has the ability Water Veil or Magic Guard:
		Score -10 and terminate

If the user is paralyzed:
	If the target's ability is Limber:
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
`If the target's ability is Damp, and the user's ability is not Mold Breaker:
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
`If the target's ability is Soundproof, and the user's ability is not Mold Breaker:
	Score -10 and terminate`,


["Spikes"]:
`If the target's side of the field already has 3 layers of Spikes:
	Score -10 and terminate

If the target has no other living party members:
	Score -10 and terminate`,


["StealthRock"]:
`If the target's side of the field already has Stealth Rock active:
	Score -10 and terminate

If the target has no other living part members:
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


["Tailwind"]:
`If Tailwind is aleady active:
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


["ToxicSpikes"]:
`If the target's side of the field already has 2 layers of Toxic Spikes:
	Score -10 and terminate

If the target has no other living party members:
	Score -10 and terminate`,


["TrickRoom"]:
`If the user will attack before the foe:
	Score -10 and terminate

If the user speed ties with the foe:
	50% (128/256) chance of score -10 and terminate`,


["UserAccuracyUp1"]:
`If the user's ability is No Guard, or the target's ability is No Guard:
	Score -10 and terminate

If the user's ability is Simple, and its accuracy is boosted to +3 or more:
	Score -10 and terminate

If the user's current accuracy is boosted to +6:
	Score -10 and terminate`,


["UserAttackUp1"]:
`If the user's ability is Simple, and its attack is boosted to +3 or more:
	Score -10 and terminate

If the user's current attack is boosted to +6:
	Score -10 and terminate`,


["UserDefenseUp1"]:
`If the user's ability is Simple, and its defense is boosted to +3 or more:
	Score -10 and terminate

If the user's current defense is boosted to +6:
	Score -10 and terminate`,


["UserEvasionUp1"]:
`If the user's ability is No Guard, or the target's ability is No Guard:
	Score -10 and terminate

If the user's ability is Simple, and its evasion is boosted to +3 or more:
	Score -10 and terminate

If the user's current evasion is boosted to +6:
	Score -10 and terminate`,


["UserSpattackUp1"]:
`If the user's ability is Simple, and its special attack is boosted to +3 or more:
	Score -10 and terminate

If the user's current special attack is boosted to +6:
	Score -10 and terminate`,


["UserSpdefenseUp1"]:
`If the user's ability is Simple, and its special defense is boosted to +3 or more:
	Score -10 and terminate

If the user's current special defense is boosted to +6:
	Score -10 and terminate`,


["UserSpeedUp1"]:
`If the user's ability is Simple, and its speed is boosted to +3 or more:
	Score -10 and terminate

If the user's current speed is boosted to +6:
	Score -10 and terminate`,


["WaterSport"]:
`If the user is already under the effect of Water Sport:
	Score -10 and terminate`,


["WorrySeed"]:
`If the target's ability is Truant, Insomnia, Vital Spirit, or Multitype:
	Score -10 and terminate

If the target is asleep, and does not have the move Sleep Talk or Snore:
	Score -10 and terminate`,


};