function getBasicWeatherAI(set) {
    let resultWeatherAIChecks = [];

    switch (set) {
        case "Ampharos1":
        case "Blastoise1":
        case "Dragonite9":
        case "Electabuzz2":
        case "Electrode2":
        case "Feraligatr1":
        case "Gorebyss2":
        case "Gyarados3":
        case "Huntail2":
        case "Lanturn3":
        case "Lapras6":
        case "Ludicolo1":
        case "Ludicolo3":
        case "Ludicolo4":
        case "Luvdisc1":
        case "Magneton2":
        case "Manectric2":
        case "Mantine1":
        case "Mantine2":
        case "Marill1":
        case "Omastar2":
        case "Poliwag1":
        case "Poliwhirl1":
        case "Raichu3":
        case "Raikou2":
        case "Regice2":
        case "Seadra1":
        case "Slowbro1":
        case "Starmie2":
        case "Suicune3":
        case "Surskit1":
        case "Wooper1":
        case "Zapdos2":
        case "Zapdos6":
            resultWeatherAIChecks.push("RainDance");
            break;

        case "Arcanine2":
        case "Bellossom1":
        case "Bellossom2":
        case "Blaziken1":
        case "Charizard1":
        case "Claydol3":
        case "Cradily3":
        case "Dragonite10":
        case "Entei2":
        case "Exeggutor1":
        case "Exploud2":
        case "Flareon4":
        case "Flygon2":
        case "Gloom2":
        case "Houndoom4":
        case "Lotad1":
            resultWeatherAIChecks.push("RainDance");

        case "Meganium1":
        case "Moltres3":
        case "Moltres5":
        case "Ninetales2":
        case "Porygon22":
        case "Rapidash3":
        case "Shiftry3":
        case "Sunkern1":
        case "Tropius2":
        case "Typhlosion1":
        case "Venusaur1":
        case "Venusaur4":
        case "Vileplume4":
            resultWeatherAIChecks.push("SunnyDay");
            break;

        case "Delibird1":
        case "Glalie1":
        case "Piloswine1":
        case "Regice4":
        case "Sealeo1":
        case "Sealeo2":
        case "Spheal1":
        case "Walrein1":
            resultWeatherAIChecks.push("Hail");
            break;

        case "Cacturne2":
        case "Camerupt1":
        case "Lunatone1":
        case "Magcargo1":
        case "Nosepass1":
        case "Numel1":
        case "Onix1":
        case "Phanpy1":
        case "Pupitar1":
        case "Sandshrew1":
        case "Sandslash1":
        case "Sandslash2":
        case "Shuckle2":
        case "ShuckleLS":
        case "Solrock1":
        case "Steelix2":
        case "Sudowoodo1":
        case "Trapinch1":
            resultWeatherAIChecks.push("Sandstorm");
            break;
    }


    resultWeatherAIChecks.push(set)

    return resultWeatherAIChecks.filter(check => Object.hasOwn(basicWeatherAICheckText, check));
};