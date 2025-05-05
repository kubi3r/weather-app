import './styles.css';
import getWeather from './modules/getWeather.js';
import parseWeather from './modules/parseWeather.js';
import setIcon from './modules/setIcon.js';

const form = document.querySelector('form');
const locationInput = document.querySelector('input[id="location"]');

const location = document.querySelector('.location');
const temp = document.querySelector('.temp');
const conditions = document.querySelector('.conditions');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	getWeather(locationInput.value)
		.then((weather) => {
			console.log(weather);
			return parseWeather(weather);
		})
		.then((weather) => {
			setIcon(weather.icon);

			location.textContent = weather.location;
			temp.textContent = weather.temp + ' °C';
			conditions.textContent = weather.conditions;
		});
});
