import React from 'react';
import { IoMdCall, IoLogoWhatsapp, IoIosLock } from "react-icons/io";
import { BiSolidMessageRounded } from "react-icons/bi";
import { LuMessagesSquare } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";
import students1 from "../src/assets/Ctudent_Img/students1.jpg";
import students2 from "../src/assets/Ctudent_Img/students2.jpg";

// Sochail icons


const App = () => {
  return (
    <main className='flex  px-12 bg-slate-100 h-screen '>
      {/* filters section */}
      <section>
        <h1 className='text-2xl text-center my-2 mt-3'>Filters</h1>
        <div className='flex w-[250px] flex-col p-4 mr-4 rounded bg-white space-y-2'>
          <label>
            <input type="checkbox" className='mr-2' />
            All Requests
          </label>
          <label>
            <input type="checkbox" className='mr-2' />
            Accepted by me
          </label>
          <label>
            <input type="checkbox" className='mr-2' />
            All Request
          </label>
        </div>
      </section>

      {/* User Info Sections */}

      <section>
        {/* user info 1 */}

        <div className='flex gap-7 p-12 rounded-md bg-white'>
          <div className='flex gap-9'>
            {/* img  */}

            <img className='h-[250px] w-[250px] rounded-full' src={students2} alt="" />
            <div>
              <div className='border-b-2'>
                <div className='flex justify-between'>
                  <h1 className='flex flex-row gap-2 text-2xl'>Manysha M <span className='text-green-500 text-xl'><IoShieldCheckmark /></span></h1>
                  <p><FaChevronDown /></p>
                </div>
                <div className='flex justify-between'>
                  <p className='flex flex-row gap-2 my-2 text-xl'><span className='text-green-500 text-xl'><LuMessagesSquare /></span> Online 22h ago </p>
                  <p>Yesterday</p>
                </div>
              </div>
              <div>
                <h2 className='text-xl'>25 yrs, 4'11"</h2>
                <h2 className='text-xl'>English,Roman Catholic</h2>
                <h2 className='text-xl'>Tura, India</h2>
                <h2 className='text-xl'>B.A</h2>
                <h2 className='text-xl'>Student</h2>
                <div className='h-[150px] mt-12 border-2 border-dashed p-4'>
                  <h2 className='text-xl w-9 p-2 rounded-full -mt-9 text-white bg-blue-400 mx-auto'><span><MdOutlineEmail /></span></h2>
                  <div className='flex'>
                    <h1><IoIosLock /></h1>
                    <p><span className='text-black font-bold'>Manysha M</span> has sent you a message. In the interest of our Premium Members, we allow only Premium users to read messages.</p>
                  </div>
                  <h1 className='text-center text-2xl text-blue-400 font-semibold mt-3'>Upgrade Now {">"}</h1>
                </div>
              </div>
            </div>
          </div>

          {/* contuct info */}
          <div className='space-y-5 border-l-4 my-42 pl-4'>
            <h1 className='text-center italic'><span className='text-blue-500'>Upgrade </span>to  <br /> Contact her directly</h1>
            <div className='w-72 flex gap-5 items-center justify-center p-3  border-slate-300 border shadow-xl rounded-full'>
              <p className='text-blue-400 text-3xl'><IoMdCall /></p>
              <p className='text-xl text-blue-600 font-bold'>Call</p>
            </div>
            <div className='w-72 flex gap-5 items-center justify-center p-3  border-slate-300 border shadow-xl rounded-full'>
              <p className='text-green-400  text-3xl'><IoLogoWhatsapp /></p>
              <p className='text-xl text-blue-600 font-bold'>WhatsApp</p>
            </div>
            <div className='w-72 flex gap-5 items-center justify-center p-3  border-slate-300 border shadow-xl rounded-full'>
              <p className='text-blue-400 text-3xl'><BiSolidMessageRounded /></p>
              <p className='text-xl text-blue-600 font-bold'>Shaadi Chat</p>
            </div>
          </div>
        </div>

        {/* students info 2 */}

        <div className='flex gap-7 p-12 mt-12 rounded-md  bg-white'>
          <div className='flex gap-9'>
            {/* img  */}

            <img className='w-[250px] h-[250px] rounded-full' src={students1} alt="" />

            {/* students info */}
            <div>
              <div className='border-b-2'>
                <div className='flex justify-between'>
                  <h1 className='flex flex-row gap-2 text-2xl'>Honey B <span className='text-green-500 text-xl'><IoShieldCheckmark /></span></h1>
                </div>
                <p className='text-end'>07 Mar</p>
              </div>
              <div>
                <h2 className='text-xl mt-2'>20 yrs, 4'8"</h2>
                <h2 className='text-xl'>English,Anglo Indian</h2>
                <h2 className='text-xl'>Delhi, India</h2>
                <h2 className='text-xl'>High school</h2>
                <h2 className='text-xl'>Banking Professuional</h2>
                <div className='h-[150px] mt-12 border-2 border-dashed p-4'>
                  <h2 className='text-xl w-9 p-2 rounded-full -mt-9 text-white bg-blue-400 mx-auto'><span><MdOutlineEmail /></span></h2>
                  <div className='flex'>
                    <h1><IoIosLock /></h1>
                    <p><span className='text-black font-bold'>Honey B</span> has sent you a message. In the interest of our Premium Members, we allow only Premium users to read messages.</p>
                  </div>
                  <h1 className='text-center text-2xl text-blue-400 font-semibold mt-3'>Upgrade Now {">"}</h1>
                </div>
              </div>
            </div>
          </div>

          {/* contuct info */}
          <div className='space-y-5 border-l-4 my-42 pl-4'>
            <h1 className='text-center italic'><span className='text-blue-500'>Upgrade </span>to  <br /> Contact her directly</h1>
            <div className='w-72 gap-5 text-gray-400 items-center justify-center p-3 mx-auto text-center  border-slate-300 rounded-full'>
              <p className=' w-12 h-12 p-2 ml-28 my-2 text-center text-3xl border-4 rounded-full'><LuMessagesSquare /></p>
              <p className='text-xl font-bold '>Write Message</p>
            </div>
            <div className='w-72 gap-5 text-gray-400 items-center justify-center p-3 mx-auto text-center  border-slate-300 rounded-full'>
              <p className=' w-12 h-12 p-2 ml-28 my-2 text-center text-3xl border-4 rounded-full'><LuMessagesSquare /></p>
              <p className='text-xl font-bold'>View Contact</p>
            </div>
          </div>
        </div>
      </section >
    </main >
  );
};

export default App;