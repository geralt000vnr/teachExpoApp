import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import UserRoutes from "./routes/UserRoutes";

export default function App() {
  return (
    <View style={styles.container}>
      <UserRoutes />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
