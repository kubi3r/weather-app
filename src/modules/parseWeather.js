export default function (weatherData) {
	const parsedData = {
		address: weatherData.address,
		description: weatherData.description,
		feelslike: weatherData.currentConditions.feelslike,
		temp: weatherData.currentConditions.temp,
		conditions: weatherData.currentConditions.conditions,
		icon: weatherData.currentConditions.icon,
	};

	return parsedData;
}
