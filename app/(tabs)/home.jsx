import React, { useState } from "react";
import { SafeAreaView, ScrollView } from 'react-native';
import { FlatList, Image, RefreshControl, Text, View } from "react-native";
import Box from "../components/Box";

import { images } from "../../constants";

const pedidos = [
  {
    ID_pedido: '1',
    descripcion: 'Pedido de prueba',
    fecha_pedido: '2023-07-29',
    status: 'En camino',
    calle: 'Av. Siempre Viva',
    num_exterior: '742',
    colonia: 'Springfield',
    cod_postal: '12345',
  },
  {
    ID_pedido: '2',
    descripcion: 'Pedido de prueba',
    fecha_pedido: '2023-07-29',
    status: 'En camino',
    calle: 'Av. Siempre Viva',
    num_exterior: '742',
    colonia: 'Springfield',
    cod_postal: '12345',
  },
  {
    ID_pedido: '3',
    descripcion: 'Pedido de prueba',
    fecha_pedido: '2023-07-29',
    status: 'En camino',
    calle: 'Av. Siempre Viva',
    num_exterior: '742',
    colonia: 'Springfield',
    cod_postal: '12345',
  },
  {
    ID_pedido: '4',
    descripcion: 'Pedido de prueba',
    fecha_pedido: '2023-07-29',
    status: 'En camino',
    calle: 'Av. Siempre Viva',
    num_exterior: '742',
    colonia: 'Springfield',
    cod_postal: '12345',
  },
];


const Home = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
      <View className="flex my-6 px-4 space-y-6">
        <View className="flex justify-between items-start flex-row mb-6">
          <View>
            <Text className="font-pmedium text-sm text-gray-100">
              Welcome Back
            </Text>
            <Text className="text-2xl font-psemibold text-white">
              Username
            </Text>
          </View>
          <View className="mt-1.5">
            <Image source={images.logo} className="w-[115px] h-[35px]" />
          </View>
        </View>
        {pedidos.map((pedido) => (
            <Box key={pedido.ID_pedido} pedido={pedido} />
          ))}
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;