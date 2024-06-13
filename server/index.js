import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import http from "http";
import mongoose from "mongoose";

import authRoutes from "./src/routes/authRoutes.js";

dotenv.config();

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();

app.use(express.json());

app.use(cors());

const server = http.createServer(app);

app.get("/", (req,res) =>{
    return res.send("Server Online");
});

app.use("/api/auth", authRoutes);

mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        server.listen(PORT, (req,res)=>{
            console.log(`server is listening ${PORT}`);
        })
    })
    .catch(err =>{
        console.log('could not connect to server');
        console.log(err);
    });