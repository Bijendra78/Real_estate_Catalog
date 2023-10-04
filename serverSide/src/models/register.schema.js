import { Schema , model } from "mongoose";

const registerSchema = new Schema({
    mailID : {
        type : String , required : true
    } ,
    password : {
        type : String , required : true
    } ,
    confirmPassword : {
        type : String 
    }
}) 

const registerModel = model("register" , registerSchema)

export default registerModel;