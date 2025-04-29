import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { CreditCard, History, Settings } from 'lucide-react-native';
import { router } from 'expo-router';

const FeatureCard = ({ icon: Icon, title, description, onPress }) => (
  <TouchableOpacity 
    className="bg-white p-6 rounded-xl shadow-sm mb-4 border border-gray-100"
    onPress={onPress}
  >
    <View className="flex-row items-center mb-3">
      <Icon size={24} color="#007AFF" />
      <Text className="text-lg font-['Inter-SemiBold'] ml-3">{title}</Text>
    </View>
    <Text className="text-gray-600 font-['Inter-Regular']">{description}</Text>
  </TouchableOpacity>
);

export default function Home() {
  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView className="flex-1 px-4 pt-12">
        <Text className="text-3xl font-['Inter-Bold'] mb-2">Welcome back,</Text>
        <Text className="text-xl text-gray-600 font-['Inter-Regular'] mb-8">John Doe</Text>

        <FeatureCard
          icon={CreditCard}
          title="Make Payment"
          description="Quick and secure payments using Razorpay"
          onPress={() => router.push('/payments')}
        />

        <FeatureCard
          icon={History}
          title="Payment History"
          description="View your past transactions and payment status"
          onPress={() => router.push('/payments/history')}
        />

        <FeatureCard
          icon={Settings}
          title="Account Settings"
          description="Manage your profile and preferences"
          onPress={() => router.push('/profile')}
        />
      </ScrollView>
    </View>
  );
}