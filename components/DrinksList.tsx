import {useContext} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import useDrinks from '../data/context/DrinksContext';
import RandomContext from '../data/context/RandomContext';
import Card from './Card';
import React from 'react';

const DrinksList = (props: any) => {
  const renderItem = (item: any) => {
    return <Card name={item.key} text={item.desc} key={item.id} type={props} />;
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const Context = props.isFav ? useDrinks() : useContext(RandomContext);

  if (props.isFav) {
    return (
      <SafeAreaView>
        <ScrollView>
          {Context.drinks.map((item: any) => renderItem(item))}
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView>
        <ScrollView>{Context.map((item: any) => renderItem(item))}</ScrollView>
      </SafeAreaView>
    );
  }
};

export default DrinksList;
