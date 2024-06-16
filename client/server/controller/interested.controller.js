import { Interested } from "../model/interested.model.js";
import { Product } from "../model/product.model.js";
import { User } from "../model/user.model.js";

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



export const interestedBuyer = async(req,res)=>{
    const {userId} = req.params 
    try {


        const sendUserInfo = await Interested.find({ sellerId: userId });
        if (!sendUserInfo || sendUserInfo.length === 0) {
            return res.status(404).json({ message: 'Doesn\'t Exist' });
        }
        
        // Extract buyerId and productId from each object
        const userInfo = sendUserInfo.map(info => ({
            buyerId: info.buyerId,
            productId: info.productId
        }));
        
        // Fetch buyerInfo and productInfo for each entry
        const userDetails = await Promise.all(userInfo.map(async (info) => {
            const buyerInfo = await User.findById(info.buyerId);
            const productInfo = await Product.findById(info.productId);  // Assuming you have a Product model to fetch product info
        
            if (!buyerInfo) {
                return { buyerId: info.buyerId, message: 'Buyer doesn\'t exist' };
            }
        
            if (!productInfo) {
                return { productId: info.productId, message: 'Product doesn\'t exist' };
            }
        
            return { buyerId: info.buyerId, buyerInfo, productId: info.productId, productInfo };
        }));
        
        return res.status(200).json(userDetails);
        
        
    } catch (error) {
        console.log(error)
        
    }
}