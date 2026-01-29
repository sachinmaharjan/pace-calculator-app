import { View, StyleSheet, SafeAreaView } from "react-native";
import PaceCalculator from "../../components/PaceCalculator";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <PaceCalculator />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    alignItems: 'center',
    color : "#fff",
    backgroundColor: "#000",
  },
  container: {
     alignItems: 'center',

  },
  body: {
  background: "#ffffff",
  color: "#171717",
},
hangright: {
  alignItems: 'right',
},
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
