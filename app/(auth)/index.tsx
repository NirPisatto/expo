import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  StatusBar,
} from "react-native";
import { Link } from "expo-router";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from "@expo/vector-icons";

export default function AuthLoginScreen() {
  return (
    <View className="flex-1 bg-white text-white py-16 px-6">
      <View className="flex-1">
        <Text className="text-3xl mb-3">Auth Login</Text>
        <Link
          href="/register"
          className="text-purple-800 text-xl underline underline-offset-4"
        >
          Register Now
        </Link>

        <Link
          href="/(tabs)"
          className="text-purple-800 text-xl underline underline-offset-4 mt-3"
        >
          Go Home
        </Link>
      </View>
    </View>
  );
}
