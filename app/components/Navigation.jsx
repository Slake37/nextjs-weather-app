import { Roboto_Condensed } from "next/font/google"
import {BsFillCloudSunFill} from 'react-icons/bs'
export const robotoCondesed = Roboto_Condensed({
  subsets: ['cyrillic'],
  weight: ['300','700']
})

const Navigation = () => {
  return (
    <div className="fixed top-0 bg-white w-full  z-10 text-[#222831]">
        <div className="flex justify-start items-center text-[#222831] p-5 bg-transparent">
            <BsFillCloudSunFill className="text-xl md:text-2xl"/>
            <h1 className='text-xl font-bold mx-2 md:text-2xl'>Weather web app</h1>
        </div>
    </div>
  )
}

export default Navigation