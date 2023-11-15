import React from 'react-native';
import {View} from 'react-native';
import DrinksList from '../components/DrinksList';
import {DrinksProvider} from '../data/context/DrinksContext';

const Favorite = () => {
  return (
    <View>
      <View style={{height: '100%'}}>
        <DrinksProvider>{<DrinksList {...{isFav: true}} />}</DrinksProvider>
      </View>
    </View>
  );
};

export default Favorite;
