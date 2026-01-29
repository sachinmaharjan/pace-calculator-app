import { View, StyleSheet } from "react-native";
import PaceCalculator from "./app/(tabs)/index";

export default function App() {
  return (
    <View style={styles.container}>
      <PaceCalculator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  }
});
