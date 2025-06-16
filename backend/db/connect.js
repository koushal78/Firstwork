import mongoose from "mongoose";

const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connection with mongoose is successfull");
        
    } catch (error) {
        console.log("problem to connect with database")
         
    }

}

export default connect 