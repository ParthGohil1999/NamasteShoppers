const app = require('./app');
// const dotenv = require("dotenv");
const cloudinary = require("cloudinary")
const connectDatabase = require("./config/database")

//Handeling Uncaught Exception
process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`)
    console.log(`Shutting down the server due to Uncaught Exception`)
        process.exit(1);
})

//config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "backend/config/config.env" });
}

// connect to database 
connectDatabase();

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
})


const server = app.listen(process.env.PORT || 4000, ()=>{
    console.log(`App running on port: ${process.env.PORT}`)
})
// unhandle promise rejection
process.on("unhandledRejection",err=>{
    console.log(`Error:${err.message}`)
    console.log(`Shutting down the server due to Unhandled Promise Rejection`)
    server.close(()=>{
        process.exit(1);
    })
})