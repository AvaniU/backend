// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from './db/index.js';

dotenv.config();

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
    // app.on("error", (error) => {
    //     console.log("ERROR: ", error);
    //     throw err
    // })
})
.catch((err) => {
    console.log("MONGO DB connection failed!")
})