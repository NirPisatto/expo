import { View, Platform, Text, Pressable } from "react-native";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Modal() {
  const isPresented = router.canGoBack();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Pressable
        onPress={() => {
          console.log(router.canGoBack());
        }}
      >
        <Text>asd</Text>
      </Pressable>
      {/* Use `../` as a simple way to navigate to the root. This is not analogous to "goBack". */}
      {!isPresented && <Link href="/_sitemap">Dismiss</Link>}
      {/* Native modals have dark backgrounds on iOS. Set the status bar to light content and add a fallback for other platforms with auto. */}
      <StatusBar />
    </View>
  );
}
