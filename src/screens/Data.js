import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Data = () => {
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch('http://192.168.68.52/carro/consulta.php') // Cambia por tu IP real
        .then(response => response.json())
        .then(data => setSensorData(data))
        .catch(error => console.error("Error al obtener datos:", error));
    };

    fetchData(); // Llamada inicial

    const interval = setInterval(fetchData, 3000); // Ejecutar cada 3 segundos

    return () => clearInterval(interval); // Limpiar intervalo al desmontar el componente
  }, []);

  return (
    <LinearGradient colors={['#140248', '#6f23e3']} style={styles.container}>
      <Text style={[styles.title]}>Datos Recopilados</Text>

      <View style={styles.table}>
        <View style={styles.row}>
          <View style={styles.column}>
            <FontAwesome5 name="thermometer-half" size={24} color="white" />
            <Text style={styles.header}>Temperatura</Text>
            <Text style={styles.header}>(°C)</Text>
          </View>
          <View style={styles.column}>
            <FontAwesome5 name="tint" size={24} color="white" />
            <Text style={styles.header}>Humedad</Text>
            <Text style={styles.header}>(%)</Text>
          </View>
          <View style={styles.column}>
            <FontAwesome5 name="wind" size={24} color="white" />
            <Text style={styles.header}>Presión</Text>
            <Text style={styles.header}>(hPa)</Text>
          </View>
        </View>

        {sensorData.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.data}>{item.temperatura}</Text>
            <Text style={styles.data}>{item.humedad}</Text>
            <Text style={styles.data}>{item.presion}</Text>
          </View>
        ))}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', paddingTop: 80 },
  title: { color: 'white', fontSize: 30, fontWeight: 'bold', marginBottom: 20 },
  table: { width: '95%', backgroundColor: 'rgba(23, 22, 22, 0.2)', borderRadius: 10, padding: 10, top: 18 },
  row: { flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: 'white' },
  column: { alignItems: 'center', flex: 1 },
  header: { color: 'white', fontSize: 16, fontWeight: 'bold', marginTop: 5 },
  data: { color: 'white', fontSize: 18, textAlign: 'center', flex: 1 },
});

export default Data;
