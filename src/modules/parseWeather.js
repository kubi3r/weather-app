export default function (weatherData) {
	console.log(weatherData.currentConditions.feelslike);
	const parsedData = {
		location: weatherData.resolvedAddress,
		description: weatherData.description,
		feelslike: weatherData.currentConditions.feelslike,
		temp: weatherData.currentConditions.temp,
		conditions: weatherData.currentConditions.conditions,
		icon: weatherData.currentConditions.icon,
	};

	return parsedData;
}
