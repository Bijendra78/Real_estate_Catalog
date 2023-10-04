import { Schema, model } from "mongoose";

const generalInfoSchema = new Schema({
    name : {
        type : String , required : true
    } ,
    mobile : {
        type : Number , required : true
    } ,
    postedBy : {
        type : String , required : true
    },
    saleType : {
        type : String , required : true
    },
    featuredPackage : {
        type : Number , required : true
    },
    ppdPackage : {
        type : Number , required : true
    }
}) 

const generalInfoModel = model("generalInfo" , generalInfoSchema)
export default generalInfoModel;