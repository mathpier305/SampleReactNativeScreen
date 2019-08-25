import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../screens/components/ImageDetail';

const ImageScreen = () => { 
    return (
        <View>
            <ImageDetail title="Forest" imageScore={8} imageSource={require('../../assets/forest.jpg')}/>
            <ImageDetail title="Beach" imageScore={10} imageSource={require('../../assets/beach.jpg')}/>
            <ImageDetail title="Tree" imageScore={5} imageSource={require('../../assets/forest.jpg')}/>
            <ImageDetail title="Mountain" imageScore={9} imageSource={require('../../assets/mountain.jpg')}/>
        </View>
    );
}

const styles = StyleSheet.create( {

})

export default ImageScreen;