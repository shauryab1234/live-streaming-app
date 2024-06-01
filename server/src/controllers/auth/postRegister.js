import User from "../../models/users.js";
import bcrypt from "bcryptjs";

export const postRegister = async(req,res) =>{
    try{
        const {username ,password ,email} = req.body;

        const userExists = await User.exists({email});

        if(userExists){
            return res.status(402).send("E-mail is already in use");
        }

        const encryptedPassword = await bcrypt.hash(password , 10);

        User.create({
            username,
            email : email.toLowerCase(),
            password : encryptedPassword
        })
        
    } catch (err) {
        res.status(500).send('error registering user');
    }
    return res.status(201).send("User has been registered");
}