import React, {useState, useEffect,useContext} from 'react';
import {styles} from '../../LayoutStyle';
import {Modal, Text, Pressable, View, TextInput} from 'react-native';
import { MyContext } from '../../Context';

const Layout = () => {
  const [text, setChangeText] = React.useState('');

  const {
    modalVisible,
    setModalVisible,
    setTodo,
    todo,
    edit,
    handleEdit,
    select,
  } = useContext(MyContext);
  const {title, id} = edit;

  const handleModal = () => {
    setChangeText('');
    setModalVisible(!modalVisible);
  };

  const handlechange = () => {
    let temp = todo;

    if (text) {
      let newTodo = {
        id: todo[todo.length - 1].id + 1,
        checked: false,
        title: text,
      };
      temp.push(newTodo);
      setTodo(temp);
      setChangeText('');
    }

    handleModal();
  };

  useEffect(() => {
    if (title) {
      setChangeText(title);
    } else {
      setChangeText('');
    }
  }, [edit]);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}></Text>
            <Text style={styles.title}>Add Todo</Text>

            <TextInput
              style={styles.input}
              onChangeText={setChangeText}
              value={text}
              placeholder=""
            />
            <View style={styles.pop}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={handleModal}>
                <Text style={styles.textStyle1}>Cancel</Text>
              </Pressable>
              {select ? (
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => handleEdit(text, id, setChangeText)}>
                  <Text style={styles.textStyle2}>Update</Text>
                </Pressable>
              ) : (
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={handlechange}>
                  <Text style={styles.textStyle2}>Done</Text>
                </Pressable>
              )}
            </View>
          </View>
        </View>
      </Modal>
      <Pressable></Pressable>
    </View>
  );
};

export default Layout;
