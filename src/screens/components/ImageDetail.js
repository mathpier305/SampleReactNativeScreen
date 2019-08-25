import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({imageSource, title, imageScore}) => {
   
    return (
        <View style={styles.imageStyle}>
            <Image source={imageSource} />
            <Text> Show Image of {title} </Text>
            <Text> Image Score - {imageScore}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        marginVertical: 20
    }

})

export default ImageDetail;