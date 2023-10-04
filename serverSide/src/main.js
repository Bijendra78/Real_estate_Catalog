import express from "express"
import mongoose from "mongoose";
import registerModel from "./models/register.schema.js";
import basicInfoModel from "./models/basic.info.schema.js";
import propertyDetailsModel from "./models/property.details.schema.js";
import generalInfoModel from "./models/general.info.schema.js";
import locationInfoModel from "./models/location.info.schema.js";
import cors from 'cors';
// const cors = require('cors');



const PORT = 8000;
const app = express();
app.use(express.json())

// const corsOptions ={
//     origin:'http://localhost:8000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
app.use(cors())

mongoose.connect("mongodb+srv://rambijendra02:rambijendra@cluster0.v4rs57r.mongodb.net/express_crud?retryWrites=true&w=majority").then(() => { console.log("DB connected") })

app.use(express.json())

//all property details
app.get('/allProperties', async (req, res) => {
    try {
        const propType = await basicInfoModel.find()
        console.log(propType)
    }
    catch (err) {
        res.send("err")
    }
})


//login user 
app.post('/realEstate/login/', async (req, res) => {
    try {

        const { mailID, password } = req.body
        const isExist = await registerModel.findOne({ mailID: mailID })
        if (isExist.password === password) {
            const { mailID } = isExist
            const details = {
                email: mailID,
            }
            res.send(details)
        }
        else {
            res.send("invalid user credentials")
        }
    }
    catch (err) {
        res.send("invalid user credentials")
    }
})

// new register user 
app.post('/realEstate/register', async (req, res) => {

    try {
        const { mailID, password, confirmPassword } = req.body
        //  console.log(mailID , password , confirmPassword)
        if (mailID || password || confirmPassword) {
            const newRecord = new registerModel(req.body)
            await newRecord.save()
            res.sendStatus(201)
        }
    } catch (err) {
        return res.send("error found")
    }
})

//Basic Info Of property 
// app.post('/realEstate/basicInfo', async (req, res) => {
//     try {
//         const { propertyType, negotable, price, ownership, propertyAge, propertyApproved, propertyDescription, bankLoan } = req.body
//         if (propertyType || negotable || price || ownership || propertyAge || propertyApproved || propertyDescription || bankLoan) {
//             const basicData = new basicInfoModel(req.body)
//             await basicData.save()
//             res.sendStatus(201)
//         }
//     }
//     catch (err) {
//         return res.send("error found")
//     }
// })

//property details get method
app.get('/realEstate/getData', async(req, res)=>{
   try{
    const allDetails =await propertyDetailsModel.find()
    console.log("alldataczcsaczscZcZcszc",allDetails)
    res.send(allDetails )
   }
   catch(err){
    res.send("error found")
   }
})

//Porperty Details 
app.post('/realEstate/propertyDetails', async (req, res) => {
    try {
        const { area,
            area_unit
            ,
            attached
            ,
            bank_loan
            ,
            bhk
            ,
            breath
            ,
            electricity
            ,
            facing
            ,
            featured
            ,
            floor
            ,
            furnished
            ,
            length
            ,
            lift
            ,
            mobile
            ,
            negotiable
            ,
            ownerShip
            ,
            owner_name
            ,
            parking
            ,
            postedby
            ,
            ppdpackage
            ,
            price
            ,
            property_age
            ,
            property_approved
            ,
            property_description
            ,

            property_type
            ,

            propertyimage
            ,

            saletype
            ,

            western

        } = req.body
        console.log(req.body)

        if ( area
            ||
            area_unit
            ||
            attached
            ||
            bank_loan  
            ||
            bhk
            ||
            breath
            ||
            electricity
            ||
            facing
            ||
            featured
            ||
            floor
            ||
            furnished
            ||
            length
            ||
            lift
            ||
            mobile
            ||
            negotiable
            ||
            ownerShip
            ||
            owner_name
            ||
            parking
            ||
            postedby
            ||
            ppdpackage
            ||
            price
            ||
            property_age
            ||
            property_approved
            ||
            property_description
            ||

            property_type
            ||

            propertyimage
            ||

            saletype
            ||

            western) {
            const propertyData = new propertyDetailsModel(req.body)
            console.log("propdatda",propertyData)
            await propertyData.save()
            res.sendStatus(201)
        }
    }
    catch (err) {
        res.send("error found")
    }
})

// General Info 
// app.post('/realEstate/generalInfo', async (req, res) => {
//     try {
//         const { name, mobile, postedBy, saleType, featuredPackage, ppdPackage } = req.body
//         console.log(name, mobile, postedBy, saleType, featuredPackage, ppdPackage)
//         if (name || mobile || postedBy || saleType || featuredPackage || ppdPackage) {
//             const generalData = new generalInfoModel(req.body)
//             await generalData.save()
//             res.sendStatus(201)
//         }
//     }
//     catch (err) {
//         res.send("error found")
//     }
// })

// Location info
// app.post('/realEstate/locationInfo', async (req, res) => {
//     try {
//         const { email, city, area, pincode, address, landmark, lalitude, longitude } = req.body
//         if (email || city || area || pincode || address || landmark || lalitude || longitude) {
//             const locationData = new locationInfoModel(req.body)
//             await locationData.save()
//             res.sendStatus(201)
//         }
//     }
//     catch (err) {
//         res.send("error found")
//     }
// })



app.listen(PORT, () => {
    console.log("ur server run on this port", PORT)
})

