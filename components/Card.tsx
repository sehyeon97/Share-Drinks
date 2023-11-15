import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import DetailsModal from './DetailsModal';
import useDrinks from '../data/context/DrinksContext';

export interface IProps {
  name: string;
  text: string;
  type: any;
}

const Card = ({name, text, type}: IProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [cardType, setCardType] = useState(type.isFav);

  const favorites = useDrinks();

  const longPressHandler = () => {
    if (!cardType) {
      const {addToFavorites} = favorites;
      setCardType(!cardType);
      addToFavorites({name, text, cardType});
    } else {
      setCardType(!cardType);
    }
  };

  return (
    <>
      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
        onLongPress={longPressHandler}>
        <View style={styles.card}>
          <View>
            <Image
              style={styles.image}
              source={require('../assets/rnCoffee.jpeg')}
            />
          </View>
          <View style={styles.description}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>{name}</Text>
            <Text style={{fontSize: 16, marginVertical: 2, fontWeight: '200'}}>
              {text}
            </Text>
          </View>
        </View>
      </Pressable>

      <DetailsModal
        text={text}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 0,
    height: 100,
    margin: '2%',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  description: {
    flexShrink: 1,
    overflow: 'hidden',
    paddingLeft: 10,
  },
});

export default Card;
