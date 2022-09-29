import React from 'react';
import img from '../image/player-1.png';

const Aside = () => {
    return (
        <div className='bg-white p-6'>
            {/* User profile */}
            <div className='flex gap-5 align-middle'>
                <img src={img} alt='player' className='w-14 h-14 rounded-full'></img>


                <div className='text-left pt-1'>
                    <p className='text-base'>Name:</p>
                    <p >Address:</p>
                </div>
            </div>

            {/* User profile */}
            <div className='grid grid-flow-col   my-6 p-3 bg-slate-200 rounded-lg'>
                <div>
                    <p className='text-base'><span className='text-xl font-bold'>76</span>kg</p>
                    <p >Weight</p>
                </div>
                <div>

                    <p className='text-xl font-bold'>6.6</p>
                    <p >Height</p>
                </div>
                <div>

                    <p className='text-base'><span className='text-xl font-bold'>25</span>yrs</p>
                    <p >Age</p>
                </div>
            </div>


            <h3 className='text-xl font-bold text-left'>Add A Break</h3>

            <div className='grid grid-flow-col justify-around   my-6 p-3 bg-slate-200 rounded-lg'>
                <div className='bg-white hover:bg-violet-600 w-10 h-10 rounded-full align-middle leading-none' >
                    <button className='pt-3 font-semibold text-md hover:text-white'>10s</button>
                </div>
                <div className='bg-white hover:bg-violet-600 w-10 h-10 rounded-full align-middle leading-none' >
                    <button className='pt-3 font-semibold text-md hover:text-white'>20s</button>
                </div>
                <div className='bg-white hover:bg-violet-600 w-10 h-10 rounded-full align-middle leading-none' >
                    <button className='pt-3 font-semibold text-md hover:text-white'>30s</button>
                </div>
                <div className='bg-white hover:bg-violet-600 w-10 h-10 rounded-full align-middle leading-none' >
                    <button className='pt-3 font-semibold text-md hover:text-white'>40s</button>
                </div>
                <div className='bg-white hover:bg-violet-600 w-10 h-10 rounded-full align-middle leading-none' >
                    <button className='pt-3 font-semibold text-md hover:text-white'>50s</button>
                </div>

            </div>

            <h3 className='text-xl font-bold text-left mt-20'>Exercise Details</h3>

            <div className='my-6 p-3  bg-slate-200 rounded-lg'>
                <div className='flex justify-between px-5' >
                    <p className='font-semibold text-md'>Exercise time</p>
                    <p className='font-semibold text-md text-slate-400'>200 seconds</p>
                </div>
            </div>

            <div className='my-6 p-3  bg-slate-200 rounded-lg'>
                <div className='flex justify-between px-5' >
                    <p className='font-semibold text-md'>Exercise time</p>
                    <p className='font-semibold text-md text-slate-400'>200 seconds</p>
                </div>
            </div>

            <button className=" hover:bg-violet-600 rounded-lg py-4 text-lg bg-green-500 mt-5 w-full text-white font-semibold"
                type="submit">Activity Completed</button>



        </div>
    );
};

export default Aside;