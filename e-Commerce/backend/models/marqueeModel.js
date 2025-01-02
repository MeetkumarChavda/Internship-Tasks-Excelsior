import mongoose from 'mongoose';

const marquee = new mongoose.Schema({
    marqueeText : {
        type : String,
        required : true
    },
    isActive:{
        type: Boolean,
        default: false
    }
});

export const Marquee = mongoose.model('Marquee', marquee);