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
    }
},{
    timestamps:true
})

export const Interested = mongoose.model("Interested",interested)