import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    email : {type : String, unique : true},
    password : {type : String},
    username : {type : String, unique : true}
});

export default mongoose.model("User", userSchema);