import { configDotenv} from "dotenv"
 import mongoose from 'mongoose' 
 configDotenv()

const connectDatabase =() =>{
    try{
     mongoose.connect(process.env.MONGO_URI)
     .then(()=>{
        console.log ("connected ")
     })
    }catch(error){
        console.log(error,"db error")
    }
}

export default connectDatabase ;