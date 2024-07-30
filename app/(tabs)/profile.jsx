import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'react-native-image-picker';
import { icons } from '../../constants';
import { Link } from 'expo-router';
import { images } from '../../constants';
import CustomButton from '../components/CustomButton';
import FormField from '../components/FormField';

const Profile = () => {
  const [form, setForm] = useState({
    nombre: '',
    apell: '',
    telef: '',
    email: '',
    licencia: ''
  });

  const [isSubmitting, setisSubmitting] = useState(false);

  const submit = () => {
    // Add your submit logic here
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.photoSection}>
          <TouchableOpacity style={styles.photoContainer}>
            <Image source="profile.png" style={styles.photo} />
            <View style={styles.photoPlaceholder}>
              <Text>Choose Photo</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.formSection} className="bg-primary h-full">
          <FormField
            title="Nombre"
            value={form.nombre}
            handleChangeText={(e) => setForm({ ...form, nombre: e })}
            otherStyles="mt-7"
            keyboardType="default"
            inputStyle={styles.input}
          />
          <FormField
            title="Apellido"
            value={form.apell}
            handleChangeText={(e) => setForm({ ...form, apell: e })}
            otherStyles="mt-7"
            keyboardType="default"
            inputStyle={styles.input}
          />
          <FormField
            title="Telefono"
            value={form.telef}
            handleChangeText={(e) => setForm({ ...form, telef: e })}
            otherStyles="mt-7"
            keyboardType="phone-pad"
            inputStyle={styles.input}
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
            inputStyle={styles.input}
          />
          <FormField
            title="Licencia"
            value={form.licencia}
            handleChangeText={(e) => setForm({ ...form, licencia: e })}
            otherStyles="mt-7"
            keyboardType="default"
            inputStyle={styles.input}
          />

          <CustomButton
            title="Editar"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  photoSection: {
    backgroundColor: '#ffffff',
    padding: 16,
    alignItems: 'center',
  },
  photoContainer: {
    marginBottom: 16,
    alignItems: 'center',
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 8,
  },
  photoPlaceholder: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#e1e1e1',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  formSection: {
    padding: 16,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
    padding: 8,
  },
});

export default Profile;