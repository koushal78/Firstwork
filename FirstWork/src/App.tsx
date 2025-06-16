import { Route, Routes } from "react-router-dom"

import Landing from "./Pages/Landing/Landing"
import Alljobs from "./Pages/Jobs/Alljobs/Alljobs"
import ApplyJob from "./Pages/Jobs/ApplyJob/ApplyJob"
import CreateJob from "./Pages/Jobs/Createjob/CreateJob"
import Build from "./Pages/BuildResume/Build"
import Choose_role from "./Pages/Choose_role/Choose_role"
import MainLayout from "./layouts/MainLayouts"
import { useAuth0 } from "@auth0/auth0-react"
import AuthRedirect from "./components/AuthRedirect" 



const App = () => {

const {user,isAuthenticated,isLoading } = useAuth0();




 

  return (
    <>
    <div className="bg-black h-screen  max-w-screen">
  

  <Routes>
    <Route element={<MainLayout/>}>

<Route path ='/' element = { <Landing/>}/>
<Route path ='/jobs' element = { isAuthenticated ?  <Alljobs/> :<AuthRedirect/>}/>
<Route path ='/apply' element = { isAuthenticated ?   <ApplyJob/>:<AuthRedirect/>}/>



<Route path = '/createjob' element = { isAuthenticated ? <CreateJob/>:<AuthRedirect/>}/>

<Route path = '/build-resume' element = { isAuthenticated ? <Build/>:<AuthRedirect/>}/>
    
    
    </Route>


<Route path = '/role' element = { isAuthenticated ?<Choose_role/>:<AuthRedirect/>}/>
 


  </Routes>


      
    </div>
 
    
    
    
    </>
  )
}

export default App