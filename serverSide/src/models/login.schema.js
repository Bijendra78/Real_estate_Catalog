import { Schema , model } from "mongoose";

const loginSchema = new Schema({
    mailID : {
        type : String , required : true
    } ,
    password : {
        type : String , required : true
    } 
   
}) 

const loginModel = model("register" , loginSchema)

export default loginModel;