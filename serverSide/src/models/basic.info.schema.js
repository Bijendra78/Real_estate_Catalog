import { Schema , model } from "mongoose";

const basicInfoSchema = new Schema({
    propertyType : {
        type : String , required : true
    } ,
    negotable : {
        type : String , required : true
    } ,
    price : {
        type : Number , required : true
    } ,
    ownership : {
        type : String , required : true 
    },
    propertyAge : {
        type : Number , required : true 
    } ,
    propertyApproved : {
        type : String , required : true 
    } ,
    propertyDescription : {
        type : String , required : true 
    } ,
    bankLoan : {
        type : String , required : true 
    } 
}) 

const basicInfoModel = model("basicInfo" , basicInfoSchema)

export default basicInfoModel;