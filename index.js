import express from "express";
import mongoose from "mongoose";
import path from "path";
import { Patient } from "./Database.js";
import cors from "cors";
//connect the database

mongoose
  .connect("mongodb://localhost:27017/hospital")
  .then((res) => {
    console.log("data base connected");
  })
  .catch((err) => {
    console.log("data base connection fail");
  });

const app = express();
app.use(express.json()); //midile ware to receive data in body
app.use(express.static("dist")); //middle ware to serve the static file

//white list the origin
app.use(cors({
  origin: "*",
}))

app.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "index.html"));
});

//post the appointment into the data base
app.post("/book-appointment", async (req, res) => {
  const body = req.body;
  if(!body){
    return res.json({
      msg: "no data found",
      success: false
    })
  }
  
  const {
    patientName,
    patientNumber,
    patientGender,
    patientEmail,
    appointmentDate,
    appointmentTime,
    patientProblem,
    doctor,
    department,
  } = body; // extract the iformation


  try {
    
      // create the appontment
      const appointmentRes = await Patient.create({
        patientName,
        patientNumber,
        patientGender,
        patientEmail,
        appointmentDate,
        appointmentTime,
        patientProblem,
        doctor,
        department,
      });
      if(appointmentRes){
        return res.json({
            msg: "appintment created",
            success: true
        })
    }else{
          return res.json({
              msg: "appintment fail",
              success: false
          })
          
        }
    } catch (error) {
        console.log(error)
        console.log("error in appointment creation"); 
        return res.json({
            msg: "appintment fail",
            success: false
        })

  }

});

//get the appoint ment details
app.get("/get-appointments",async (req,res)=>{
 const number = req.query.number;
 
  if(!number){
    return res.json({
      success: false,
      msg: "can't find number",
      data: []
    })
  }
    
    try {

        const getAppointmentRes = await Patient.find({
            patientNumber:number
        })
        
        if(getAppointmentRes){
            return res.json({
              msg: "Get the appointment details",
              success: true,
              data: getAppointmentRes  
            })
        }else{

            return res.json({
                msg: "can't get the appointment details",
                success: false
            })
        }
        
    } catch (error) {
        console.log("error in get appintment");
        return res.json({
            msg: "can't get the appointment details",
            success: false
        })
    }
})

app.listen(3000, () => {
  console.log("http://localhost:3000/");
});
