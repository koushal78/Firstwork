import job from "../model/job.Model.js";
import cron from "node-cron";



export const getAllJob = async(req,res)=>{
  try {
      const jobs = await job.find();
      if(!jobs.length){
          return res.status(400).json({
              message:"NO job is posted"
          })
      }
      return res.status(200).json({message:"jobs fetch successfully ",jobs,"No of Jobs":jobs.length })
  }
   catch (error) {
    console.log("error in the getAlljob controller",error)
    return res.status(500).json({message:"failed to fetch jobs",Error:error.message})
    
  }
}



export const createJob = async (req, res) => {
  try {
    const {
      title,
      company,
      location,
      salary,
      jobType,
      postedDate,
      expiryDate,
      description,
      requirements,
      education,
      experience,
      skills,
      additionalRequirements,
      companyDescription,
      founded,
      size,
      headquarters,
      industry,
      website,
      benefits,
    } = req.body;

    const Newjob = new job({
      title,
      company,
      location,
      salary: isNaN(salary) ? salary : Number(salary), // handle string or numeric salary
      jobType,
      postedAt: new Date(postedDate),
      expireAt: new Date(expiryDate),
      description,
      requirements,
      education,
      experience, 
      skills,
      additionalRequirements,
      companyDescription,
      founded,
      size,
      headquarters,
      industry,
      website,
      benefits,
    });

    await Newjob.save();
    return res.status(200).json({ message: "New job created successfully", newjob: Newjob });
  } catch (error) {
    console.error("Error in createJob controller:", error);
    return res.status(500).json({ message: "Failed to create new job", error: error.message });
  }
};
export const updateJob = async(req,res)=>{
    try {
        const {id } = req.params
        const {title,description,location,company,salary,jobType,postedAt,expireAt} = req.body
        const updatedJob = await job.findByIdAndUpdate(id,
            {title,description,location,company,salary,jobType,postedAt,expireAt},
            {new:true}
    
        )
        if(!updatedJob){
            return res.status(404).json({message:"Job is not found"})
        }
        return res.status(200).json({message:"updated job successfully",updatedJob})
    } catch (error) {
        console.log("problem in the update job controller ")
        return res.status(500).json({message:"failed to update the job"})
        
    }

}
export const deleteJob =async(req,res)=>{
    try {
        const {id} = req.params
        if(!id){
            return res.status(404).json({message:"id id required"})

        }
      const deletedJob =   await job.findByIdAndDelete(id)
      if(!deletedJob){
        return res.status(404).json({messgae:"job not found"})
      }
        return res.status(200).json({message:"job deletion successfully"})
        
        
    } catch (error) {
        console.log("problem in the job delete controller")
        return res.status(500).json({message:"failed to update job"})
        
    }
}

cron.schedule('0 0 * * *',async()=>{
    console.log("deleting expring jobs")
    try {
        const today = new Date()
         const result = await job.deleteMany({expairAt:{$lt:today}}) // $it this is mongodb operrator (lessthen or <)
         console.log("expair date is successfully deleted ")
    } catch (error) {
        console.log("problem in the corn controller")
    }
})

export const ExpairJob = async(req,res)=>{
    try {
        const today = new Date()
        const result = await job.deleteMany({expairAt:{$lt:today}})
        return res.status(200).json({
            message:"deletion expaired job successfully ",
            DeletedJobCount:result.deletedCount // deletedCount mongoes property for finding the count

        })
    } catch (error) {
        console.log("there is the problem in the expairjob controller ")
        return res.status(500).json({message:"fail to deleted the expaired job",
            Error:error.message
        })
        
    }
}
