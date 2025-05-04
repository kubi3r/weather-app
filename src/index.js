import './styles.css';
import getWeather from './modules/getWeather.js';
import parseWeather from './modules/parseWeather.js';

const form = document.querySelector('form');
const locationInput = document.querySelector('input[id="location"]');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	getWeather(locationInput.value).then((weather) => {
		console.log(weather);
		console.log(parseWeather(weather));

		import(`./icons/${weather.currentConditions.icon}.svg`).then((icon) => {
			document.querySelector('img').src = icon.default;
		});
	});
});
