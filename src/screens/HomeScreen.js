import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {


  return (
    <View>
      <Text style={styles.text}>Hi There!</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo"
      />

      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')} />

      <Button
        title="Image Screen"
        onPress={() => navigation.navigate('Image')} />

      <Button
        title="Friend Age Screen"
        onPress={() => navigation.navigate('FriendAge')} />

      <Button
        title="Counter Screen"
        onPress={() => navigation.navigate('Counter')} />

      <Button
        title="Color Screen"
        onPress={() => navigation.navigate('Color')} />

      <Button
        title="Square Screen"
        onPress={() => navigation.navigate('Square')} />


      <Button
        title="Square Reducer Screen"
        onPress={() => navigation.navigate('SquareReducer')} />
    </View>

  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;