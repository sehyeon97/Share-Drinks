import React from 'react';
import DrinksList from '../components/DrinksList';
import {DrinksProvider} from '../data/context/DrinksContext';

const RandomDrinks = () => {
  return (
    <DrinksProvider type={false}>
      <DrinksList {...{isFav: false}} />
    </DrinksProvider>
  );
};

export default RandomDrinks;
