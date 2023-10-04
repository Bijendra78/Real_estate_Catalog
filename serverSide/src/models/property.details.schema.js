import { Schema, model } from "mongoose";

const propertyDetailsSchema = new Schema({
    area: {
        type: String, required: true
    },
    area_unit: {
        type: String, required: true
    },
    attached: {
        type: String, required: true
    },
    bank_loan: {
        type: String, required: true
    },
    bhk: {
        type: String, required: true
    },
    breath: {
        type: String, required: true
    },
    electricity: {
        type: String, required: true
    },
    facing: {
        type: String, required: true
    },
    featured: {
        type: String, required: true
    },
    floor: {
        type: String, required: true,
    },
    furnished: {
        type: String, required: true
    },
    length: {
        type: String, required: true
    },
    lift: {
        type: String, required: true
    },
    mobile : {
        type : String , required : true
    } ,
    negotiable : {
        type : String , required : true
    } ,
    ownerShip : {
        type : String , required : true
    } ,
    owner_name : {
        type : String , required : true 
    },
    parking : {
        type : String , required : true 
    } ,
    postedby : {
        type : String , required : true 
    } ,
    ppdpackage : {
        type : String , required : true 
    } ,
    price : {
        type : String , required : true 
    },
    property_age : {
        type : String , required : true
    } ,
    property_approved : {
        type : String , required : true
    } ,
    property_description : {
        type : String , required : true
    },
    property_type : {
        type : String , required : true
    },
    propertyimage : {
        type : String 
    },
    saletype : {
        type : String , required : true
    },
    western: {
        type: String, required: true
    },
     views :{
        type :  Number, default : 0
    },
    daysleft :{
        type : Number , default : 60
    },
    proStatus : {
       type : String, default: "unsold"
    }

   
})

const propertyDetailsModel = model("propertyDetails" ,propertyDetailsSchema)
export default propertyDetailsModel