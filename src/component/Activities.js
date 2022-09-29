import React from 'react';
import Logo from '../image/Logo.png';
import Card from './Card';
// import Aside from './Aside';


const Activities = (props) => {
    const Activitie = [
        { id: 1, name: "Name-1", img: "../image/player-1.png", detail: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.", age: "25", Time: '15' },
        { id: 2, name: "Name-2", img: "../image/player-2.png", detail: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.", age: "45", Time: '25' },
        { id: 3, name: "Name-3", img: "../image/player-3.png", detail: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.", age: "35", Time: '35' },
        { id: 4, name: "Name-4", img: "../image/player-4.png", detail: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.", age: "60", Time: '45' },
        { id: 5, name: "Name-5", img: "../image/player-5.png", detail: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.", age: "75", Time: '60' },
        { id: 6, name: "Name-6", img: "../image/player-6.png", detail: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.", age: "28", Time: '45' },
        { id: 7, name: "Name-7", img: "../image/player-7.png", detail: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.", age: "22", Time: '35' },
        { id: 8, name: "Name-8", img: "../image/player-8.png", detail: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.", age: "8", Time: '30' },
        { id: 9, name: "Name-9", img: "../image/player-9.png", detail: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.", age: "35", Time: '45' }
    ];


    return (
        <div>
            <div className='px-24 pt-10'>
                <img src={Logo} alt='player' className='w-48'></img>
                <h3 className='text-left text-2xl font-bold my-4'>
                    Select today’s exercise
                </h3>
            </div>
            <div className=" grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xl:gap-10 md:gap-10 sm:gap-10 xl:px-24 md:px-24 sm:px-14">

                {Activitie.map(activities => <Card
                    key={activities.id}
                    SelectButton={props.SelectButton}
                    Activities={activities}></Card>)
                }


            </div>
        </div >
    );

};



export default Activities;

