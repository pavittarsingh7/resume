import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { WebView } from 'react-native-webview';

export default function PaymentScreen() {
  const [amount, setAmount] = useState('');
  const [showRazorpay, setShowRazorpay] = useState(false);

  const handlePayment = () => {
    if (!amount || isNaN(Number(amount))) {
      alert('Please enter a valid amount');
      return;
    }
    setShowRazorpay(true);
  };

  if (showRazorpay) {
    return (
      <WebView
        source={{
          uri: `https://api.razorpay.com/v1/checkout/embedded`,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            key: 'YOUR_RAZORPAY_KEY',
            amount: Number(amount) * 100, // Convert to paise
            currency: 'INR',
            name: 'Your Company Name',
            description: 'Payment for services',
            theme: {
              color: '#007AFF',
            },
          }),
        }}
        onNavigationStateChange={(navState) => {
          // Handle payment success/failure based on URL
          if (navState.url.includes('success')) {
            setShowRazorpay(false);
            // Handle success
          } else if (navState.url.includes('failure')) {
            setShowRazorpay(false);
            // Handle failure
          }
        }}
      />
    );
  }

  return (
    <View className="flex-1 bg-white p-4">
      <View className="flex-1 justify-center">
        <Text className="text-3xl font-['Inter-Bold'] mb-8 text-center">Make Payment</Text>
        
        <View className="space-y-4">
          <TextInput
            className="bg-light p-4 rounded-lg"
            placeholder="Enter amount"
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
          />
          
          <TouchableOpacity
            className="bg-primary p-4 rounded-lg"
            onPress={handlePayment}
          >
            <Text className="text-white text-center font-['Inter-SemiBold']">Pay Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}