import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useEffect, useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack'
// import Layout from './src/Component/Layout';
// import TodoItem from './src/Component/TodoItem';
// import {styles} from '../../Appstyle';
// import {MyContext} from '../../Context';
import Layout from './Layout';
import TodoItem from './TodoItem';
import {styles} from '../../Appstyle';
import {MyContext} from '../../Context';

const Elements = ({navigation}) => {
  const {
    todo,
    modalVisible,
    setModalVisible,
    edit,
    setEdit,
    select,
    setSelected,
    isDelete,
    setIsDelete,
    setTodo,
    editModal,
    handleModal,
    handleEdit,
    handleCheck,
    handleDelete,
  } = useContext(MyContext);

  console.log(
    todo,
    modalVisible,
    edit,
    select,
    isDelete,
    editModal,
    handleModal,
    handleEdit,
    handleCheck,
    handleDelete,
  );

  useEffect(() => {
    const deleteCheck = () => {
      let canBeDeleted = false;
      todo.forEach(item => {
        if (item.checked) {
          canBeDeleted = true;
        }
      });
      setIsDelete(canBeDeleted);
    };
    deleteCheck();
  }, [todo]);
console.log(handleModal,"HLOOOOOOOOOOOOOOOOOOO");
  return (
    <View style={{flex: 1}}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.tasks}>Today</Text>
        {isDelete && (
          <TouchableOpacity onPress={handleDelete}>
            <Text style={styles.delete}>Delete</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={handleModal}>
          <Image
            style={styles.image}
            source={require('../../Assests/Group.png')}
          />
         

        </TouchableOpacity>
      </View>
       
      <FlatList data={todo} renderItem={({item}) => <TodoItem Navigation={navigation} item={item}/>} />

      <Layout />
    </View>
  );
};

export default Elements;
