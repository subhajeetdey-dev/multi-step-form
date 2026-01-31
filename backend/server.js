import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Form from "./models/Form.js";



dotenv.config({ path: "./.env.local" });

const app = express();
app.use(cors());
app.use(express.json());

console.log("MONGODB_URI =", process.env.MONGODB_URI);

mongoose
.connect(process.env.MONGODB_URI)
.then(()=>console.log('Mongodb connected!'))
.catch((err)=> console.error('MongoDB  error:',err))


app.get("/",(req, res)=> {
  res.send("Server is running");
});


app.post("/api/submit-form", async(req, res)=> {
    try {
      const data = req.body;
      data.dob = new Date(data.dob);
      const newForm = new Form(data);
      await newForm.save();
      console.log('Data saved to MongoDB');
      
      res.json({
        success: true,
        message: 'Form saved to MongoDB Successfully'
      });
    } catch (error) {
      console.error('MongoDB Save error:',error);
        res.status(500).json({
          success: false,
          message: "Failed to save Form"
        })
    }   
})

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});


