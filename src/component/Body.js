import React from 'react';
import Activities from './Activities';
import Aside from './Aside';


const Body = () => {
    return (
        <div>
            <div className='w-100 flex gap-0 bg-slate-200 '>

                <div className='container mx-auto flex-auto w-72'>

                    <Activities></Activities>

                </div>
                <div className='flex-none w-1/4 '>
                    <div className='sticky top-0 bg-current'>
                        <Aside></Aside>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Body;