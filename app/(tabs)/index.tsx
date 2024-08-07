import { Image, StyleSheet, Platform, View, Text } from "react-native";

import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white text-white">
      <View className="flex-1 items-center justify-center">
        <Text className="text-xl">Tap - Home</Text>
      </View>
      <StatusBar style="dark" backgroundColor="white" />
    </View>
  );
}
