import './styles.css';
import getWeather from './modules/getWeather.js';

getWeather('amsterdam').then(console.log);
