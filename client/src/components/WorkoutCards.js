import React, { Component, useState, useEffect } from 'react';
import './Cards.css';
import ExerciseCardItem from './ExerciseCardItem';
import axios from 'axios';

const myData = [
  {
  name: "Bench Press",
  description: "The bench press is a compound exercise that builds strength and muscle in the chest and triceps. When many people think of listing, the bench press is often the first exercise that comes to mind",
  image: "https://www.bodybuilding.com/images/2020/xdb/originals/xdb-81e-bench-press-m2-16x9.jpg",
  inPlan: false
},
{
  name: "Barbell Front Squat",
  description: "The barbell front squat is a compound movement that emphasizes building the lower-body muscle groups. With the barbell racked in front of the body on the anterior delts, the front squat emphasizes the quads and glutes, but also upper back and core strength to remain upright. Front squats can be trained as an alternative to back squats, as an accessory movement for either squats or deadlifts, or for strength and muscle on their own. Many lifters and athletes prefer them to back squats, although they can be uncomfortable and difficult to learn at first.",
  image: "https://www.bodybuilding.com/images/2020/xdb/originals/xdb-51b-barbell-front-squat-m2-16x9.jpg",
  inPlan: false
},
{
  name: "Barbell Deadlift",
  description: "The barbell deadlift is a compound exercise used to develop overall strength and size in the posterior chain. It is a competition lift in the sport of powerlifting, but is also considered a classic benchmark of overall strength. When performed with the hands outside the knees, it is often called a conventional deadlift. When the feet are wide and the hands are inside the knees, it is a sumo deadlift.",
  image: "https://www.bodybuilding.com/images/2020/xdb/originals/xdb-07b-barbell-deadlift-m1-16x9.jpg",
  inPlan: false
}
]; 

// My Hook Component
const WorkoutCards = () => {
  // Create Stateful exercise-List
  const [exercises, setExercises] = useState([]);

 // Manipulate State
 useEffect(() => {
   let data = [...myData] //Hier muss jetzt Fetch kommen denke ich
  setExercises(data);
});

 //Pass the exercises as as a CardItem in an Array called cardItems
 var cardItems = [];

  exercises.forEach(exercise => {
    var cardItem = (
      <ExerciseCardItem
      src= {exercise.image}
      text= {exercise.description}
      label= {exercise.name}
      path= {'path'}/> 
    )
    cardItems.push(cardItem);
  })

  function handleChange() {
    //track input field's state
  }

  function handleAdd() {
    // add item
  }


  return (
    <div className='cards'>
      <h1>Your Routine</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <div>
        <button type="button"></button>
          <input type="text" />
          
        </div>
          <ul className='cards__items'>
          {cardItems}
          </ul>
        </div>
      </div>
    </div>
  );



}

export default WorkoutCards;
