import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { LogOut, ChevronRight } from 'lucide-react-native';
import { router } from 'expo-router';

const ProfileOption = ({ title, onPress }) => (
  <TouchableOpacity 
    className="flex-row items-center justify-between p-4 bg-white border-b border-gray-100"
    onPress={onPress}
  >
    <Text className="text-base font-['Inter-Regular']">{title}</Text>
    <ChevronRight size={20} color="#8E8E93" />
  </TouchableOpacity>
);

export default function Profile() {
  const handleLogout = () => {
    // TODO: Implement logout logic
    router.replace('/login');
  };

  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView className="flex-1">
        <View className="p-8 bg-white">
          <Text className="text-2xl font-['Inter-Bold'] mb-2">John Doe</Text>
          <Text className="text-gray-600 font-['Inter-Regular']">john.doe@example.com</Text>
        </View>

        <View className="mt-6">
          <ProfileOption title="Edit Profile" onPress={() => {}} />
          <ProfileOption title="Notifications" onPress={() => {}} />
          <ProfileOption title="Payment Methods" onPress={() => {}} />
          <ProfileOption title="Help & Support" onPress={() => {}} />
          <ProfileOption title="Privacy Policy" onPress={() => {}} />
        </View>

        <TouchableOpacity 
          className="mt-6 mx-4 p-4 bg-danger rounded-lg flex-row items-center justify-center"
          onPress={handleLogout}
        >
          <LogOut size={20} color="#fff" />
          <Text className="text-white ml-2 font-['Inter-SemiBold']">Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}