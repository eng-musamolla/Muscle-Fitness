import React from 'react';
import { useState } from 'react';
import Activities from './Activities';
import Aside from './Aside';



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
            <div className='w-100 flex gap-0 bg-slate-200 '>

                <div className='container mx-auto flex-auto w-72'>

                    <Activities SelectButton={SelectButton}></Activities>

                </div>
                <div className='flex-none w-1/4 '>
                    <div className='sticky top-0 bg-current'>
                        <Aside time={time} ></Aside>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Body;