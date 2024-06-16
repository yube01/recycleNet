import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { User } from "../model/user.model.js";



export const register = async(req,res)=>{

    const{name,email,password,phone,userType,address} = req.body;
    const edata = await User.findOne({email})
    if(edata) return res.status(500).json("This email is already used")


    try {

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password,salt)


        const newUser = new User({name,email,password:hash,phone,userType,address})

        await newUser.save()
        res.status(200).json("User created")


        
    } catch (error) {
        console.log(error)
        
    }

}


export const login = async(req,res)=>{

    try {

        const user = await User.findOne({email:req.body.email})

        if(!user) return res.status(500).json("This user doesnt exists")

        const cpassword = await bcrypt.compare(req.body.password,user.password)
        if(!cpassword) return res.status(500).json("Password doesnt match")

        const token = jwt.sign({id:user._id},process.env.KEY)

        const {password, createdAt, updatedAt, ...others} = user._doc;

        res.cookie("access-token",token,{
            httpOnly:true
        }).status(200).json(others)

        
    } catch (error) {
        console.log(error)
        
    }
    
}