import { useState, useEffect } from 'react'

const Appointmenst = () => {
  return (
    <section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">See your appointments</h2>
            <div className="ip-wrapper flex justify-center items-center my-6">
                <h1 className='font-bold text-xl px-4'>Search</h1>
                <input type="text" className='py-1 p-4 text-lg outline-none border border-black rounded-lg' placeholder='Enter ph-number' />
            </div>
        </div>

        <div class="grid grid-cols-1 gap-6 px-4 mt-12 sm:px-0 xl:mt-20 xl:grid-cols-4 sm:grid-cols-2">

        <div class="overflow-hidden bg-gray-100 rounded-md">
                <div class="px-5 py-6">
                    <div class="flex items-center justify-between">
                        <div className="img w-10 h-10 rounded-full bg-black text-white flex items-center justify-center ">D</div>
                        <div class="min-w-0 ml-3 mr-auto">
                            <p class="text-base font-semibold text-black truncate">Darrell Steward</p>
                            <p class="text-sm text-gray-600 truncate">@darrels</p>
                        </div>
                        
                    </div>
                    <blockquote class="mt-5">
                        <p class="text-base text-gray-800">
                            <span className="text-black font-semibold">Contact no:</span> {"9178240594"}
                        </p>
                        <p class="text-base text-gray-800">
                           <span className="text-black font-semibold">Gender:</span> {"Male"}
                        </p>
                        <p class="text-base text-gray-800">
                            <span className="text-black font-semibold">Department:</span> {"Genral medicin"}
                        </p>
                        <p class="text-base text-gray-800">
                            <span className="text-black font-semibold">Doctor assign:</span> {"Johheny sin"}
                        </p>
                        <p class="text-base text-gray-800">
                           <span className="text-black font-semibold"> Appointmet bookdet at:</span> {"12-12-12"}
                        </p>
                        <p class="text-base text-gray-800">
                           <span className="text-black font-semibold">Appointment Date</span> {"9178240594"}
                        </p>
                        <p class="text-base text-gray-800">
                            <span className="text-black font-semibold">Problem:</span> {"fdd sdfsdfs sdjfdjs jfsdkf sdfsd fsdfsd f sdfsd "}
                        </p>
                    </blockquote>
                </div>
            </div>

        </div>
    </div>
</section>

  )
}

export default Appointmenst
