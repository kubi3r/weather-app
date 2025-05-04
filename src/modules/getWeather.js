export default async function (location) {
	const response = await fetch(
		`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=LH86US58PHVCL6NZTAKMXFNTK`,
	);
	return await response.json();
}
