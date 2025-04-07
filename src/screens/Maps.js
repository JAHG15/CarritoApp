import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const Maps = () => {
  return (
    <LinearGradient colors={['#140248', '#6f23e3']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>
          Recorrido del carrito
        </Text>

        <Image source={require('../../assets/images/ruta.png')} style={styles.image} />

        <View style={styles.videoContainer}>
          <WebView
            javaScriptEnabled={true}
            domStorageEnabled={true}
            style={styles.video}
            source={{ uri: 'https://www.youtube.com/embed/TTGQ8Gj4PZc' }}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 30,
    paddingTop: 100,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 400,
    height: 450,
  },
  videoContainer: {
    width: Dimensions.get('window').width * 0.9,
    height: 200,
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  video: {
    flex: 1,
  },
});

export default Maps;
