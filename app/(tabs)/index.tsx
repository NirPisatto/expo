import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  StatusBar,
} from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white text-white">
      <View className="flex-1 items-center justify-center">
        <Text className="text-xl">Tap - Home</Text>
      </View>
    </View>
  );
}
