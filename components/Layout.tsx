// setup layout here
import {View, Text} from 'react-native';
import React from 'react';

interface Props {
  child: any;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Layout = ({child}: Props) => {
  return (
    <View>
      <Text>something in here that is text</Text>
    </View>
  );
};
