import React, {createContext, useState} from 'react';
export const MyContext = createContext();

function Context(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [edit, setEdit] = useState({});
  const [select, setSelected] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [todo, setTodo] = useState([
    {title: 'Strating making', checked: false, id: 1},
    {title: 'Pay for 3 Rent', checked: false, id: 2},
    {title: 'Bug a milk', checked: false, id: 3},
    {
      title: 'Do not forget to pick up michael from school',
      checked: false,
      id: 4,
    },
  ]);

  const editModal = Item => {
    setEdit(Item);
    //////handleModal();
  };
 
  const handleDelete = () => {
    let numtodo = todo.filter(item => !item.checked);

    setTodo(numtodo);
  };

  const handleCheck = id => {
    let tempTo = [];
    todo.forEach(item => {
      if (id === item.id) {
        tempTo.push({
          title: item.title,
          checked: !item.checked,
          id: item.id,
        });
      } else {
        tempTo.push(item);
      }
    });
    setTodo(tempTo);
  };

  const handleEdit = (text, id) => {
    let tempedit = [];
    todo.forEach(item => {
      if (id == item.id) {
        tempedit.push({
          title: text,
          checked: item.checked,
          id: item.id,
        });
      } else {
        tempedit.push(item);
      }
    });
    setTodo(tempedit);
    setModalVisible(false);
    // setChangeText('');
    setSelected(false);
  };

  const handleModal = () => {
    setModalVisible(!modalVisible);
  };

  

  return (
    <MyContext.Provider
      value={{
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
        handleDelete
      }}>
      {props.children}
    </MyContext.Provider>
  );
}

export default Context;
