import {StyleSheet, Modal, Pressable, View, Text} from 'react-native';
import React from 'react';

interface IProps {
  text: string;
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const DetailsModal = ({text, modalVisible, setModalVisible}: IProps) => {
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <Pressable onPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.centerView}>
          <View style={styles.modalView}>
            <Text>{text}</Text>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centerView: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
  },
  modalView: {
    margin: 'auto',
    height: 250,
    width: '50%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default DetailsModal;
