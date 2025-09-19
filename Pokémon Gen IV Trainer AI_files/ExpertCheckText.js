const expertCheckText = {
["BatonPass"]:
`If the user's current attack, defense, special attack, special defense, or evasion is boosted to +3 or more:
	If the user will move before the foe, and the user's HP is over 60%:
		No scoring change and terminate
	
	If the user will move after the foe, and the user's HP is over 70%:
		No scoring change and terminate
	
	Otherwise:
		68.8% (176/256) chance of score +2 and terminate

If the user's current attack, defense, special attack, special defense, or evasion is boosted to +2 or more:
	If the user will move before the foe:
		If the user's HP is over 60%:
			Score -2 and terminate
		Else:
			No scoring change and terminate
	
	If the user will move after the foe:
		If the user's HP is under 70%:
			No scoring change and terminate
		Else:
			Score -2 and terminate

Otherwise:
	Score -2 and terminate`,


["BellyDrum"]:
`If the user's HP is under 90%:
	Score -2 and terminate`,


["Bide"]:
`If the user's HP is under 91%:
	Score -2 and terminate`,


["BrickBreak"]:
`If the target's side of the field has Reflect active:
	Score +1 and terminate`,


["CannotMiss"]:
`If the user's current accuracy is reduced to -5 or lower, or the target's current evasion is boosted to +5 or more:
	Score +1 and continue

If the user's current accuracy is reduced to -3 or lower, or the target's current evasion is boosted to +3 or more:
	60.9% (156/256) chance of score +1 and terminate`,


["Check_ChargeTurnInvuln"]:
`If the target is badly poisoned, or under the effect or Curse or Leech Seed:
	68.8% (176/256) chance of score +1 and terminate

If the current weather is hail and the user is is Rock, Ground, or Steel type, or the current weather is sandstorm and the user is Ice type:
	68.8% (176/256) chance of score +1 and terminate

If the user will move after the target:
	No scoring change and terminate

If the last move used by the target was Lock-On or Mind Reader:
	No scoring change and terminate

Otherwise:
	68.8% (176/256) chance of score +1 and terminate`,


["Check_Effectiveness"]:
`If the effectiveness of the move is 1/2x, or 1/4x:
	Score -1 and terminate`,


["Conversion"]:
`If the user's HP is under 91%:
	Score -2 and continue

If this is not the first turn of the battle:
	78.1% (200/256) chance of score -2 and terminate`,


["Counter"]:
`If the foe is asleep, infatuated, or confused:
	Score -1 and terminate

If the user's HP is under 31%:
	96.1% (246/256) chance of score -1 and continue

If the user's HP is under 51%:
	60.9% (156/256) chance of score -1 and continue

If the user also has the move Mirror Coat:
	60.9% (156/256) chance of score +4 and terminate

If the foe is under the effect of Taunt:
	60.9% (156/256) chance of score +1 and continue

If the last move used by foe is damaging:	
	If the last move used by the foe is special:
		Score -1 and terminate
	Else:
        60.9% (156/256) chance of score +1 and terminate

If either of the foe's types is Physical:
	No scoring change and terminate

Otherwise:
	49% (4017/8192) chance of score +4 and terminate`,


["Curse"]:
`If the user is Ghost type:
	If the user's HP is under 81%:
		Score -1 and terminate
	
	Otherwise:
		No scoring change and terminate

If the user's defense is boosted to:
	+4 or Higher:
		No scoring change and terminate
	+2 or +3:
		50% (128/256) chance of score +0 and terminate
		50% (128/256) chance of score +1 and terminate
	+1:
		25% (64/256)	chance of score +0 and terminate
		50% (128/256)	chance of score +1 and terminate
		25% (64/256)	chance of score +2 and terminate
	+0 or Lower:
		12.5% (32/256)	chance of score +0 and terminate
		37.5% (96/256)	chance of score +1 and terminate
		37.5% (96/256)	chance of score +2 and terminate
		12.5% (32/256)	chance of score +3 and terminate`,


["DamageAndUserSpattackDown2"]:
`If the user will move after the target, and the user's HP is under 81%:
	Score -1 and terminate

If the user will move before the target, and the user's HP is under 61%:
	Score -1 and terminate`,


["DamageRevenge"]:
`If the target is asleep, infatuated, or confused:
	Score -2 and terminate

With a 70.3% (180/256) chance:
	Score -2 and terminate
Else:
	Score +2 and terminate`,


["DestinyBond"]:
`If the user will move after the foe, or the user's HP is over 70%:
	Score -1 and terminate

Unconditionally:
	50% (128/256) chance of score -1 and continue

If the user's HP is under 51%:
	50% (128/256) chance of score +1 and continue

If the user's HP is under 31%:
	60.9% (156/256) chance of score +2 and terminate`,


["Disable"]:
`If the user will move after the target:
	No scoring change and terminate

If the last move used by the target is nondamaging, or the target has not yet used a move:
	60.9% (156/256) chance of score -1 and terminate

Otherwise:
	Score +1 and terminate`,


["DragonDance"]:
`If the user will move after the foe:
	50% (128/256) chance of score +1 and terminate

If the user's HP is under 51%:
	72.7% (186/256) chance of score -1 and terminate`,


["Encore"]:
`If the target is under the effect of Disable:
	88.3% (226/256) chance of score +3 and terminate

If the user will move after the target:
	Score -2 and terminate

If the last move used by the target is in the list below:
	88.3% (226/256) chance of score +3 and terminate

Otherwise:
	Score -2 and terminate`,


["Endeavor"]:
`If the target's HP is under 70%:
	Score -1 and terminate

If the user will move before the target, and the user's HP is over 40%:
	Score -1 and terminate

If the user will move after the target, and the user's HP is over 50%:
	Score -1 and terminate

Otherwise:
	Score +1 and terminate`,


["Endure"]:
`If the user's HP is under 4%:
	Score -1 and terminate

If the user's HP is under 35%:
	72.7% (186/256) chance of score +1 and terminate

Otherwise:
	Score -1 and terminate`,


["Facade"]:
`If the target is burned, paralyzed, poisoned, or badly poisoned:
	Score +1 and terminate`,


["FakeOut"]:
`Unconditionally:
	Score +2 and terminate`,


["Flatter"]:
`Unconditionally:
	50% (128/256) chance of score +1 and continue`,


["Fly"]:
`If the target knows the move Protect or Detect:
	Score -1 and terminate`,


["FocusPunch"]:
`If the target is asleep:
	Score +1 and terminate

If the target is infatuated or confused, and the user is behind a substitute:
	60.9% (156/256) chance of score +5 and terminate

If this is the user's first turn in battle:
	60.9% (156/256) chance of score +1 and terminate`,


["ForceSwitch"]:
`If the target's attack, defense, special attack, special defense, or evasion is boosted to +3 or more:
	50% (128/256) chance of score +2 and terminate

Otherwise:
	Score -3 and terminate`,


["Hail"]:
`If the user's HP is under 40%:
	Score -1 and terminate

If the weather is rain, sun, or sandstorm:
	Score +1 and terminate`,


["Haze"]:
`If the user's current attack, defense, special attack, special defense, or evasion is boosted to +3 or more, or the target's current attack, defense, special attack, special defense, or evasion is reduced to -3 or lower:
	80.5% (206/256) chance of score -3 and continue

If the user's current attack, defense, special attack, special defense, or evasion is reduced to -3 or lower, or the target's current attack, defense, special attack, special defense, or evasion is boosted to +3 or more:
	19.5% (50/256) chance of score +3 and terminate

Otherwise:
	80.5% (206/256) chance of score -1 and terminate`,


["HealBell"]:
`If the foe, and all of its other party members, are not statused:
	Score -5 and terminate`,


["HealBlock"]:
`If the target knows a move in the list below, or is under the effect of Ingrain, or the user is under the effect of Leech Seed:
	90.2% (231/256) chance of score +1 and terminate

Otherwise:
	33.8% (693/2048) chance of score +1 and terminate`,


["HighCritical"]:
`If the effectiveness of the move is 1/2x, or 1/4x:
	No scoring change and terminate

If the effectiveness of the move is 2x or 4x:
	50% (128/256) chance of score +1 and terminate

Otherwise:
	25% (64/256) chance of score +1 and terminate`,


["HighHpHighDamage"]:
`If the user will attack after the target:
	If the target's HP is over 70%:
		No scoring change and terminate
	Else:
		Score -1 and terminate

If the target's HP is over 50%:
	No score change and terminate

Otherwise:
	Score -1 and terminate`,


["HpDrain"]:
`If the effectiveness of the move is 1/2x, or 1/4x:
	80.5% (206/256) of score -3 and terminate`,


["Identify"]:
`If the user is Ghost type:
	47.3% (121/256) chance of score +2 and terminate

If the user's current evasion is boosted to +3 or more:
	68.8% (176/256) chance of score +2 and terminate

Otherwise:
	Score -2 and terminate`,


["Imprison"]:
`If this is not the first turn the user has been in battle:
	60.9% (156/256) chance of score +2 and terminate`,


["InflictConfusion"]:
`If the target's HP is over 70%:
	No scoring change and terminate

Unconditionally:
	50% (128/256) chance of score -1 and continue

If the target's HP is under 51%:
	Score -1 and continue

If the target's HP is under 31%:
	Score -1 and terminate`,


["InflictParalysis"]:
`If the user will move after the target:
	92.2% (236/256) chance of score +3 and terminate

If the user's HP is under 71%:
	Score -1 and terminate`,


["InflictPoison"]:
`If the user's HP is under 50%, or the target's HP is under 51%:
	Score -1 and terminate`,


["InflictSleep"]:
`If the user also has the move Nightmare or Dream Eater:
	50% (128/256) chance of score +1 and terminate`,


["KnockOff"]:
`If the target's HP is under 30%:
	No scoring change and terminate

If this is not the user's first turn in battle:
	29.7% (76/256) chance of score +1 and terminate`,


["LightScreen"]:
`If the user's HP is under 50%:
	Score -2 and terminate

If either of the foe's types is Physical:
	80.5% (206/256) chance of score -2 and terminate`,


["List_BadTrade"]:
`Macho Brace
Choice Scarf
Choice Band
Choice Specs
Iron Ball
Full Incense
Lagging Tail
Sticky Barb
Power Weight
Power Bracer
Power Belt
Power Lens
Power Band
Power Anklet
Toxic Orb
Flame Orb
Black Sludge`,


["List_Encore"]:
`Dream Eater
Meditate
Sharpen
Howl
Harden
Withdraw
Growth
Haze
Whirlwind
Roar
Conversion
Toxic
Light Screen
Rest
Super Fang
Amnesia
Supersonic
Confuse Ray
Sweet Kiss
PoisonPowder
Poison Gas
Stun Spore
Thunder Wave
Glare
Leech seed
Splash
Swords Dance
Encore
Conversion2
Mind Reader
Lock-On
Heal Bell
Aromatherapy
Spider Web
Mean Look
Block
Nightmare
Protect
Detect
Skill Swap
Foresight
Odor Sleuth
Perish Song
Sandstorm
Endure
Swagger
Attract
Safeguard
Rain Dance
Sunny Day
Belly Drum
Psych Up
Future Sight
Doom Desire
Fake Out
Stockpile
Spit Up
Swallow
Hail
Torment
Will-O-Wisp
Follow me
Charge
Trick
Role Play
Ingrain
Recycle
Knock Off
Imprison
Refresh
Grudge
Teeter Dance
Mud Sport
Water Sport
Dragon Dance
Camouflage`,


["List_GoodAbilities"]:
`Speed boost 
Battle Armor 
Sand Veil 
Static 
Flash Fire 
Wonder Guard 
Effect Spore 
Swift Swim 
Huge Power 
Rain Dish 
Cute Charm 
Shed Skin 
Marvel Scale 
Pure Power 
Chlorophyll 
Shield Dust`,


["List_HealingMoves"]:
`Dream Eater
Recover
Milk Drink
Slack Off
Softboiled
Morning Sun
Moonlight
Synthesis
Rest
Swallow
Absorb
Mega Drain
Leech Life
Giga Drain
Ingrain
Leech Seed`,


["List_MirrorMove"]:
`Sleep Powder
Lovely Kiss
Spore
Hypnosis
Sing
GrassWhistle
Shadow Punch
Sand-Attack
SmokeScreen
Toxic
Guillotine
Horn Drill
Fissure
Sheer Cold
Cross Chop
Aeroblast
Confuse Ray
Sweet Kiss
Screech
Cotton Spore
Scary Face
Fake Tears
Metal Sound
Thunder Wave
Glare
PoisonPowder
Shadow Ball
DynamicPunch
Hyper Beam
ExtremeSpeed
Thief
Covet
Attract
Swagger
Torment
Flatter
Trick
Superpower
Skill Swap`,


["List_StealItem"]:
`Chesto Berry
Lum Berry
Berry Juice
Oran Berry
Sitrus Berry
BrightPowder
Lax Incense
Leftovers
Light Ball
Thick Club`,


["LockOn"]:
`Unconditionally:
	50% (128/256) chance of score +2 and terminate`,


["LowHpHighDamage"]:
`If the user will move before the target:
	If the user's HP is over 33%:
		Score -1 and terminate
	
	If the user's HP is over 20%:
		No scoring change and terminate
	
	If the user's HP is under 8%:
		Score +1 and continue
	
	60.9% (156/256) chance of score +1 and terminate

If the user will move after the target:
	If the user's HP is over 60%:
		Score -1 and terminate
	
	If the user's HP is over 40%:
		No scoring change and terminate
	
	Otherwise:
		60.9% (156/256) chance of score +1 and terminate`,


["MagicCoat"]:
`If the user's HP is under 31%:
	60.9% (156/256) chance of score -1 and continue

If this is the user's first turn in battle:
	41.4% (106/256) chance of score +1 and terminate

Otherwise:
	88.3% (226/256) chance of score -1 and terminate`,


["MirrorCoat"]:
`If the foe is asleep, infatuated, or confused:
	Score -1 and terminate

If the user's HP is under 31%:
	96.1% (246/256) chance of score -1 and continue

If the user's HP is under 51%:
	60.9% (156/256) chance of score -1 and continue

If the user also has the move Counter:
	60.9% (156/256) chance of score +4 and terminate

If the foe is under the effect of Taunt:
	60.9% (156/256) chance of score +1 and continue

If the last move used by foe is damaging:
	If the last move used by the foe is physical:
		Score -1 and terminate
	Else:
		60.9% (156/256) chance of score +1 and terminate

If either of the foe's types is Special:
	No scoring change and terminate

Otherwise:
	49% (4017/8192) chance of score +4 and terminate`,


["MirrorMove"]:
`If the user will move before the target, and the last move used by the target is in the list below:
	50% (128/256) chance of score +2 and terminate

If the last move used by the target is not in the list below:
	68.8% (176/256) chance of score -1 and terminate`,


["MudSport"]:
`If the user's HP is under 50%:
	Score -1 and terminate

If the foe is Electric type:
	Score +1 and terminate

Otherwise:
	Score -1 and terminate`,


["MustRecharge"]:
`If the user will move after the target, and the user's HP is over 59%:
	Score -1 and terminate

If the user will move before the target, and the user's HP is over 40%:
	Score -1 and terminate`,


["PainSplit"]:
`If the target's HP is under 80%:
	Score -1 and terminate

If the user will move before the target:
	If the user's HP is over 40%:
		Score -1 and terminate
	Else:
		Score +1 and terminate

If the user will move after the target:
	If the user's HP is over 60%:
		Score -1 and terminate
	Else:
		Score +1 and terminate`,


["Protect"]:
`If the user's consecutive protection count is 2 or more:
	Score -2 and terminate

If the user is badly poisoned, or infatuated, or under the effect of Curse, Leech Seed, Yawn, or Perish Song, or the foe knows the move Recover, Slack Off, or Defense Curl:
	If the foe's last move was not Lock-On or Mind Reader:
		No scoring change and terminate
	Else:
		Score -2 and terminate

If the foe is badly poisoned, or infatuated, or under the effect of Curse, Leech Seed, Yawn, or Perish Song, or the foe's last move was not Lock-On or Mind Reader:
	Score +2 and continue
Else:
	33.2% (85/256) chance of score +2 and continue

Unconditionally:
	50% (128/256) chance of score -1 and continue

If the user's consecutive protection count is 1:
	Score -1 and continue
	50% (128/256) chance of score -1 and terminate`,


["PsychUp"]:
`If the target's current attack, defense, special attack, special defense, or evasion are boosted to +3 or more:
	If the user's current attack, defense, special attack, or special defense are at +0 or below:
		Score +1 and terminate
	
	If the user's current evasion is at +0 or below:
		Score +2 and terminate
	
	Otherwise:
		80.5% (206/256) chance of score -2 and terminate

Otherwise:
	Score -2 and terminate`,


["Pursuit"]:
`If this is the user's first turn in battle, and the target is Ghost or Psychic type:
	50% (128/256) chance of score +1 and terminate`,


["RainDance"]:
`If the user will move after the foe, and the user's ability is Swift Swim:
	Score +1 and terminate

If the user's HP is under 40%:
	Score -1 and terminate

If the current weather is sun, hail, or sandstorm, or the user's ability is Rain Dish:
	Score +1 and terminate`,


["RazorWind"]:
`If the effectiveness of the move is 1/2x, or 1/4x:
	Score -2 and terminate

If the target knows the move Protect or Detect:
	Score -2 and terminate

If the user's HP is under 39%:
	Score -1 and terminate`,


["Recover"]:
`If the user's HP is full:
	Score -3 and terminate

If the user will move before the target:
	Score -8 and terminate

If the user's HP is over 69%:
	With a 88.3% (226/256) chance:
		Score -3 and terminate

If the foe knows the move Snatch:
	56.2% (2301/4096) chance of score +2 and terminate

Otherwise:
	92.2% (236/256) chance of score +2 and terminate`,


["Recycle"]:
`If the user can recycle a Chesto Berry, Lum Berry, or Starf Berry:
	80.5% (206/256) chance of score +1 and terminate

Otherwise:
	Score -2 and terminate`,


["Reflect"]:
`If the user's HP is under 50%:
	Score -2 and terminate

If the either of the foe's types is Special:
	80.4% (206/256) chance of score -2 and terminate`,


["Refresh"]:
`If the user's HP is under 50%:
	Score -1 and terminate`,


["Rest"]:
`If the user will move before the foe:
	If the user's HP is full:
		Score -8 and terminate
	
	If the user's HP is over 50%:
		Score -3 and terminate
	
	If the user's HP is over 39%:
		With a 72.7% (186/256) chance:
			Score -3 and terminate

If the user will move after the foe:
	If the user's HP is over 70%:
		Score -3 and terminate
	
	If the user's HP is over 59%:
		With a 80.5% (206/256) chance:
			Score -3 and terminate

If the foe knows the move Snatch:
	77.3% (12669/16384) chance of score +3 and terminate

Otherwise:
	96.1% (246/256) chance of score +3 and terminate`,


["RolePlay"]:
`If the user's ability is in the list below:
	Score -1 and terminate

If the target's ability is in the list below:
	80.5% (206/256) chance of score +2 and terminate

Otherwise:
	Score -1 and terminate`,


["Selfdestruction"]:
`If the target's evasion is boosted to +1 or more:
	Score -1 and continue

If the target's evasion is boosted to +3 or more:
	50% (128/256) chance of score -1 and continue

If the user's HP is under 80%, or the user will attack after the target:
	If the user's HP is over 50%:
		50% (128/256) chance of score -1 and terminate
	
	If the user's HP is under 51%:
		50% (128/256) chance of score +1 and continue
	
	If the user's HP is under 30%:
		80.5% (206/256) chance of score +1 and terminate
Else:
	80.5% (206/256) chance of score -3 and terminate`,


["SleepTalk"]:
`If the user is currently asleep:
	Score +10 and terminate

Otherwise:
	Score -5 and terminate`,


["SmellingSalt"]:
`If the target is paralyzed:
	Score +1 and terminate`,


["Snatch"]:
`If this is the user's first turn in battle:
	41.4% (106/256) chance of score +2 and terminate

With an 11.7% (30/256) chance:
	No scoring change and terminate

If the user will move after the target:
	If the target's HP is over 25%:
		88.3% (226/256) chance of score -2 and terminate
	
	If the target knows the move Recover, Softboiled, Milk Drink, Slack Off, or Defense Curl:
		41.4% (106/256) chance of score +2 and terminate
	
	Otherwise:
		10.2% (26/256) chance of score +1 and terminate

If the user's HP is not full, or the target's HP is under 70%:
	88.3% (226/256) chance of score -2 and terminate

Otherwise:
	67.6% (5537/8192) chance of score -2 and terminate`,


["Snore"]:
`Unconditionally:
	Score +2 and terminate`,


["Solarbeam"]:
`If the effectiveness of the move is 1/2x, or 1/4x:
	Score -2 and terminate

If the target knows the move Protect or Detect:
	Score -2 and terminate

If the user's HP is under 39%:
	Score -1 and terminate`,


["SpitUp"]:
`If the user's stockpile count is 2 or 3:
	68.8% (176/256) chance of score +2 and terminate`,


["StealBerry"]:
`If this is the user's first turn in battle:
	75% (192/256) chance of score +1 and continue

Unconditionally:
	50% (128/256) chance of score +1 and terminate`,


["StealItem"]:
`If the user is holding an item in the list below:
	80.5% (206/256) chance of score +1 and terminate

Otherwise:
	Score -2 and terminate`,


["Substitute"]:
`If the user's HP is under 91%:
	60.9% (156/256) chance of score -1 and continue

If the user's HP is under 71%:
	60.9% (156/256) chance of score -1 and continue

If the user's HP is under 51%:
	60.9% (156/256) chance of score -1 and continue

If the user will move after the foe:
	No scoring change and terminate

If the last move used by the foe directly inflicts sleep, poison, paralysis, or burns, and the foe is not currently statused:
	60.9% (156/256) chance of score +1 and terminate

If the last move used by the foe was Supersonic, Confuse Ray, or Sweet Kiss, and the foe is not currently confused:
	60.9% (156/256) chance of score +1 and terminate

If the last move used by the foe was Leech Seed, and the foe is not currently under the effect of Leech Seed:
	60.9% (156/256) chance of score +1 and terminate`,


["SunnyDay"]:
`If the user's HP is under 40%:
	Score -1 and terminate

If the current weather is rain, hail, or sandstorm:
	Score +1 and terminate`,


["SunRecover"]:
`If the current weather is rain, sandstorm, or hail:
	Score -2 and continue`,


["SuperFang"]:
`If the target's HP is under 51%:
	Score -1 and terminate`,


["Superpower"]:
`If the user's attack is reduced to -1 or lower:
	Score -1 and terminate

If the user will move after the target, and the user's HP is over 59%:
	Score -1 and terminate

If the user will move before the target, and the user's HP is over 40%:
	Score -1 and terminate`,


["Swagger"]:
`If the user knows the move Psych Up:
	If the target's current attack is reduced to -3 or lower:
		If this is the first turn of the battle:
			Score +5 and terminate
		Else:
			Score +3 and terminate
	
	Else:
		Score -5 and terminate`,


["SwitchItems"]:
`If the user is holding a Choice Band:
	If the target is holding a Choice Band:
		Score -3 and terminate
	Else:
		Score +5 and terminate

If the user is holding a flavor-confusing berry (Figy, Wiki, Mago, Aguav, Iapapa), Macho Brace, or Choice Band:
	If the target is holding a flavor-confusing berry, Macho Brace, or Choice Band:
		Score -3 and terminate
	Else:
		80.5% (206/256) chance of score +2 and terminate

Otherwise:
	Score -3 and terminate`,


["TargetAccuracyDown1"]:
`If the user's HP is under 70%, or the target's HP is under 71%:
	60.9% (156/256) chance of score -1 and continue

If the target's accuracy is reduced to -2 or lower:
	68.8% (176/256) chance of score -2 and continue

If the target is badly poisoned:
	72.7% (186/256) chance of score +2 and continue

If the target is under the effect of Leech Seed:
	72.7% (186/256) chance of score +2 and continue

If the user is under the effect of Ingrain:
	50% (128/256) chance of score +1 and continue

If the target is under the effect of Curse:
	72.7% (186/256) chance of score +2 and continue

If the user's HP is over 70%, or the target's current accuracy level is +0:
	No scoring change and terminate

If the user's HP is under 40%, or the target's HP is under 40%:
	Score -2 and terminate

Otherwise:
	72.7% (186/256) chance of score -2 and terminate`,


["TargetAttackDown1"]:
`If the target's current attack level is not +0:
	Score -1 and continue

If the target's current attack level is not +0, and the user's HP is under 91%:
	Score -1 and continue

If the target's current attack is reduced to -3 or lower:
	80.5% (206/256) chance of score -2 and continue

If either of the foe's types is not Normal, Fighting, Ground, Rock, Bug, or Steel:
	80.5% (206/256) chance of score -2 and terminate`,


["TargetDefenseDown1"]:
`If the user's HP is under 70%, or the target's defense is reduced to -3 or lower:
	80.5% (206/256) chance of score -2 and continue

If the target's HP is under 71%:
	Score -2 and terminate`,


["TargetEvasionDown1"]:
`If the user's HP is under 70%, or the target's evasion is reduced to -3 or lower:
	80.5% (206/256) chance of score -2 and continue

If the target's HP is under 71%:
	Score -2 and terminate`,


["TargetSpattackDown1"]:
`If the target's current special attack level is not +0:
	Score -1 and continue

If the target's current special attack level is not +0, and the user's HP is under 91%:
	Score -1 and continue

If the target's current special attack is reduced to -3 or lower:
	80.5% (206/256) chance of score -2 and continue

If the last move used by the target is physical:
	50% (128/256) chance of score -2 and terminate`,


["TargetSpdefenseDown1"]:
`If the user's HP is under 70%, or the target's special defense is reduced to -3 or lower:
	80.5% (206/256) chance of score -2 and continue

If the target's HP is under 71%:
	Score -2 and terminate`,


["TargetSpeedDown1"]:
`If the user will move before the target:
	Score -3 and terminate

Otherwise:
	72.7% (186/256) chance of score +2 and terminate`,


["Toxic"]:
`If the user has a move that inflicts damage:
	If the user's HP is under 51%:
		80.5% (206/256) chance of score -3 and continue
	
	If the target's HP is under 51%:
		80.5% (206/256) chance of score -3 and continue

If the user knows the move Protect or Detect:
	76.6% (196/256) chance of score +2 and terminate`,


["Trap"]:
`If the target is badly poisoned, or infatuated, or under the effect or Curse, or Perish Song:
	50% (128/256) chance of score +1 and terminate`,


["UserAccuracyUp1"]:
`If the user's current accuracy is boosted to +3 or more:
	80.5% (206/256) chance of score -2 and continue

If the user's HP is under 71%:
	Score -2 and terminate`,


["UserAttackUp1"]:
`If the user's current attack is boosted to +3 or more:
	60.9% (156/256) chance of score -1 and continue

If the user's HP is full and its current attack is boosted to under +3:
	50% (128/256) chance of score +2 and continue

If the user's HP is over 39% and under 71%:
	84.4% (216/256) chance of score -2 and terminate

If the user's HP is under 40%:
	Score -2 and terminate`,


["UserDefenseUp1"]:
`If the user's current defense is boosted to +3 or more:
	60.9% (156/256) chance of score -1 and continue

If the user's HP is full and its current defense is boosted to under +3:
	50% (128/256) chance of score +2 and continue

If the user's HP is over 69%:
	With a 78.1% (200/256) chance:
		No scoring change and terminate

If the user's HP is under 40%:
	Score -2 and terminate

If the last move used by the foe is nondamaging, or the foe has not yet used a move:
	76.6% (196/256) chance of score -2 and terminate

If the last move used by the foe is a special move:
	Score -2 and terminate

Otherwise:
	5.5% (225/4096) chance of score -2 and terminate`,


["UserEvasionUp1"]:
`If the user's HP is over 89%:
	60.9% (156/256) chance of score +3 and continue

If the user's current evasion is boosted to +3 or more:
	50% (128/256) chance of score -1 and continue

If the foe is badly poisoned:
	If the user's HP is over 50%:
		80.5% (206/256) chance of score +3 and continue
	Else:
		55.3% (1133/2048) chance of score +3 and continue

If the foe is under the effect of Leech Seed:
	72.7% (186/256) chance of score +3 and continue

If the user is under the effect of Ingrain:
	50% (128/256) chance of score +2 and continue

If the foe is under the effect of Curse:
	72.7% (186/256) chance of score +3 and continue

If the user's HP is over 70%, or the user's current evasion level is +0:
	No scoring change and terminate

If the user's HP is under 40%, or the foe's HP is under 40%:
	Score -2 and terminate

Otherwise:
	72.7% (186/256) chance of score -2 and terminate`,


["UserSpattackUp1"]:
`If the user's current special attack is boosted to +3 or more:
	60.9% (156/256) chance of score -1 and continue

If the user's HP is full and its current special attack is boosted to under +3:
	50% (128/256) chance of score +2 and continue

If the user's HP is over 39% and under 71%:
	72.7% (186/256) chance of score -2 and terminate

If the user's HP is under 40%:
	Score -2 and terminate`,


["UserSpdefenseUp1"]:
`If the user's current special defense is boosted to +3 or more:
	60.9% (156/256) chance of score -1 and continue

If the user's HP is full and its current special defense is boosted to under +3:
	50% (128/256) chance of score +2 and continue

If the user's HP is over 69%:
	With a 78.1% (200/256) chance:
		No scoring change and terminate

If the user's HP is under 40%:
	Score -2 and terminate

If the last move used by the foe is nondamaging, or the foe has not yet used a move:
	76.6% (196/256) chance of score -2 and terminate

If the last move used by the foe is a physical move:
	Score -2 and terminate

Otherwise:
	5.5% (225/4096) chance of score -2 and terminate`,


["UserSpeedUp1"]:
`If the user will move before the foe:
	Score -3 and terminate

Otherwise:
	72.7% (186/256) chance of score +3 and terminate`,


["UTurn"]:
`If the user has no other living party members:
	No score change and terminate

If the user has a supereffective move against the target:
	75% (192/256) chance of score -2 and continue

If no move a party member knows (if used by the user) would deal more damage than the user's most damaging move:
	75% (192/256) chance of score -2 and terminate

If the user's HP is over 70%:
	75% (192/256) chance of score +1 and continue

If the user's HP is over 30%:
	50% (128/256) chance of score +1 and continue

If the user's HP is under 31%:
	25% (64/256) chance of score +1 and continue

If the user will move before the target:
	Score +1 and terminate
Else:
	50% (128/256) chance of score +1 and terminate`,


["VitalThrow"]:
`If the user will move after the target, or the user's HP is over 60%:
	No score change and terminate

If the user's HP is under 40%:
	80.5% (206/256) chance of score -1 and terminate

Otherwise:
	23.9% (1957/8192) chance of score -1 and terminate`,


["WakeUpSlap"]:
`If the target is asleep:
	Score +1 and terminate`,


["WaterSport"]:
`If the user's HP is under 50%:
	Score -1 and terminate

If the foe is Fire type:
	Score +1 and terminate

Otherwise:
	Score -1 and terminate`,


["WorrySeed"]:
`If the target knows the move Rest:
	Score +1 and continue

If the target's HP is over 49%:
	50% (128/256) chance of score +1 and continue

Unconditionally:
	75% (192/256) chance of score +1 and terminate`,


};