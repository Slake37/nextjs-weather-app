import {BsThermometerLow,BsThermometerHigh,BsFillSunriseFill,BsFillSunsetFill} from 'react-icons/bs'
import {RiCelsiusLine} from 'react-icons/ri'

async function fetchThreeDaysForecast(location){
   

    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${location}&days=3&aqi=no&alerts=yes`)
    const threeDaysForecast = await response.json()
    console.log(threeDaysForecast)
    return threeDaysForecast
}

const ThreedDaysForecast =async ({location}) => {
   const threeDaysForecast = await fetchThreeDaysForecast(location)

  return (
    <div className="flex flex-col justify-center items-center mt-5  py-5">
      <h1 className="text-2xl underline">Next 3 days forecast</h1>
      <div className="flex justify-between items-center mt-5">
        {threeDaysForecast.forecast.forecastday.map((data) => (
          <div className='flex flex-col justify-center mx-1 items-center border-2 rounded-md drop-shadow-2xl p-3'>
            <p>{data.date}</p>
            <img src={data.day.condition.icon} alt="" className='w-10'/>
            <div className='flex justify-center items-center text-center'>
              <p className='flex justify-center items-center text-center text-xs'><BsThermometerLow/>{data.day.mintemp_c}<RiCelsiusLine/></p>
              <p>-</p>
              <p className='flex justify-center items-center text-center text-xs'><BsThermometerHigh/>{data.day.maxtemp_c}<RiCelsiusLine/></p>
            </div>
            <div className='flex justify-center items-center mt-3'>
              <p className='flex flex-col justify-center items-center text-center text-xs'><BsFillSunriseFill className='text-2xl'/>{data.astro.sunrise}</p>
              <p className='mx-1'>-</p>
              <p className='flex flex-col justify-center items-center text-center text-xs'><BsFillSunsetFill className='text-2xl'/>{data.astro.sunset}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ThreedDaysForecast