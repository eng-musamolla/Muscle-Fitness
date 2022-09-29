import React, { useEffect } from 'react';
import img from '../image/Ananta Jalil.png';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Aside = ({ time }) => {
    const ExerciseTime = time;
    console.log(ExerciseTime);



    const [Time, setTime] = useState(0);
    const Break = (breakTime) => {
        setTime(breakTime);
        localStorage.setItem('breakTime', breakTime);

    }
    useEffect(() => {
        if (localStorage.getItem('breakTime')) {
            setTime(localStorage.getItem('breakTime'));
        }
    }, [Time])

    const notify = () => toast.success('🦄 Activity Completed!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    return (
        <div className='bg-white p-6 md:text-sm sm:text-sm sm:mt-5 rounded '>
            {/* User profile */}
            <div className='flex gap-5 align-middle'>
                <img src={img} alt='player' className='w-14 h-14 rounded-full'></img>

                <div className='text-left pt-1 basis-3/4'>
                    <p className='text-lg font-bold '>Ananta Jalil</p>
                    <p >🚂 Bangladeshi</p>
                </div>
            </div>

            <div className='grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 justify-around gap-4  bg-slate-200 rounded-lg py-3 mt-5'>
                <div className='mx-auto'>
                    <p className='text-base'><span className='text-xl font-bold'>66</span>kg</p>
                    <p >Weight</p>
                </div>
                <div className='mx-auto'>

                    <p className='text-xl font-bold'>5.9</p>
                    <p >Height</p>
                </div>
                <div className='mx-auto'>

                    <p className='text-base'><span className='text-xl font-bold'>23</span>yrs</p>
                    <p >Age</p>
                </div>
            </div>


            <h3 className='text-xl font-bold text-left mt-5'>Add A Break</h3>

            <div className='grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 justify-around gap-4  bg-slate-200 rounded-lg py-3'>
                <div className='mx-auto bg-white hover:bg-orange-500  hover:text-white w-10 h-10 rounded-full align-middle leading-none' >
                    <button onClick={() => Break(15)} className='pt-3 font-semibold text-md'><span>15</span>s</button>
                </div>


                <div className='mx-auto bg-white hover:bg-orange-500 hover:text-white w-10 h-10 rounded-full align-middle leading-none' >
                    <button onClick={() => Break(30)} className='pt-3 font-semibold text-md'><span>30</span>s</button>
                </div>

                <div className='mx-auto bg-white hover:bg-orange-500 hover:text-white w-10 h-10 rounded-full align-middle leading-none' >
                    <button onClick={() => Break(45)} className='pt-3 font-semibold text-md'><span>45</span>s</button>
                </div>

                <div className='mx-auto bg-white hover:bg-orange-500 hover:text-white w-10 h-10 rounded-full align-middle leading-none' >
                    <button onClick={() => Break(60)} className='pt-3 font-semibold text-md'><span>60</span>s</button>
                </div>


            </div>

            <h3 className='xl:text-xl lg:text-xl md:text-xl sm:text-lg  font-bold text-left mt-5'>Exercise Details</h3>

            <div className='my-6 p-3  bg-slate-200 rounded-lg'>
                <div className='md:flex justify-between px-1' >
                    <p className='font-semibold text-md'>Exercise time</p>
                    <p className='font-semibold text-md text-slate-400'>{ExerciseTime} Minutes</p>
                </div>
            </div>

            <div className='my-6 p-3  bg-slate-200 rounded-lg'>
                <div className='md:flex justify-between px-5' >
                    <p className='font-semibold text-md'>Break time</p>
                    <p className='font-semibold text-md text-slate-400'>{Time} seconds</p>
                </div>
            </div>

            <button onClick={notify} className="  hover:bg-orange-500 rounded-lg py-4 xl:text-xl lg:text-xl md:text-xl sm:text-lg text-lg bg-slate-700 mt-5 w-full text-white font-semibold"
                type="submit">Activity Completed</button>


            <ToastContainer />
        </div>
    );
};

export default Aside;