import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatGrid } from 'react-native-super-grid';
 

const PresentationalComponent = (props) => {
    const [items, setItems] = React.useState([
        { name: 'TURQUOISE', code: '#1abc9c' },
      ]);
     items.push({ name: 'TURQUOISE', code: '#1abc9c' },)

   return (
      <View>
         <Text>
            {props.userId}
         </Text>
         <FlatGrid
      itemDimension={130}
      data={items}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCode}>{item.code}</Text>
        </View>
      )}
    />
      </View>
   )
}
export default PresentationalComponent

const styles = StyleSheet.create({
    gridView: {
      marginTop: 10,
    
    },
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 10,
      height: 150,
    },
    itemName: {
      fontSize: 16,
      color: '#fff',
      fontWeight: '600',
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#fff',
    },
  });