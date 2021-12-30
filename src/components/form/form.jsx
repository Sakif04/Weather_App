import { useEffect, useState } from 'react';
import Weather from '../weather/weather';
import styles from './form.module.css';


const api = {base:'https://api.openweathermap.org/data/2.5/weather?q=',
  key:'95304fbeb9dc7ba5ccfccc8439c86ced'};

export default function Form() {

  const [locationInput, setLocationInput] = useState('');
  const [request ,setRequest]=useState(false);
  const [weather, setWeather] = useState({});
  const onSubmit=(e)=> {
    e.preventDefault();
    if(request===false){
      setRequest(true)
    }
    else{
      
      setRequest(false)
    }
    console.log(request);
    

  }
  
  
  useEffect(()=>{ 
    const api_url=`${api.base}${locationInput}&units=metric&appid=${api.key}`;
      console.log(api_url);
      fetch(api_url)
      .then(res =>res.json())
      .then(result => {
        console.log(result);
        setWeather(result);
      });
      setLocationInput('');
      console.log(weather)
    },[request]
 )
 


  return (
    <>
      <div className={styles.form}>
        <form onSubmit={onSubmit}>
          <div className="input-group rounded justify-content-center">
            <div className="input-group-col-sm">
              <span className={`text-center ${styles.location}`}id="inputGroup-sizing-sm">Location</span>
              <input
                value={locationInput}
                type="text"
                className="form-control"
                aria-labelledby="Large"
                aria-describedby="inputGroup-sizing-sm-5"
                onChange={(e) => setLocationInput(e.target.value)}
              />

            </div>
          </div>
          <div className="m-3 flex justify-content-center text-center">
            <button type="submit" className=" btn-primary rounded">Submit</button>
          </div>
        </form>
      </div>
       <div className="weather sunny">
        <Weather weather={weather}/>
       </div>
    </>

  );
}
