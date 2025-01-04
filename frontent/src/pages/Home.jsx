import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect,useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast, Zoom } from "react-toastify";
import axios from "axios";

const App = () => {
  useEffect(() => {
    AOS.init({
      // Delay in milliseconds
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      once: true, // Whether animation should happen only once
      mirror: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="scroll-smooth">
      
      <Hero></Hero>
      <Services></Services>
      <Doctor></Doctor>
      <Appointment></Appointment>
      
      <ToastContainer
      position="bottom-center"
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      raggable
      pauseOnHover
      theme="dark"
      transition={Zoom}
      />
    </div>
  );
};

export default App;



function Hero() {
  return (
    <section id="hero" class="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div data-aos="fade-right">
            <p
              data-aos="fade-down"
              class="text-base font-semibold tracking-wider text-blue-600 uppercase"
            >
              Effortless patient management, secure access.
            </p>
            <h1 class="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
            Seamless care starts with registration.
            </h1>
            <p class="mt-4 text-base text-black lg:mt-8 sm:text-xl">
            Streamlined patient records for better healthcare management.
            </p>

            <a
              data-aos="fade-up"
              href="#appontment"
              title=""
              class="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
              role="button"
            >
              Book apontment
              <svg
                class="w-6 h-6 ml-8 -mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>

            
          </div>

          <div data-aos="fade-left">
            <img
              class="w-full"
              src="https://png.pngtree.com/png-clipart/20231108/original/pngtree-indian-doctors-isolated-picture-image_13240874.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}



function Services() {
  return (
    <div id="service">
      <h1 className=" text-center py-16 text-4xl md:text-6xl sm:text-6xl  font-bold ">
        Services
      </h1>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 md:px-24">
        <div data-aos="fade-right" className="flex justify-center rounded-lg ">
          <ServicesCard
            props={{
              title: "Heart health and treatment.",
              content:
                "Cardiology specializes in diagnosing and treating heart conditions, including diseases of blood vessels and arteries.",
              image:
                "https://tse4.mm.bing.net/th?id=OIP.feyFaZmyN1jQB0nbvdC7IQHaF_&pid=Api&P=0&h=180",
                dtr:"Raj Mehra"
            }}
          ></ServicesCard>
        </div>
        <div data-aos="fade-up" className="flex justify-center rounded-lg ">
          <ServicesCard
            props={{
              title: "Care for vision problems.",
              content:
                "Ophthalmology focuses on diagnosing, treating, and preventing eye diseases, vision problems, and performing eye surgeries.",
              image:
                "https://tse1.mm.bing.net/th?id=OIP.u2HSTNjfuS0D3FzM78DHgQHaFj&pid=Api&P=0&h=180",
                dtr:"Asha Nair"
            }}
          ></ServicesCard>
        </div>
        <div data-aos="fade-left" className="flex justify-center rounded-lg ">
          <ServicesCard
            props={{
              title: "Oral health and care.",
              content:
                "Dentistry involves diagnosing and treating oral health issues, including teeth, gums, and other mouth-related conditions.",
              image:
                "https://tse4.mm.bing.net/th?id=OIP.YaitGOz_uhAzWtrJmTRDpAAAAA&pid=Api&P=0&h=180",
                dtr:"Vik Malhotra"
            }}
          ></ServicesCard>
        </div>
        <div data-aos="fade-right" className="flex justify-center rounded-lg ">
          <ServicesCard
            props={{
              title: "Treating skin, hair disorders.",
              content:
                "Dermatology focuses on skin, hair, and nail conditions, including acne, eczema, psoriasis, and skin cancer.",
              image:
                "https://tse4.mm.bing.net/th?id=OIP.TPVf8jpOPhnUKKl-GSAJuQHaEK&pid=Api&P=0&h=180",
                dtr:"Arya Singh"
            }}
          ></ServicesCard>
        </div>
        <div data-aos="fade-up" className="flex justify-center rounded-lg ">
          <ServicesCard
            props={{
              title: "Bones, joints, and mobility.",
              content:
                "Orthopedics specializes in diagnosing and treating musculoskeletal issues, including bones, joints, ligaments, and muscle injuries.",
              image:
                "https://www.shutterstock.com/shutterstock/photos/2223160165/display_1500/stock-vector-set-of-x-ray-skeleton-human-body-hands-legs-chests-heads-vertebra-bones-adult-people-2223160165.jpg",
                dtr:"Nina Desai"
            }}
          ></ServicesCard>
        </div>
        <div data-aos="fade-left" className="flex justify-center rounded-lg ">
          <ServicesCard
            props={{
              title: "Diagnosis and overall health.",
              content:
                "General Medicine provides comprehensive care for various diseases, focusing on diagnosis, treatment, and prevention of illnesses.",
              image:
                "https://tse3.mm.bing.net/th?id=OIP.Zk58ZpTsZne6FDh1EjlkJwHaHa&pid=Api&P=0&h=180",
                dtr:"Kavi Patel"
            }}
          ></ServicesCard>
        </div>
      </div>
    </div>
  );
}

function ServicesCard({ props }) {
  return (
    <div className="max-w-sm bg-white hover:bg-gray-200 border border-transparent hover:border-gray-200 transition-all duration-200 rounded-lg shadow ">
      <a href="#">
        <img className="rounded-t-lg w-full h-60" src={props.image} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {props.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 ">{props.content}</p>
        <a className="w-full flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
        Dr: {props.dtr}
          
        </a>
      </div>
    </div>
  );
}

function Doctor() {
  return (
    <div id="doctor">
      <h1 className=" text-center py-6 md:py-16 text-4xl md:text-6xl sm:text-6xl  font-bold ">
        Doctors
      </h1>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 md:px-24">
        <div data-aos="fade-right" className="flex justify-center rounded-lg ">
          <DoctorCard
            props={{ name: "Raj Mehra", edu: "MBBS/DM in Cardiology ", spe: "Cardiologist.", image: "https://tse3.mm.bing.net/th?id=OIP.29VUfn60cwIHwtvm2kzAogHaH6&pid=Api&P=0&h=180" }}
          ></DoctorCard>
        </div>
        <div data-aos="fade-up" className="flex justify-center rounded-lg ">
          <DoctorCard
            props={{ name: "Asha Nair", edu: "MBBS/DNB in Ophthalmology.", spe: "Ophthalmologist.", image: "https://img.freepik.com/premium-photo/indian-doctor-wearing-white-coat-with-stethoscope_85574-3676.jpg?w=2000" }}
          ></DoctorCard>
        </div>
        <div data-aos="fade-left" className="flex justify-center rounded-lg ">
          <DoctorCard
            props={{ name: "Vik Malhotra", edu: "MBBS/BDS", spe: "Dentist.", image: "https://c8.alamy.com/comp/2A7ETWN/male-indian-doctor-in-white-coat-and-stethoscope-with-medicine-pills-tablets-capsules-in-hand-2A7ETWN.jpg" }}
          ></DoctorCard>
        </div>
        <div data-aos="fade-right" className="flex justify-center rounded-lg ">
          <DoctorCard
            props={{ name: "Arya Singh", edu: "MBBS/MD in Dermatology", spe: "Dermatologist.", image: "https://thumbs.dreamstime.com/b/portrait-male-indian-doctor-wearing-white-coat-clinic-office-260980393.jpg" }}
          ></DoctorCard>
        </div>
        <div data-aos="fade-up" className="flex justify-center rounded-lg ">
          <DoctorCard
            props={{ name: "Nina Desai", edu: "MBBS/MS in Orthopedics", spe: "Orthopedist", image: "https://tse2.mm.bing.net/th?id=OIP.dOKr6P513QpLDRenTkJc1gHaE8&pid=Api&P=0&h=180" }}
          ></DoctorCard>
        </div>
        <div data-aos="fade-left" className="flex justify-center rounded-lg ">
          <DoctorCard
            props={{ name: "Kavi Patel", edu: "MBBS/MD in General Medicine", spe: "General Physician", image: "https://thumbs.dreamstime.com/b/young-indian-doctor-iwith-stethoscope-modern-hospital-medicine-health-self-care-223486705.jpg" }}
          ></DoctorCard>
        </div>
      </div>
    </div>
  );
}

function DoctorCard({ props }) {
  return (
    <div className="w-full py-8 max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 object-center object-cover rounded-full shadow-lg"
          src={props.image}
          
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 ">
          {props.name}
        </h5>
        <span className="text-sm text-gray-500 ">{props.edu}</span>
        <div className="flex mt-4 md:mt-6">
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
          >
            {props.spe}
          </a>
        </div>
      </div>
    </div>
  );
}

const StyledWrapper = styled.div`
.container {
  position: relative;
  max-width: 500px;
  width: 100%;
  background: #e5e7eb;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

.container header {
  font-size: 1.2rem;
  color: #000;
  font-weight: 600;
  text-align: center;
}

.container .form {
  margin-top: 15px;
}

.form .input-box {
  width: 100%;
  margin-top: 10px;
}

.input-box label {
  color: black;
}

.form :where(.input-box input, .select-box) {
  position: relative;
  height: 35px;
  width: 100%;
  outline: none;
  font-size: 1rem;
  color: #808080;
  margin-top: 5px;
  border: 1px solid black;
  border-radius: 6px;
  padding: 0 15px;
  background: white;
}

.input-box input:focus {
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
}

.form .column {
  display: flex;
  column-gap: 15px;
}

.form .gender-box {
  margin-top: 10px;
}

.form :where(.gender-option, .gender) {
  display: flex;
  align-items: center;
  column-gap: 50px;
  flex-wrap: wrap;
}

.form .gender {
  column-gap: 5px;
}

.gender input {
  accent-color: #1e3a8a;
}

.form :where(.gender input, .gender label) {
  cursor: pointer;
}

.gender label {
  color: #000;
}

.address :where(input, .select-box) {
  margin-top: 10px;
}

.select-box select {
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  color: #808080;
  font-size: 1rem;
  background: white;
}

.form button {
  height: 40px;
  width: 100%;
  color: white;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 15px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: #1e40af;
}

.form button:hover {
  background: #1e3a8a;
}`;

function Appointment() {
  

  const [patientDetails, setPatientDetails] = useState({
    patientName:"",
    patientNumber:"",
    patientEmail:"",
    appointmentDate: "",
    appointmentTime: "",
    patientGender: "",
    patientProblem:"",
    doctor:"",
    department:""
  })

  const validatePatientDetails = (patientDetails) => {
    if (!patientDetails.patientName) {
      return { isValid: false, message: "Patient name cannot be empty or null." };
    }
    if (!patientDetails.patientNumber) {
      return { isValid: false, message: "Patient number cannot be empty or null." };
    }
    if (!patientDetails.patientEmail) {
      return { isValid: false, message: "Patient email cannot be empty or null." };
    }
    if (!patientDetails.appointmentDate) {
      return { isValid: false, message: "Appointment date cannot be empty or null." };
    }
    if (!patientDetails.appointmentTime) {
      return { isValid: false, message: "Appointment time cannot be empty or null." };
    }
    if (!patientDetails.patientGender) {
      return { isValid: false, message: "Patient gender cannot be empty or null." };
    }
    if (!patientDetails.patientProblem) {
      return { isValid: false, message: "Patient problem cannot be empty or null." };
    }
    if (!patientDetails.doctor) {
      return { isValid: false, message: "Doctor cannot be empty or null." };
    }
    if (!patientDetails.department) {
      return { isValid: false, message: "Department cannot be empty or null." };
    }
  
    return { isValid: true, message: "Validation passed!" };
  };
  
  
  


  async function handelSubbmit(){

    
    
    const validation = validatePatientDetails(patientDetails);
    
    if(!validation.isValid){
      toast.error(validation.message);
      return;
    }else{
        //subbmit the appontment
        try {
          const appintmentRes = await axios.post("http://localhost:3000/book-appointment",patientDetails);
          if(!appintmentRes){
            toast.error("can't book the apointment")
            return
          }
          if(appintmentRes.data.success){

            toast.success("successfuly book the appointment")
            //goto hero section if the the subbmition is worked
            const ele = document.getElementById("hero");
            ele.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
          }
          toast.error("can't book the apointment")
          
        } catch (error) {
          toast.error("Can't book the appointment");
          return
        }



    }
  }

  return (<>
  <span id="appontment"  ></span>
    <section  data-aos="fade-up" className="relative ">
      <h1 className=" text-center text-2xl md:text-6xl sm:text-6xl  font-bold my-16">
        Take appointment
      </h1>
      <div className="w-full flex justify-center">

      <StyledWrapper>
      <section className="container  ">
        <header>Book an appointment</header>
        <div className="form" >
          <div className="input-box">
            <label>Full Name</label>
            <input required placeholder="Enter full name" type="text" onChange={(e)=>{
              setPatientDetails({...patientDetails,patientName:e.target.value})
              
            }} />
          </div>
          <div className="input-box">
            <label>Phone number</label>
            <input required placeholder="Enter phone number" type="telephone"
            onChange={(e)=>{
              setPatientDetails({...patientDetails,patientNumber:e.target.value})
            }} 
            />
          </div>
          <div className="column">
            <div className="input-box">
              <label>Select date</label>
              <input required placeholder="Enter appontment date" type="date"
              onChange={(e)=>{
                setPatientDetails({...patientDetails,appointmentDate:e.target.value})
              }} 
              />
            </div>
            <div className="input-box">
              <label>Select time</label>
              <input required placeholder="Enter appointment time" type="time" 
                onChange={(e)=>{
                  setPatientDetails({...patientDetails,appointmentTime:e.target.value})
                }} 
              />
            </div>
          </div>
          <div className="gender-box">
            <label>Gender</label>
            <div className="gender-option">
              <div className="gender">
                <input  name="gender" defaultChecked id="check-male" type="radio" 
                onChange={(e)=>{
                  setPatientDetails({...patientDetails,patientGender:"mail"})
                }} 
                />
                <label htmlFor="check-male">Male</label>
              </div>
              <div className="gender">
                <input name="gender"  id="check-female" type="radio" 
                onChange={(e)=>{
                  setPatientDetails({...patientDetails,patientGender:"femail"})
                }} 
                />
                <label htmlFor="check-female">Female</label>
              </div>
              
            </div>
          </div>
          <div className="input-box address">
            <label>Email</label>
            <input required placeholder="Enter email address" type="text"
            onChange={(e)=>{
              setPatientDetails({...patientDetails,patientEmail:e.target.value})
            }} 
            />
            <div className="column">
              <div className="select-box">
                <select 
                onChange={(e)=>{
                  setPatientDetails({...patientDetails,doctor:e.target.value})
                }} 
                >
                  <option hidden>Doctor's</option>
                  <option>Kavi Patel</option>
                  <option>Arya Singh</option>
                  <option>Vik Malhotra</option>
                  <option>Raj Mehra</option>
                  <option>Nina Desai</option>
                  <option>Asha Nair</option>
                </select>
              </div>
              <div className="select-box">
                <select 
                onChange={(e)=>{
                  setPatientDetails({...patientDetails,department:e.target.value})
                }} 
                >
                  <option hidden>Department</option>
                  <option>General Medicine</option>
                  <option>Orthopedics</option>
                  <option>Dermatology</option>
                  <option>Dentistry</option>
                  <option>Ophthalmology</option>
                  <option>Cardiology</option>
                </select>
              </div>
              
            </div>
          <div className="input-box">
            <label>Problem</label>
            <input required placeholder="Enter your problem" type="text" 
            onChange={(e)=>{
              setPatientDetails({...patientDetails,patientProblem:e.target.value})
            }} 
            />
          </div>
          </div>
          <button onClick={()=>{
          handelSubbmit();
          }} >Submit</button>
        </div>
      </section>
    </StyledWrapper>
      </div>
    </section>
  </>
  );
}
