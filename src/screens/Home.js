import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(true);  
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  return (
    <LinearGradient colors={['#140248', '#6f23e3']} style={styles.container}>
      <Text style={[styles.text, { color: 'white', position: 'absolute', top: 85, fontSize: 30, fontWeight: 'bold' }]}>¡Bienvenido a AppCar!</Text>
      <Image source={require('../../assets/images/trx.webp')} style={styles.image} />
      <Text style={[styles.text, { color: 'white', position: 'absolute', bottom: 170, fontSize: 18 }]}>
        Esta es una aplicación móvil que muestra la información de nuestro carro seguidor de línea. Este carro cuenta con diferentes sensores en su estructura que, durante el recorrido, van recolectando datos de temperatura, humedad y presión ambiental.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <LinearGradient colors={['#6f23e3', '#140248']} style={styles.buttonGradient}>
          <Text style={styles.buttonText}>Integrantes</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Modal para mostrar los integrantes */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleClose} // Cierra el modal al presionar atrás en Android
      >
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Integrantes</Text>

          <View style={styles.integrantsContainer}>
            <Image source={require('../../assets/images/foto.jpg')} style={styles.integrantImage} />
            <Text style={styles.integrantText}>Joshua Gonzalez</Text>
          </View>
          <View style={styles.integrantsContainer}>
            <Image source={require('../../assets/images/manuel.jpg')} style={styles.integrantImage} />
            <Text style={styles.integrantText}>Manuel Medrano</Text>
          </View>
          <View style={styles.integrantsContainer}>
            <Image source={require('../../assets/images/ernesto.jpg')} style={styles.integrantImage} />
            <Text style={styles.integrantText}>Ernesto Oloño</Text>
          </View>

          {/* Botón para cerrar el modal */}
          <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 260,
    height: 260,
    position: 'absolute',
    top: 150,
    borderRadius: 140,
    overflow: 'hidden',
  },
  text: {
    color: 'white',
    position: 'absolute',
    bottom: 39,
    fontSize: 20,
    textAlign: 'center',
    left: 0,
    right: 0,
  },
  buttonGradient: {
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 50,
    top: 300,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fondo oscuro
  },
  modalTitle: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  integrantsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  integrantImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  integrantText: {
    fontSize: 18,
    color: 'white',
  },
  closeButton: {
    backgroundColor: '#6f23e3',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  closeButtonText: {
    fontSize: 18,
    color: 'white',
  },
});

export default Home;
