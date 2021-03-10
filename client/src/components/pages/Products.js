import React from 'react';
import '../../App.css';
import CreateRoutine from '../CreateRoutine'
import Cards from '../Cards';
import ExerciseCards from '../ExerciseCards'
import WorkoutCards from '../WorkoutCards'
import Footer from '../Footer';


export default function Services() {
  return (
    <>
    <h1 className='products'></h1>
    <WorkoutCards />
    </>
  )
}