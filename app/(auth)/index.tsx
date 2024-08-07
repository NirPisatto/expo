import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  ScrollView,
} from "react-native";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import CusButton from "@/components/CusButton";

export default function AuthLoginScreen() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center px-6">
          <View className="flex flex-row justify-center items-center py-3 mt-6 w-fit">
            <Image
              source={require("@assets/images/logo-small.png")}
              className="w-[80px] h-[60px]"
              resizeMode="contain"
            />
            <Text className="text-4xl mt-2 font-bold text-secondary-100">
              Expo
            </Text>
          </View>

          <Image
            source={require("@assets/images/cards.png")}
            className="max-w--[300px] w-full h-[300px]"
            resizeMode="contain"
          />

          <View className="relatice mt-5">
            <Text className="text-3xl font-bold mb-3 text-white text-center">
              Get Started With All Possible Features with
              <Text className="text-secondary-200"> New Expo</Text>
            </Text>
            <Image
              source={require("@assets/images/path.png")}
              className="w-[136px] h-[15px] absolute -bottom-2 right-20"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <CusButton
            title="Start Now"
            handlePress={() => router.push("./login")}
            containerStyles="w-full mt-6 text-primary"
          >
            {/* <Ionicons name="chevron-forward" size={24} color="white" /> */}
          </CusButton>
        </View>
      </ScrollView>
      <StatusBar style="light" backgroundColor="#161622" />
    </SafeAreaView>
    // <View className="flex-1 bg-white text-white py-16 px-6">
    //   <View className="flex-1">
    //     <Text className="text-3xl mb-3 font-pblack">Auth Login</Text>
    //     <Link
    //       href="/register"
    //       className="text-purple-800 text-xl underline underline-offset-4"
    //     >
    //       Register Now
    //     </Link>

    //     <Link
    //       href="/(tabs)"
    //       className="text-purple-800 text-xl underline underline-offset-4 mt-3"
    //     >
    //       Go Home
    //     </Link>
    //   </View>
    // </View>
  );
}
