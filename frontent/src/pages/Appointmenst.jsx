import axios from 'axios';
import { useState} from 'react'


const Appointmenst = () => {
    const [phoneNumber,setPhoneNumber] = useState("");
    const [appoinments,setAppointments] = useState([])
    async function searchPatient(){
        try {

            const res =await axios.get(`http://localhost:3000/get-appointments?number=${phoneNumber}`);
            
            if(res.data.success === true){
                setAppointments(res.data.data)
               
                return
            }

            setAppointments([])
            
        } catch (error) {
            console.log("error ingetting appointmets")
            setAppointments([]);
        }
    }
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">See your appointments</h2>
            <div className="ip-wrapper flex justify-center items-center my-6">
                <h1 className='font-bold text-xl px-4'>Search</h1>
                <input type="text" className='py-1 p-4 text-lg outline-none border border-black rounded-lg' placeholder='Enter ph-number' 
                onChange={(e)=>{
                    setPhoneNumber(e.target.value)
                }}
                />
                <button className='px-4 py-1 font-bold bg-blue-500 mx-2 rounded-xl '
                onClick={()=>{
                    searchPatient();
                }}
                >Find</button>
            </div>
        </div>

        <div className="grid grid-cols-1 gap-6 px-4 mt-12 sm:px-0 xl:mt-20 xl:grid-cols-4 sm:grid-cols-2 ">

            {
                appoinments.map((e)=>{
                    return(

        <div key="e._id" className="overflow-hidden bg-gray-200 rounded-md ">
                <div className="px-5 py-6">
                    <div className="flex items-center justify-between">
                        <div className="img w-10 h-10 rounded-full bg-black text-white flex items-center justify-center ">D</div>
                        <div className="min-w-0 ml-3 mr-auto">
                            <p className="text-base font-semibold text-black truncate">{e.patientName}</p>
                            <p className="text-sm text-gray-600 truncate">{e.patientEmail}</p>
                        </div>
                        
                    </div>
                    <blockquote className="mt-5">
                        <p className="text-base text-gray-800">
                            <span className="text-black font-semibold">Contact no:</span> {e.patientNumber}
                        </p>
                        <p className="text-base text-gray-800">
                           <span className="text-black font-semibold">Gender:</span> {e.patientGender}
                        </p>
                        <p className="text-base text-gray-800">
                            <span className="text-black font-semibold">Department:</span> {e.department}
                        </p>
                        <p className="text-base text-gray-800">
                            <span className="text-black font-semibold">Doctor assign:</span> {e.doctor}
                        </p>
                        <p className="text-base text-gray-800">
                           <span className="text-black font-semibold"> Appointmet bookdet at:</span> {e.createdAt.split("T")[0]}
                        </p>
                        <p className="text-base text-gray-800">
                           <span className="text-black font-semibold">Appointment Date</span> {e.appointmentDate.split("T")[0]}
                        </p>
                        <p className="text-base text-gray-800">
                            <span className="text-black font-semibold h-6 w-full overflow-hidden">Problem:</span> {e.patientProblem}
                        </p>
                    </blockquote>
                </div>
            </div>
                    )
                })
            }


        </div>
    </div>
</section>

  )
}

export default Appointmenst
