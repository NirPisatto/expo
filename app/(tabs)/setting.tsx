import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View, StatusBar } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Link } from "expo-router";

export default function TabTwoScreen() {
  const colorScheme = useColorScheme();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#D0D0D0" }}
      headerImage={
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      }
    >
      <View className="bg-white text-white my-0 py-2">
        <Text className="text-xl">Setting</Text>
        <View className="flex flex-col gap-6">
          <Text>
            This is a sample app to demonstrate the usage of Expo with
            TypeScript.
          </Text>

          <Link href="/(auth)" className="text-purple-800 text-xl">
            Logout
          </Link>
        </View>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
