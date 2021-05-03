import React, { useEffect, useState } from 'react'
import axios from 'react-native-axios';
import { Text, View,ActivityIndicator, FlatList, } from 'react-native'

const FetchData = () => {
  // const [data, setData] = useState()
  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //   .then(res => {
  //     setData(res.data)
  //   },[])
  // })

  return(
    <>
    {/* <View>
      <FlatList 
      data={data}
      keyExtractor={({ id }, index) => id}
      renderItem = {({ item }) => (
        <Text>{item.email}</Text>
      )}
      />
    
    </View> */}
    </>
  )
}

export default FetchData;