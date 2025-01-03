import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        unique:true,
        require:true
    },
    phone:{
        type:String,
        unique:true,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

export const User = mongoose.model("User",userSchema);