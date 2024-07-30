import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router';

import { images } from '../constants';
import FormField from './components/FormField';
import CustomButton from './components/CustomButton'

export default function App() {
  const [form, setForm] = useState({
    email:'',
    password:''
  });

  const [isSubmitting, setisSubmitting] = useState(false)

  const submit = () => {

  }
  
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[83vh] px-4 my-6" >
            <View className="items-center">
              <Image source={images.logo} className="w-[230px] h-[70px]"/>
            </View>
            <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
                Log in
            </Text>
            
            <FormField
              title="Email"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              otherStyles="mt-7"
              keyboardType="email-address"
            />

            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              otherStyles="mt-7"
              keyboardType="password-address"
            />

            <CustomButton
              title="Sign In"
              handlePress={submit}
              containerStyles="mt-7"
              isLoading={isSubmitting}
            />
            <Link href="/home" style={{color:'blue'}}>AAAAAA</Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
