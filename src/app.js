import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials:true
}))

app.use(express.json({limit:"16kb"}))     // limit for json
app.use(express.urlencoded({extended:true,limit:"16kb"}))         //taking of url
app.use(express.static("public"))                                 //for static files like images

app.use(cookieParser())

export {app}