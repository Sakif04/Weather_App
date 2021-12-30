import styles from './weather.module.css';

export default function Weather({weather}){
    if (weather.main===undefined)
    {return (' ');
    }else
    { return (
    <div className={styles.weather}>
      <img className={styles['weather-img']} src={`./images/${weather.weather[0].main}.png`} alt="weather-img" />
      <h3>{weather.name }, {weather.sys.country}</h3>
      <p>{weather.weather[0].main}</p>
      <p>{weather.weather[0].description}</p>
      <p>{weather.main.temp}° Celsius</p>
    </div>) 
    }
}
