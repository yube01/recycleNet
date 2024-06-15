import mongoose from "mongoose"


const interested = new mongoose.Schema({
    buyerId:{
        type:String,
        required:true
    },
    productId:{
        type:String,
        required:true
    },
    sellerId:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

export const Interested = mongoose.model("Interested",interested)