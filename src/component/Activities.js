import React from 'react';
import Logo from '../image/Logo.png';
import Card from './Card';

const Activities = () => {
    return (
        <div>
            <div className='px-24 pt-10'>
                <img src={Logo} alt='player' className='w-48'></img>
                <h3 className='text-left text-2xl font-bold my-4'>
                    Select today’s exercise
                </h3>
            </div>
            <div className=" grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xl:gap-10 md:gap-10 sm:gap-10 xl:px-24 md:px-24 sm:px-14">

                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>




            </div>
        </div >
    );
};

export default Activities;