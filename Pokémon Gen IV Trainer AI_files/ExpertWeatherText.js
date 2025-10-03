expertWeatherAICheckText = {

    ["Ampharos1"]:
    `If the user is faster, and hp >= 40: score +1`,


    
    ["Arbok1"]:
    `NA (never broken - since glare is "move power other" and so dig will never mis-read weather)`,


    
    ["Arcanine2"]:
    `NA (never broken - since Roar is "move power other" and so sunny day will not hallucinate another weather (move power other = sun))`,


    
    ["Azumarill1"]:
    `NA (never broken - since protect is "move power other" and so dig will never mis-read weather)`,


    
    ["Azumarill2"]:
    `NA (while dig can cause the AI to hallucinate sandstorm, Azumarill is not rock/steel/ground)`,


    
    ["Bellossom1"]:
    `NA (Synthesis causes "move power other" - and so sunny day and synthesis are unaffected)`,


    
    ["Bellossom2"]:
    `NA (Synthesis causes "move power other" - and so sunny day and synthesis are unaffected)`,


    
    ["Blastoise1"]:
    `If the user is faster, and hp >= 40: score +1 (Seismic Toss forces "move power other", which affects the "if enemy is slower" part of rain dance check to hallucinate sun)`,


    
    ["Blaziken1"]:
    `NA (Roar is "move power other" and so can never hallucinate the wrong weather for sunny day)`,


    
    ["Cacturne2"]:
    `NA (sandstorm does not have expert AI)`,


    
    ["Camerupt1"]:
    `NA (sandstorm does not have expert AI)`,


    
    ["Charizard1"]:
    `NA (Scary Face is "move power other" and so can never hallucinate the wrong weather for sunny day)`,


    
    ["Chinchou1"]:
    `NA (while take down can cause the AI to hallucinate sandstorm, chinchou is not rock/steel/ground)`,


    
    ["Clamperl1"]:
    `NA (Double Team is "move power other" and so cannot hallucinate sandstorm/hail)`,


    
    ["Claydol3"]:
    `NA (Sunny Day is "move power other" and so cannot hallucinate a non-sun weather)`,


    
    ["Cloyster2"]:
    `NA (would be more interesting if order placed it after protect with the count at 2)`,


    
    ["Cradily3"]:
    `If the user is faster, and the target's last move inflicts sleep, poison (while dealing damage), or absorbtion (Substitute AI, checking the move effect will lead to the hallucination of rain, sandstorm, or hail): score +1`,


    
    ["CrobatSS"]:
    `NA (Fly Can never hallucinate Sand or Hail, and Crobat has none of the types anyway)`,


    
    ["Croconaw2"]:
    `NA (Dig can never hallucainate Sand or Hail and Croconaw is the wrong type anyway)`,


    
    ["Delibird1"]:
    `If user HP >= 40%, score +1 (Hail in trytofaint will hallucinate "move power other" as "sun")`,


    
    ["Dragonite9"]:
    `If Earthquake is the strongest move AND the user is faster AND the user HP is >= 40%, score +1 (if Earthquake not strongest move; it hallucinates rain)`,


    
    ["Dragonite10"]:
    `If user HP >= 40%, score +1 (Earthquake will always hallucinate either rain or sand)`,


    
    ["Ekans1"]:
    `NA (Torment is "move power other" and cannot hallucinate sandstorm or hail)`,


    
    ["Electabuzz2"]:
    `If the user is faster, and hp >= 40: score +1 (Focus Punch forces "move power other", which affects the "if enemy is slower" part of rain dance check to hallucinate sun)`,


    
    ["Electrode2"]:
    `If the user is faster, and hp >= 40: score +1 (Swagger forces "move power other", which affects the "if enemy is slower" part of rain dance check to hallucinate sun)`,


    
    ["Entei2"]:
    `NA (Reflect is "move power other" and so hallucinates sun)`,


    
    ["Exeggutor1"]:
    `NA (Light Screen is "move power other" and so hallucinates sun)`,


    
    ["Exploud2"]:
    `NA (Counter is "move power other" and so hallucinates sun)`,


    
    ["Feraligatr1"]:
    `If the user is faster, and hp >= 40: score +1 (Roar forces "move power other", which affects the "if enemy is slower" part of rain dance check to hallucinate sun)`,


    
    ["Flareon4"]:
    `If user HP >= 40%, score +1 (Shadow Ball will always hallucinate either rain or sand)`,


    
    ["Flygon2"]:
    `NA (Sunny Day is "move power other" and so cannot hallucinate a non-sun weather)`,


    
    ["Glalie1"]:
    `If user HP >= 40%, score +1 (Protect is "move power other" and so hallucinates sun)`,


    
    ["Gligar1"]:
    `NA (While quick attack can maybe hallucinate sand, the sand type check is bugged to ice, and gligar is not ice type)`,


    
    ["Gloom1"]:
    `NA (Moonlight is "move power other" and so never hallucinates non-sun weather)`,


    
    ["Gloom2"]:
    `NA (Moonlight is "move power other" and so never hallucinates non-sun weather)`,


    
    ["Golduck1"]:
    `NA (Light Screen is "move power other" and so cannot hallucinate sand/hail)`,


    
    ["Gorebyss2"]:
    `If Body Slam is the strongest move AND user is faster AND user HP >= 40%, score +1 (if body slam is not strongest move; it hallucinates rain)`,


    
    ["Gyarados3"]:
    `If Earthquake is the strongest move AND user is faster AND user HP >= 40%, score +1 (if Earthquake is not strongest move; it hallucinates rain)`,


    
    ["Hitmontop1"]:
    `NA (While Quick attack can hallucinate sand, hitmontop is not ice type)`,


    
    ["Houndoom4"]:
    `NA (Sunny Day is "move power other" and so cannot hallucinate a non-sun weather)`,


    
    ["Huntail2"]:
    `If Body Slam is the strongest move AND user is faster AND user HP >= 40%, score +1 (if body slam is not strongest move; it hallucinates rain)`,


    
    ["Jolteon2"]:
    `NA (Roar is "move power other" and so can never hallucinate sand/hail)`,


    
    ["Jumpluff1"]:
    `NA (Synthesis causes "move power other" which hallucinates sun and does not affect Synthesis)`,


    
    ["Kabutops1"]:
    `NA (while knock off can hallucinate sand, the sand type check for dig is bugged to check ice, and kabutops is not ice)`,


    
    ["Lanturn3"]:
    `If the user is faster, and hp >= 40: score +1 (Rain Dance forces "move power other", which affects the "if enemy is slower" part of rain dance check to hallucinate sun)`,


    
    ["Lapras6"]:
    `If Blizzard is the strongest move AND user is faster AND hp >= 40%, score +1 (Blizzard as strongest move hallucinates sandstorm which affects the "if enemy is slower" part of the rain dance check)`,


    
    ["Larvitar1"]:
    `NA (Dragon Dance is "move power other" and so cannot hallucinate sand/hail)`,


    
    ["Lotad1"]:
    `Rain Dance: If Mega Drain is strongest move AND user is faster AND hp >= 40; score +1
Sunny Day: If user is faster and hp >=40; score +1 (mega drain will always hallucinate rain or sand, but if user is slower then rain dance will fix the func result when checking the ability)`,


    
    ["Ludicolo1"]:
    `NA (The bug technically affects ludicolo but since it must be rain dish OR swift swim, it always gets +1 anyway)`,


    
    ["Ludicolo3"]:
    `NA (The bug technically affects ludicolo but since it must be rain dish OR swift swim, it always gets +1 anyway)`,


    
    ["Ludicolo4"]:
    `NA (The bug technically affects ludicolo but since it must be rain dish OR swift swim, it always gets +1 anyway)`,


    
    ["Lunatone1"]:
    `NA (No Sandstorm expert ai)`,


    
    ["Luvdisc1"]:
    `Dive: NA
Rain Dance: if user is faster AND hp >= 40; score +1 (rain dance will always hallucinate sun)`,


    
    ["Magcargo1"]:
    `NA (no Sandstorm expert ai)`,


    
    ["Magneton2"]:
    `If user is faster and hp >= 40%; score +1 (metal sound will hallucinate sun)`,


    
    ["Manectric2"]:
    `If user is faster and hp >= 40%; score +1 (roar will hallucinate sun)`,


    
    ["Mantine1"]:
    `If Icy wind is strongest move AND user is faster AND hp >= 40%; score +1 (icy wind must be strongest move to hallucinate sandstorm)`,


    
    ["Mantine2"]:
    `If user is faster and hp >= 40%; score +1 (Confuse ray will hallucinate sun)`,


    
    ["Marill1"]:
    `If return is strongest move AND user is faster AND hp >= 40%; score +1 (return must be strongest move to hallucinate sandstorm)`,


    
    ["Meganium1"]:
    `Sunny Day: NA (Synthesis hallucinates sun, no change)
Synthesis: if enemy type1 is NOT a special type and type2 is fighting, flying or poison: score -2. todo; check if monotype hits this also`,


    
    ["Moltres3"]:
    `NA (Rest hallucinates sun)`,


    
    ["Moltres5"]:
    `if user hp >= 40%; score +1 (facade will hallucinate rain or sand always)`,


    
    ["Murkrow1"]:
    `NA (taunt never hallucinates hail/sand)`,


    
    ["Nincada1"]:
    `NA (protect never hallucinates hail/sand)`,


    
    ["Ninetales2"]:
    `NA (Sunny Day is "move power other" and so cannot hallucinate a non-sun weather)`,


    
    ["Ninjask1"]:
    `NA (Although dig can hallucinate sand if strongest move; ninjask is not ice type (the sand check is bugged to check ice))`,


    
    ["Nosepass1"]:
    `NA (sandstorm does not have expert AI)`,


    
    ["Numel1"]:
    `NA (sandstorm does not have expert AI)`,


    
    ["Oddish1"]:
    `NA (moonlight is "move power other" and so never hallucinates non-sun weather)`,


    
    ["Omastar2"]:
    `if user is faster AND hp >= 40%; score +1 (Protect will hallucinate sun)`,


    
    ["Onix1"]:
    `NA (sandstorm does not have expert AI)`,


    
    ["Parasect2"]:
    `NA (Double Team is "move power other" and so cannot hallucinate sandstorm/hail)`,


    
    ["Phanpy1"]:
    `NA (sandstorm does not have expert AI)`,


    
    ["Piloswine1"]:
    `Dig: NA (lightscreen hallucinates sun)
Hail: if user HP >= 40%; score +1 (light screen hallucinates sun)`,


    
    ["Politoed1"]:
    `NA (swagger cannot hallucinate sand/hail)`,


    
    ["Poliwag1"]:
    `if user is faster AND hp >= 40%; score +1 (Rain dance will hallucinate sun)`,


    
    ["Poliwhirl1"]:
    `if user is faster AND hp >= 40%; score +1 (Rain dance will hallucinate sun)`,


    
    ["Poliwrath1"]:
    `NA (bubblebeam can hallucinate sand but poliwrath is not ice type)`,


    
    ["Ponyta1"]:
    `NA (Tail Whip is "move power other" and so cannot hallucinate sandstorm/hail)`,


    
    ["Porygon22"]:
    `NA (Recover will hallucinate sun)`,


    
    ["Pupitar1"]:
    `Sandstorm: NA (sandstorm does not have expert AI)
Dig: NA (sandstorm cannot hallucinate sand/hail)`,


    
    ["Raichu3"]:
    `if user is faster AND hp >= 40%; score +1 (Attract will hallucinate sun)`,


    
    ["Raikou2"]:
    `if user is faster AND hp >= 40%; score +1 (Reflect will hallucinate sun)`,


    
    ["Rapidash2"]:
    `NA (attract can never hallucinate sand/hail)`,


    
    ["Rapidash3"]:
    `NA (hypnosis will hallucinate sun)`,


    
    ["Regice2"]:
    `if brick break is strongest move AND user is faster AND hp >= 40%; score +1 (brick break must be strongest move to hallucinate sand)`,


    
    ["Regice4"]:
    `If user HP >= 40%; score +1 (thunder wave will hallucinate sun)`,


    
    ["Rhyhorn1"]:
    `NA (Roar can never hallucinate sand/hail)`,


    
    ["Roselia2"]:
    `NA (Synthesis can never hallucinate non-sun weather)`,


    
    ["Sandshrew1"]:
    `Sandstorm: NA (sandstorm does not have expert AI)
Dig: NA (sand-attack cannot hallucinate sand/hail)`,


    
    ["Sandslash1"]:
    `NA (sandstorm does not have expert AI)`,


    
    ["Sandslash2"]:
    `NA (sandstorm does not have expert AI)`,


    
    ["Seadra1"]:
    `if user is faster AND hp >= 40%; score +1 (Rain dance will hallucinate sun)`,


    
    ["Sealeo1"]:
    `if user hp >= 40%; score +1 (rest hallucinates sun)`,


    
    ["Sealeo2"]:
    `if user is faster AND hp >= 40%; score +1 (Hail will hallucinate sun)`,


    
    ["Seel1"]:
    `NA (Fake out cant hallucinate hail and Seel isnt a "sandstorm" type)`,


    
    ["Shiftry2"]:
    `NA (Rest can't hallucinate sand/hail)`,


    
    ["Shiftry3"]:
    `NA (Synthesis hallucinates sun; which does not impact Sunny day or synthesis)`,


    
    ["Shuckle2"]:
    `Sandstorm: NA (sandstorm does not have expert AI)
Dig: NA (double team cannot hallucinate sand/hail)`,


    
    ["ShuckleLS"]:
    `NA (sandstorm does not have expert AI)`,


    
    ["Skarmory3"]:
    `NA (Fly activates sand hallucination, but fly is bugged to lookup ice type in sand anyway, and so skarm isnt affected)`,


    
    ["Skiploom1"]:
    `NA (Synthesis hallucinates sun; which does not impact synthesis)`,


    
    ["Slowbro1"]:
    `If Ice Punch is strongest move AND user is faster AND hp >= 40%; score +1 (Ice Punch must be strongest move to hallucinate sandstorm)`,


    
    ["Solrock1"]:
    `NA (sandstorm does not have expert AI)`,


    
    ["Spheal1"]:
    `if user hp >= 40%; score +1 (mud-slap will always hallucinate rain or sand)`,


    
    ["Spoink1"]:
    `NA (confuse ray will hallucinate sun)`,


    
    ["Starmie2"]:
    `if user is faster AND hp >= 40%; score +1 (recover will hallucinate sun)`,


    
    ["Steelix2"]:
    `NA (sandstorm does not have expert AI)`,


    
    ["Sudowoodo1"]:
    `NA (sandstorm does not have expert AI)`,


    
    ["Suicune2"]:
    `NA (protect never hallucinates hail/sand)`,


    
    ["Suicune3"]:
    `if user is faster AND hp >= 40%; score +1 (Roar will hallucinate sun)`,


    
    ["Sunkern1"]:
    `NA (sun hallucination does not matter)`,


    
    ["Surskit1"]:
    `if quick attack is strongest move AND user is faster AND hp >= 40%; score +1 (QA must be strongest move to hallucinate sandstorm)`,


    
    ["Swellow1"]:
    `NA (while quick attack can hallucinate sand, swellow is not ice type)`,


    
    ["Swinub1"]:
    `NA (endure will never hallucinate sand/hail)`,


    
    ["Taillow1"]:
    `NA (focus energy will never hallucinate sand/hail)`,


    
    ["Trapinch1"]:
    `Sandstorm: NA (sandstorm does not have expert AI)
Dig: NA (sand-attack cannot hallucinate sand/hail)`,


    
    ["Tropius2"]:
    `Sunny Day: if HP >= 40%; score +1 (Body slam will always hallucinate rain or sand)
Synthesis: score -2 (body slam will always hallucinate rain or sand)`,


    
    ["Typhlosion1"]:
    `NA (Roar will always hallucinate sun)`,


    
    ["Venusaur1"]:
    `NA (sleep powder will always hallucinate sun)`,


    
    ["Venusaur4"]:
    `if user HP >= 40%; score +1 (Earthquake will always hallucinate rain or sand)`,


    
    ["Vibrava1"]:
    `NA (while rock tomb can hallucinate sandstorm; the dig check looks up ice type due to a bug, and vibrava is not ice type)`,


    
    ["Victreebel1"]:
    `NA (synthesis will hallucinate sun, which has no effect)`,


    
    ["Victreebel4"]:
    `NA (synthesis will hallucinate sun, which has no effect)`,


    
    ["Vileplume1"]:
    `NA (aromatherapy will hallucinate sun, which has no effect)`,


    
    ["Vileplume4"]:
    `NA (synthesis will hallucinate sun, which has no effect)`,


    
    ["Walrein1"]:
    `if user HP >= 40%; score +1 (protect will hallucinate sun)`,


    
    ["Wingull1"]:
    `NA (steel wing can hallucinate sand, but wingull is not an ice type for the check)`,


    
    ["Wooper1"]:
    `Dig: NA (rain dance hallucinates sun)

Rain Dance: if user faster AND user HP >= 40%; score +1 (rain dance hallucinates sun)`,


    
    ["Xatu2"]:
    `NA (attract can never hallucinate sand/hail)`,


    
    ["Zapdos2"]:
    `if user is faster AND hp >= 40%; score +1 (double team will hallucinate sun)`,


    
    ["Zapdos6"]:
    `if double-edge is strongest move AND user is faster AND hp >= 40%; score +1 (double edge must be most powerful to hallucinate sandstorm)`,


    
}