import { StyleSheet } from "react-native";
import { normalizeAnimationKeyframes } from "react-native-reanimated/lib/typescript/css/native";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    padding: 16
  },

  card: {
    backgroundColor: "#111",
    borderRadius: 28,
    padding: 20
  },

  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 16
  },

  presetRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16
  },

  presetButton: {
    backgroundColor: "#2C2C2E",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginHorizontal: 4
  },

  presetText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "500"
  },

  timeRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12
  },

   accessory: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 0,
    backgroundColor: '#fff', // accessory background
    borderColor: '#ccc',
  },
  checkButton: {
    padding: 8,
    // no border, just the icon
  },

  timeInput: {
    width: 60,
    borderBottomWidth: 1,
    borderColor: "#444",
    color: "#fff",
    fontSize: 32,
    textAlign: "center",
    fontWeight: "700"
  },

  colon: {
    color: "#fff",
    fontSize: 28,
    marginHorizontal: 4
  },

  toggleRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginBottom: 16
  },
  btn: {
    backgroundColor: "#1C1C1E", 
    padding: 8 
  },
  toggleText: {
    color: "#8E8E93",
    fontSize: 13
  },

  activeToggle: {
    color: "#fff",
    fontWeight: "600"
  },

  result: {
    alignItems: "center",
    marginBottom: 16
  },

  paceValue: {
    color: "#fff",
    fontSize: 44,
    fontWeight: "700"
  },

  unit: {
    color: "#8E8E93",
    fontSize: 13
  },

  splitsCard: {
    backgroundColor: "#1C1C1E",
    borderRadius: 20,
    padding: 16,
    marginTop: 8
  },

  splitsTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8
  },

  splitRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4
  },

  splitLabel: {
    color: "#8E8E93",
    fontSize: 14
  },

  splitValue: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "500"
  },

  footer: {
    color: "#6E6E73",
    fontSize: 11,
    textAlign: "right",
    marginTop: 12
  }
});
