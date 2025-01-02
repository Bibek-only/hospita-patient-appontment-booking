import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
    patientName: { type: String, required: true },
    patientNumber: { type: String, required: true },
    patientGender: {type: String, required: true},
    patientEmail: { type: String, required: false },
    appointmentDate: { type: Date, required: true },
    appointmentTime: { type: String, required: true },
    patientProblem: { type: String, required: true },
    doctor: { type: String, required: true },
    department: { type: String, required: true },

},{timestamps:true});

export const Patient = mongoose.model("Patient", PatientSchema);

// the below informatio need to send by the patient

// {
//     "patientName": "John Doe",
//     "patientNumber": "9876543210",
//      "patientGender": "male"
//     "patientEmail": "john.doe@example.com",
//     "appointmentDate": "2024-01-15",
//     "appointmentTime": "10:30 AM",
//     "patientProblem": "Chest pain",
//     "doctor": "Dr. Smith",
//     "department": "Cardiology"
    
//   }
  
  