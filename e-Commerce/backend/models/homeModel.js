import mongoose from "mongoose";

const heroSchema = new mongoose.Schema({
    heroTitle:{
        type:String,
        required:true
    },
    heroPara:{
        type:String,
        required:true
    },
    heroImage:{
        type:String,
        required:true
    },
});

export const Hero = mongoose.model("Hero",heroSchema);

