import {createContext, useContext} from 'react';
import drinksReducer, {initialState} from '../reducer/drinksReducer';
import {useReducer} from 'react';
import DATA from '../randoms';
import {IProps} from '../../components/Card';
import React from 'react';

const DrinksContext = createContext(initialState.drinks);
type drinkProps = IProps;

/*
    children: all classes wrapped within DrinksProvider will have access to the functions to add / remove
    type: flag to distinguish between Favorites and Randoms
*/
export const DrinksProvider = ({children}: any, type: any) => {
  const [state, dispatch] = type
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useReducer(drinksReducer, initialState)
    : // eslint-disable-next-line react-hooks/rules-of-hooks
      useReducer(drinksReducer, {total: 10, drinks: DATA});

  /*
        Drink: Accepts a Card component
        dispatch: add the drink to favorites
    */
  const addToFavorites = (drink: drinkProps) => {
    const updatedList = state.drinks.concat(drink);
    const total = state.total + 1;
    dispatch({type: 'add', payload: {total: total, drinks: updatedList}});
  };

  /*
        .filter() makes it so that the drinks list will contain all drinks that satisfy stated condition
    */
  const removeFromFavorites = (drink: drinkProps) => {
    const updatedList = state.drinks.filter(
      (currentDrink: any) => currentDrink.name !== drink.name,
    );
    const total = state.total - 1;
    dispatch({type: 'remove', payload: {total: total, drinks: updatedList}});
  };

  const value = {
    total: state.total,
    drinks: state.drinks,
    addToFavorites,
    removeFromFavorites,
  };

  return (
    <DrinksContext.Provider value={value}>{children}</DrinksContext.Provider>
  );
};

const useDrinks = () => {
  const currDrinks = useContext(DrinksContext);

  if (currDrinks === undefined) {
    throw new Error('drinks context is undefined!');
  }

  return currDrinks;
};

export default useDrinks;
