import React, { useContext } from "react";
import {FlatList,Text} from 'react-native'
import { MyContext } from "./Context";

const Tudo = () => {
  const data = useContext(MyContext);
  console.log(data);
  return (
    <FlatList
        data={data}
        renderItem={({item})=>(
          <Text>{item.title}</Text>
        )
        }
    />
  )};

export default Tudo;