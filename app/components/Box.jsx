import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';

const Box = ({ pedido }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleMoreInfoPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.box}>
      <Text style={styles.text}>ID Pedido: {pedido.ID_pedido}</Text>
      <Text style={styles.text}>Descripción: {pedido.descripcion}</Text>
      <Text style={styles.text}>Fecha: {pedido.fecha_pedido}</Text>
      <TouchableOpacity style={styles.button} onPress={handleMoreInfoPress}>
        <Text style={styles.buttonText}>Más Información</Text>
      </TouchableOpacity>
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <ScrollView>
              <Text style={styles.modalText}>ID Pedido: {pedido.ID_pedido}</Text>
              <Text style={styles.modalText}>Descripción: {pedido.descripcion}</Text>
              <Text style={styles.modalText}>Fecha: {pedido.fecha_pedido}</Text>
              <Text style={styles.modalText}>Status: {pedido.status}</Text>
              <Text style={styles.modalText}>Calle: {pedido.calle}</Text>
              <Text style={styles.modalText}>Número Exterior: {pedido.num_exterior}</Text>
              <Text style={styles.modalText}>Colonia: {pedido.colonia}</Text>
              <Text style={styles.modalText}>Código Postal: {pedido.cod_postal}</Text>
              <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
                <Text style={styles.buttonText}>Cerrar</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
  },
  closeButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});

export default Box;