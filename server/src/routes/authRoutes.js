import express from "express";

const router = express.Router();

router.get("/register", (req,res)=>{
    return res.send("this is register route");
});

router.get("/login", (req,res)=>{
    return res.send("this is login route");
});

export default router;