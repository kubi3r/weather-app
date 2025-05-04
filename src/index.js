import './styles.css';
import getWeather from './modules/getWeather.js';
import parseWeather from './modules/parseWeather.js';

getWeather('amsterdam').then((weather) => {
	console.log(weather);
	console.log(parseWeather(weather));
});
