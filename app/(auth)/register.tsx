import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';
import { z } from 'zod';

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
});

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      registerSchema.parse({ name, email, password });
      // TODO: Implement actual registration logic
      router.replace('/(tabs)');
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      }
    }
  };

  return (
    <View className="flex-1 bg-white p-4">
      <View className="flex-1 justify-center">
        <Text className="text-3xl font-bold mb-8 text-center font-['Inter-Bold']">Create Account</Text>
        
        {error ? <Text className="text-danger mb-4 text-center">{error}</Text> : null}
        
        <View className="space-y-4">
          <TextInput
            className="bg-light p-4 rounded-lg"
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
          />

          <TextInput
            className="bg-light p-4 rounded-lg"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          
          <TextInput
            className="bg-light p-4 rounded-lg"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          
          <TouchableOpacity
            className="bg-primary p-4 rounded-lg"
            onPress={handleRegister}
          >
            <Text className="text-white text-center font-['Inter-SemiBold']">Register</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => router.push('/login')}>
            <Text className="text-center text-primary font-['Inter-Medium']">
              Already have an account? Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}