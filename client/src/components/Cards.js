import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Start Training!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Find the right exercises for your training plan with exercise instructions and pictures.'
              label='Exercise Catalogue'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='
Create and edit your personal fitness plan and share your progress with your coach.'
              label='Luxury'
              path='/workout-plan'
            />
          </ul>
          {/* <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
