import React from 'react';
import img from '../image/player-1.png';
import { useState } from 'react';

const Aside = () => {

    // const TimeBlock = () => {

    //     const Times = [15, 30, 45, 60];
    //     Times.map((time) => {
    //         console.log(time);

    //         <div className='bg-white hover:bg-orange-500 hover:text-white w-10 h-10 rounded-full align-middle leading-none' >
    //             <button className='pt-3 font-semibold text-md'><span>{time}</span>s</button>
    //         </div>
    //         return (
    //             time
    //         )
    //     }
    //     );
    // }





    const [Time, setTime] = useState(0);
    const Break = (time) => {
        setTime(time);


    }
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
                    <p className='text-base'><span className='text-xl font-bold'>66</span>kg</p>
                    <p >Weight</p>
                </div>
                <div>

                    <p className='text-xl font-bold'>5.9</p>
                    <p >Height</p>
                </div>
                <div>

                    <p className='text-base'><span className='text-xl font-bold'>23</span>yrs</p>
                    <p >Age</p>
                </div>
            </div>


            <h3 className='text-xl font-bold text-left'>Add A Break</h3>

            <div className='grid grid-flow-col justify-around   my-6 p-3 bg-slate-200 rounded-lg'>
                <div className='bg-white hover:bg-orange-500  hover:text-white w-10 h-10 rounded-full align-middle leading-none' >
                    <button onClick={() => Break(15)} className='pt-3 font-semibold text-md'><span>15</span>s</button>
                </div>


                <div className='bg-white hover:bg-orange-500 hover:text-white w-10 h-10 rounded-full align-middle leading-none' >
                    <button onClick={() => Break(30)} className='pt-3 font-semibold text-md'><span>30</span>s</button>
                </div>

                <div className='bg-white hover:bg-orange-500 hover:text-white w-10 h-10 rounded-full align-middle leading-none' >
                    <button onClick={() => Break(45)} className='pt-3 font-semibold text-md'><span>45</span>s</button>
                </div>

                <div className='bg-white hover:bg-orange-500 hover:text-white w-10 h-10 rounded-full align-middle leading-none' >
                    <button onClick={() => Break(60)} className='pt-3 font-semibold text-md'><span>60</span>s</button>
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
                    <p className='font-semibold text-md'>Break time</p>
                    <p className='font-semibold text-md text-slate-400'>{Time} seconds</p>
                </div>
            </div>

            <button className=" hover:bg-orange-500 rounded-lg py-4 text-lg bg-slate-700 mt-5 w-full text-white font-semibold"
                type="submit">Activity Completed</button>



        </div>
    );
};

export default Aside;