import React from 'react';
import { View, Text, Image, StyleSheet,  } from 'react-native';

const Testimonio = ({ nombre, pais, cargo, empresa, foto, testimonio }) => {
  return (
    <View style={styles.testimonioContainer}>
      <Image source={foto} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.nombre}>{nombre} en {pais} </Text>
        <Text style={styles.cargo}>{cargo} en {empresa}</Text>
        <Text style={styles.testimonio}>{`"${testimonio}"`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  testimonioContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    alignItems:'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  image: {
    flex: 1,
    height: 150,
    width: '80',
    borderRadius: 10,
    marginRight:10
  },
  textContainer: {
    flex: 2,
    alignSelf: 'center',
    marginLeft: 10,
  },
  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  pais: {
    fontSize: 18,
    color: 'gray',
  },
  cargo: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  testimonio: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default Testimonio;
