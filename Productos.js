import React, { useState } from 'react';
import {View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet,} from 'react-native';

import {
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

export default function Productos({ navigation }) {

  const [buscar, setBuscar] = useState('');

  const productos = [
    {
      id: '1',
      nombre: 'Torta de Chocolate',
      precio: 35.00,
      stock: 10,
      icono: 'cake-variant',
    },
    {
      id: '2',
      nombre: 'Cheesecake de Fresa',
      precio: 30.00,
      stock: 8,
      icono: 'cake',
    },
    {
      id: '3',
      nombre: 'Cupcake de Vainilla',
      precio: 8.00,
      stock: 25,
      icono: 'cake',
    },
    {
      id: '4',
      nombre: 'Donas',
      precio: 6.00,
      stock: 40,
      icono: 'cookie',
    },
    {
      id: '5',
      nombre: 'Pie de Limón',
      precio: 25.00,
      stock: 12,
      icono: 'cake-variant',
    },
    {
      id: '6',
      nombre: 'Brownie',
      precio: 7.00,
      stock: 18,
      icono: 'food',
    },
  ];

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre
      .toLowerCase()
      .includes(buscar.toLowerCase())
  );

  const renderProducto = ({ item }) => {

    return (
      <TouchableOpacity style={styles.productoCard}>

        <View style={styles.imagenProducto}>
          <MaterialCommunityIcons
            name={item.icono}
            size={38}
            color="#8B4A2B"
          />
        </View>

        <View style={styles.infoProducto}>

          <Text style={styles.nombreProducto}>
            {item.nombre}
          </Text>

          <Text style={styles.precioProducto}>
            S/ {item.precio.toFixed(2)}
          </Text>

          <Text style={styles.stockProducto}>
            Stock: {item.stock}
          </Text>

        </View>

        <TouchableOpacity>
          <Ionicons
            name="ellipsis-vertical"
            size={20}
            color="#6F5A4A"
          />
        </TouchableOpacity>

      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>

      

      <View style={styles.header}>

        <TouchableOpacity
          onPress={() => navigation?.goBack()}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color="#FFFFFF"
          />
        </TouchableOpacity>

        <Text style={styles.titulo}>
          Productos
        </Text>

        <View style={{ width: 24 }} />

      </View>


    {/* BARRA DE BÚSQUEDA */}

      <View style={styles.buscarContainer}>

        <Ionicons
          name="search-outline"
          size={21}
          color="#A8886D"
        />

        <TextInput
          style={styles.buscarInput}
          placeholder="Buscar producto..."
          placeholderTextColor="#A8886D"
          value={buscar}
          onChangeText={setBuscar}
        />

        <TouchableOpacity>
          <Ionicons
            name="options-outline"
            size={22}
            color="#8B4A2B"
          />
        </TouchableOpacity>

      </View>


      {/* lista de productos */}

      <FlatList
        data={productosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={renderProducto}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.lista}
      />


      {/* Agregar producto */}

      <TouchableOpacity
        style={styles.botonAgregar}
        onPress={() => {
          console.log('Nuevo producto');
        }}
      >
        <Ionicons
          name="add"
          size={32}
          color="#FFFFFF"
        />
      </TouchableOpacity>


      

      

    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FDF6F0',
  },

  header: {
    height: 65,
    backgroundColor: '#8B4A2B',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingHorizontal: 20,
  },

  titulo: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },

  buscarContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    marginHorizontal: 18,
    marginTop: 18,

    paddingHorizontal: 13,

    height: 48,

    borderRadius: 12,

    borderWidth: 1,
    borderColor: '#EAD9C9',
  },

  buscarInput: {
    flex: 1,

    marginLeft: 9,

    fontSize: 14,

    color: '#5C3A21',
  },

  lista: {
    paddingHorizontal: 18,
    paddingTop: 12,
    paddingBottom: 100,
  },

  productoCard: {
    backgroundColor: '#FFFFFF',

    minHeight: 82,

    borderRadius: 13,

    marginBottom: 10,

    padding: 10,

    flexDirection: 'row',
    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#EAD9C9',

    elevation: 2,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 3,

    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  imagenProducto: {
    width: 62,
    height: 62,

    borderRadius: 10,

    backgroundColor: '#F7E9DE',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 12,
  },

  infoProducto: {
    flex: 1,
  },

  nombreProducto: {
    fontSize: 15,

    fontWeight: '600',

    color: '#4F3424',

    marginBottom: 5,
  },

  precioProducto: {
    fontSize: 13,

    color: '#6F5A4A',
  },

  stockProducto: {
    fontSize: 13,

    color: '#48A875',

    fontWeight: '600',

    marginTop: 3,
  },

  botonAgregar: {
    position: 'absolute',

    right: 22,
    bottom: 75,

    width: 58,
    height: 58,

    borderRadius: 29,

    backgroundColor: '#8B4A2B',

    alignItems: 'center',
    justifyContent: 'center',

    elevation: 5,
  },

  bottomNav: {
    position: 'absolute',

    bottom: 0,
    left: 0,
    right: 0,

    height: 68,

    backgroundColor: '#FFFFFF',

    borderTopWidth: 1,
    borderTopColor: '#EAD9C9',

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',
  },

  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  navTexto: {
    fontSize: 11,

    color: '#7B6B5D',

    marginTop: 3,
  },

  navTextoActivo: {
    fontSize: 11,

    color: '#8B4A2B',

    fontWeight: '600',

    marginTop: 3,
  },

});