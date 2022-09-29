import React from 'react';
import Logo from '../image/Logo.png';
import Card from './Card';


const Activities = (props) => {
    const Activitie = [
        { id: 1, name: "Squats", img: "../image/Squats.png", detail: "Squats are undoubtedly the best exercise for gaining weight. This exercise is considered important for increasing the strength and size of the lower body muscles.", age: "25", Time: '15' },
        { id: 2, name: "Push-ups", img: "../image/Push-ups.png", detail: "Push-ups are a perfect exercise to build both your upper body and core strength. It is a difficult yet effective exercise to gain bodyweight.", age: "45", Time: '25' },
        { id: 3, name: "Bench Dips", img: "../image/Bench Dips.png", detail: "Bench Dips are simple yet useful exercises to gain body weight.  This exercise mainly targets the triceps but it also focuses on your chest and the front part of your shoulder.", age: "35", Time: '35' },
        { id: 4, name: "Lunges", img: "../image/Lunges.png", detail: "Just like squats, lunges also help in building the lower body. It helps in bulking up the thighs and hip muscles. ", age: "60", Time: '45' },
        { id: 5, name: "Crunches", img: "../image/Crunches.png", detail: "It is usually believed that crunches help in losing belly fat but crunches also help in increasing your core strength and gain weight.", age: "75", Time: '60' },
        { id: 6, name: "Glute Kickback", img: "../image/Glute Kickback.png", detail: "Glute kickbacks mainly benefit your gluteal muscles.It also targets your hamstrings and strengthens your buttocks.", age: "28", Time: '45' },
        { id: 7, name: "Pull-Ups", img: "../image/Pull-Ups.png", detail: "Pull-ups are one the most effective exercises for gaining weight. Pull-ups help in getting chiseled shoulders and ripped arms.", age: "22", Time: '35' },
        { id: 8, name: "Bench Press", img: "../image/Bench Press.png", detail: "Bench presses are great for bulking up. This exercise helps in building shoulders, chest muscles, and triceps.", age: "8", Time: '30' },
        { id: 9, name: "Deadlift", img: "../image/Deadlift.png", detail: "The Deadlift is not only a wonderful exercise to gain body weight, but It is also great to increase the overall muscle mass in your body.", age: "35", Time: '45' }
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

