import React from 'react';
import '../../App.css';
import CreateRoutine from '../CreateRoutine'
import Cards from '../Cards';
import ExerciseCards from '../ExerciseCards'
import Footer from '../Footer';


export default function Services() {
  return (
    <>
    <h1 className='services'></h1>
    <CreateRoutine />
    <ExerciseCards />
    </>
  )
}
/* 

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home; */

