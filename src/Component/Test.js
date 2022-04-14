import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useContext} from 'react'
import { BorderlessButton, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { MyContext } from '../../Context';
import { circle } from 'react-native/Libraries/Animated/Easing';

const Layout = ({navigation,route}) => {
  const [text, setText] = useState(route.params.title);
  const {
    modalVisible,
    setModalVisible,
    setTodo,
    todo,
    edit,
    handleEdit,
    select,
  } = useContext(MyContext);
 
const handleDelete  = () =>{
  let numtodo = todo.filter(item => item.id!=route.params.id);

  setTodo(numtodo);
}


//
  return (
    <View>
      {/* <Text>{route.params.title}</Text> */}
      <Text style={styles.circle}></Text>
      <TextInput style={styles.View} value={text} onChangeText={text => setText(text)} />
      <Text style={styles.line}></Text>
      <View style={styles.edit}> 
      <TouchableOpacity onPress={()=>{handleEdit(text, route.params.id) ,navigation.navigate("ToDo")}} style={styles.button} ><Text>Done</Text></TouchableOpacity>
   <TouchableOpacity style={styles.button} onPress={()=>{handleDelete(),navigation.navigate("ToDo")}}  ><Text>Delete</Text></TouchableOpacity>

</View>

    </View>
  )
}

export default Layout;

const styles = StyleSheet.create({
  button:{
    backgroundColor:"skyblue",
    marginTop:13,
    marginBottom:25,
    height:30,
    width:56,
    borderRadius:13,
justifyContent:"center",
textAlign:"center",
alignItems:"center"
  }
  ,
  edit:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",
    flexDirection:"row",
    justifyContent:"space-around"

  },
  View:{
    marginTop:34,
    fontSize:23,
    marginLeft:54,
    color:"gray",
    fontFamily:"bold"
    
  }
  ,
  line:{
  borderBottomColor:"#DADADA",
  borderBottomWidth:1,
    marginLeft:54
  },
  circle:{
    borderWidth: 2,
    height: 30,
    width: 30,
    borderRadius: 23,
    marginLeft: 15,
    position: 'absolute',
    top: 48,
    backgroundColor: '#fff',
    borderColor:"#DADADA"
  }
})

// import React, {useState, useEffect,useContext} from 'react';
// import {styles} from '../../LayoutStyle';
// import {Modal, Text, Pressable, View, TextInput} from 'react-native';
// import { MyContext } from '../../Context';

// const Test = ({navigation,route}) => {
//   const [text, setChangeText] = React.useState('');

//   const {
//     modalVisible,
//     setModalVisible,
//     setTodo,
//     todo,
//     edit,
//     handleEdit,
//     select,
//   } = useContext(MyContext);
//   const {title, id} = edit;

//   const handleModal = () => {
//     setChangeText('');
//     setModalVisible(!modalVisible);
//   };

//   const handlechange = () => {
//     let temp = todo;

//     if (text) {
//       let newTodo = {
//         id: todo[todo.length - 1].id + 1,
//         checked: false,
//         title: text,
//       };
//       temp.push(newTodo);
//       setTodo(temp);
//       setChangeText('');
//     }

//     handleModal();
//   };

//   useEffect(() => {
//     if (title) {
//       setChangeText(title);
//     } else {
//       setChangeText('');
//     }
//   }, [edit]);

//   return (
//     <View style={styles.centeredView}>
//        <Text>{route.params.title}</Text>

//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           setModalVisible(!modalVisible);
//         }}>
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}></Text>
//             <Text style={styles.title}>Add Todo</Text>

//             <TextInput
//               style={styles.input}
//               onChangeText={setChangeText}
//               value={text}
//               placeholder=""
//             />
//             <View style={styles.pop}>
//               <Pressable
//                 style={[styles.button, styles.buttonClose]}
//                 onPress={handleModal}>
//                 <Text style={styles.textStyle1}>Cancel</Text>
//               </Pressable>
//               {select ? (
//                 <Pressable
//                   style={[styles.button, styles.buttonClose]}
//                   onPress={() => handleEdit(text, id, setChangeText)}>
//                   <Text style={styles.textStyle2}>Update</Text>
//                 </Pressable>
//               ) : (
//                 <Pressable
//                   style={[styles.button, styles.buttonClose]}
//                   onPress={handlechange}>
//                   <Text style={styles.textStyle2}>Done</Text>
//                 </Pressable>
//               )}
//             </View>
//           </View>
//         </View>
//       </Modal>
//       <Pressable></Pressable>
//     </View>
//   );
// };

// export default Test;
