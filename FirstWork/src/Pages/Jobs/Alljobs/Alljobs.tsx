import { BounceLoader } from "react-spinners";
import { useEffect, useState } from "react"
import { MapPin } from 'lucide-react';
import { IndianRupee,Briefcase,Clock   } from 'lucide-react';
import axios from 'axios'
import SearchBar from "@/components/SearchBar";
import { Calendar } from 'lucide-react';
import { Link } from "react-router-dom";
interface JobType {
  title: string;
  company: string;
  location: string;
  expireAt: string;
  salary: number;
  jobType: string;
  postedAt: string;
  description: string;
  id:number;
}

const Alljobs = () => {
  const [data,setData] = useState<JobType[]>([]);
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    const getData = async()=>{
    try {
      setLoading(true)
      
        const Data = await axios.get('http://localhost:8000/api/job');
        console.log(Data.data.jobs)
        setData(Data.data.jobs)
        
      
    } catch (error) {
      console.log('problem to get all the jobs ',error)

      
    }
    finally{
      setLoading(false)

    }
  }
    getData()
  },[])

const roundOff = (num: number): string => {
  if (num >= 10000000) return (num / 10000000).toFixed(1) + 'cr';
  if (num >= 100000) return (num / 100000).toFixed(1) + 'lakh';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
  return num.toString();
};
const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};
  const getDaysDiff = ( date2:string):number => {
    const d1 = new Date();
    const d2 = new Date(date2);
  
    // Difference in milliseconds
    const diffInMs = Math.abs(d2.getTime() - d1.getTime());
  
    // Convert to days
    return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  };
  
  return (
    <div className="flex bg-black w-full justify-center  items-center ">
      
      {
        loading ? <>
        <BounceLoader color="green"  /> </> :<> 
        <div>
        <div className="w-[500px] my-8">
         <SearchBar/>
        </div>
        <div>
         
          
          
{ 

data.map((items)=>(
  <Link to = '/apply' key={items.id}>
  <div className="my-4" >
  <div className="bg-[#1F2937] rounded-md max-w-[600px] shadow-md overflow-hidden">
    <div className="flex justify-between p-4">
      <div className="text-white">
        <p className="text-2xl font-semibold leading-tight">{items.title}</p>
        <p className="text-[#2480f2] text-lg font-medium mt-1">{items.company}</p>
        <div className="flex items-center gap-2 text-gray-400 mt-2">
          <MapPin className="w-4 h-4 flex-shrink-0" /> 
          <span>{items.location}</span>
        </div>
      </div>
      <div className="bg-amber-800/20 text-amber-400 px-3 py-1 h-fit rounded-full text-sm font-medium flex items-center">
       {getDaysDiff(items.expireAt)} Days Left
      </div>
    </div>
  
    <hr className="border-gray-700 mx-4" />
    
    <div className="p-4">
      <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-3">
        <div className="flex items-center text-gray-300">
          <IndianRupee className="w-4 h-4 mr-2 text-gray-400" /> 
          <span>{roundOff(items.salary)}</span>
        </div>
        <div className="flex items-center text-gray-300">
          <Briefcase className="w-4 h-4 mr-2 text-gray-400" /> 
          <span>{items.jobType}</span>
        </div>
        <div className="flex items-center text-gray-300">
          <Calendar className="w-4 h-4 mr-2 text-gray-400" /> 
          <span>Posted:{formatDate(items.postedAt)}</span>
        </div>
        <div className="flex items-center text-gray-300">
          <Clock className="w-4 h-4 mr-2 text-gray-400" /> 
          <span>Expires:{formatDate(items.expireAt)}</span>
        </div>
      </div>
      
      <div className="mt-3">
        <p className="text-gray-200 font-medium mb-1">Description</p>
        <p className="text-gray-400 text-sm leading-relaxed">
         {items.description.split(' ').slice(0, 20).join(' ')}....</p>
      
      </div>
    </div>
  </div>
  </div>
  </Link>
))
  
}

        </div>
        </div>
        </>
      }

        
    </div>
  )
}

export default Alljobs