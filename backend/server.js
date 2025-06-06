import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import connectToDB from './db/connectToMongoDB.js';
import { app, server } from './socket/socket.js';
dotenv.config()

const PORT = process.env.PORT || 8000;
const __dirname=path.resolve();
app.use(express.json()); // to parse income request  with json payload( from req.body)
app.use(cookieParser());
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

app.use(express.static(path.join(__dirname,"/frontend/dist")))
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})

// app.get("/", (req, res) => {
//     // root route
//     res.send('Hell world');
// });



server.listen(PORT, () => {
    connectToDB();
    console.log(`Server is running on port ${PORT}`);
});