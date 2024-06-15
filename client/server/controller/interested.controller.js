import { Interested } from "../model/interested.model.js";

export const addInterested = async(req,res)=>{

    const{buyerId,sellerId,productId} = req.body;


    try {

        const newUser = new Interested({buyerId,sellerId,productId})

        await newUser.save()
        res.status(200).json("Interested Added")


        
    } catch (error) {
        console.log(error)
        
    }

}