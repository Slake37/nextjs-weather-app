import {RiCelsiusLine} from 'react-icons/ri'
import {LuWind,LuCompass,LuDroplets} from 'react-icons/lu'
import {WiHumidity} from 'react-icons/wi'
import Link from 'next/link'
import ThreedDaysForecast from '../components/threedaysforecast'

async function fetchLocation(location){
   

    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${location}&aqi=no`)
    const forecast = await response.json()
    console.log(forecast)
    return forecast
}

const LocationPage = async ({params:{location}}) => {

    const forecast = await fetchLocation(location)

  return (
    <div className='flex flex-col justify-center items-center text-[#EEEEEE] mt-[10rem]'>
        <Link href={'/'} className='bg-[#EEEEEE] text-[#222831] px-5 py-1 rounded-md drop-shadow-lg text-lg mb-5 font-bold'>Search new location</Link>
        <h1 className='text-3xl font-bold text-center'>Current weather in {forecast.location.name}</h1>
        <img src={forecast.current.condition.icon} alt={forecast.current.condition.text} className='w-[7rem] mt-3 object-contain' />
        <p className='text-2xl  font-bold'>{forecast.current.condition.text}</p>
        <p className='flex justify-center items-center text-4xl'>{forecast.current.temp_c}<RiCelsiusLine/></p>
        <div className='mt-5 grid grid-cols-2 gap-5'>
            <p className='flex justify-start items-center'><LuWind className='mr-1'/> Wind speed: {forecast.current.wind_mph}mph </p>
            <p className='flex justify-start items-center'><LuCompass className='mr-1'/> Wind direction : {forecast.current.wind_dir}</p>
            <p className='flex justify-start items-center'><WiHumidity className='mr-1'/> Humidity : {forecast.current.humidity}%</p>
            <p className='flex justify-start items-center'><LuDroplets className='mr-1'/> Precipitation: {forecast.current.precip_mm}mm </p>
        </div>
        <ThreedDaysForecast location={location}/>
    </div>
  )
}

export default LocationPage