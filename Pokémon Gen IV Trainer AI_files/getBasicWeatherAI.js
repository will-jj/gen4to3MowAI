function getBasicWeatherAI(set) {
	let resultWeatherAIChecks = [];

    resultWeatherAIChecks.push(set)

    return resultWeatherAIChecks.filter(check => Object.hasOwn(basicWeatherAICheckText, check));
};