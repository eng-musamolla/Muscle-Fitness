import React from 'react';
import { useState } from 'react';
import Activities from './Activities';
import Aside from './Aside';
import FAQs from './FAQs';



const Body = () => {
    const [time, setTime] = useState(0);

    const SelectButton = (Activities) => {
        const { Time } = Activities;
        const ExerciseTime = parseInt(Time);
        const newTime = time + ExerciseTime;
        setTime(newTime);

    }

    return (
        <div>
            <div className='w-100 md:flex gap-0  bg-slate-200'>

                <div className='container mx-auto flex-auto basis-3/4  '>

                    <Activities SelectButton={SelectButton}></Activities>
                    <div className='2xl:block xl:block lg:block  md:block sm:hidden'>
                        <FAQs></FAQs>

                    </div>

                </div>
                <div className='flex-none sm:mx-auto basis-1/4 sm:px-20 md:px-0 md:pt-0 sm:pt-8 '>
                    <div className='sticky top-0 bg-current'>
                        <Aside time={time} ></Aside>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Body;