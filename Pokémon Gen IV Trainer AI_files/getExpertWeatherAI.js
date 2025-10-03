function getExpertWeatherAI(set) {
	let resultWeatherAIChecks = [];

    resultWeatherAIChecks.push(set)
    
    return resultWeatherAIChecks.filter(check => Object.hasOwn(expertWeatherAICheckText, check));
};