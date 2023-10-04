import { Schema, model } from "mongoose";

const locationInfoSchema = new Schema({
    email: {
        type: String, required: true
    },
    city: {
        type: String, required: true
    },
    area: {
        type: String, required: true
    },
    pincode: {
        type: Number, required: true
    },
    address: {
        type: String, required: true
    },
    landmark: {
        type: String, required: true
    },
    lalitude: {
        type: String, required: true
    },
    longitude: {
        type: String, required: true
    }

})
 const locationInfoModel = model("locatioInfo" , locationInfoSchema);
 export default locationInfoModel;