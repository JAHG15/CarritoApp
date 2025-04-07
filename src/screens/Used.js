import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const Used = () => {
  const components = [
    { name: 'Esp32', image: require('../../assets/images/esp32.jpeg') },
    { name: 'Jumpers', image: require('../../assets/images/jumpers.jpg') },
    { name: 'Micro Protoboard', image: require('../../assets/images/proto.webp') },
    { name: 'Chasis', image: require('../../assets/images/chasis.jpeg') },
    { name: 'Motorreductores', image: require('../../assets/images/moto.jpeg') },
    { name: 'Llantas', image: require('../../assets/images/llanta.jpeg') },
    { name: 'Fuente para proto', image: require('../../assets/images/fuente.jpeg') },
    { name: 'Puente H', image: require('../../assets/images/puente.jpeg') },
    { name: 'Sensores opticos', image: require('../../assets/images/optico.jpeg') },
    { name: 'Pilas 18650', image: require('../../assets/images/pila.jpeg') },
    { name: 'Porta pilas', image: require('../../assets/images/porta.jpeg') },
    { name: 'Rueda loca', image: require('../../assets/images/rueda.jpeg') },
    { name: 'Sensor DHT11', image: require('../../assets/images/dht.jpeg') },
    { name: 'Sensor MPU6050', image: require('../../assets/images/giro.jpeg') },
    { name: 'Sensor BMP180', image: require('../../assets/images/presion.jpeg') },
    
  ];

  return (
    <LinearGradient colors={['#140248', '#6f23e3']} style={styles.container}>
      <Text style={[styles.text, { color: 'white', position: 'absolute', top: 85, fontSize: 30, fontWeight: 'bold' }]}>
        Componentes utilizados
      </Text>

      <ScrollView contentContainerStyle={styles.tableContainer}>
        {components.map((component, index) => (
          <View key={index} style={styles.row}>
            <Image source={component.image} style={styles.image} />
            <Text style={styles.componentName}>{component.name}</Text>
          </View>
        ))}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  tableContainer: {
    marginTop: 150, // Ajusta la posición de la tabla
    padding: 20,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#fff', // Línea separadora entre filas
    paddingBottom: 10,
    paddingLeft: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 25, // Hace que las imágenes sean redondas
    marginRight: 20,
  },
  componentName: {
    fontSize: 18,
    color: 'white',
  },
});

export default Used;
