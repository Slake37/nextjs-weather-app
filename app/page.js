'use client'
import{useState} from 'react'
import {BsSearch} from 'react-icons/bs'
import { useRouter } from "next/navigation"

const HomePage = () => {
  const [locationSearched,setLocationSearched] = useState('')
  const router = useRouter()
 

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(locationSearched)
    router.push(`/${locationSearched}`)
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-[720px]">
      <form className="flex flex-col justify-center items-start w-full">
        <label className="text-lg font-semibold">Please enter location</label>
        <input type="text" name="" id="" placeholder="Please enter location" className="w-full outline-none p-1 rounded-md" onChange={(e) => setLocationSearched(e.target.value)}/>
        <button onClick={handleSubmit} className="flex justify-center items-center mt-5 bg-[#222831] text-[#EEEEEE] w-full rounded-md drop-shadow-lg text-xl px-5 py-1 "><BsSearch className="mx-2"/> Search</button>
      </form>
    </div>
  );
};

export default HomePage;
