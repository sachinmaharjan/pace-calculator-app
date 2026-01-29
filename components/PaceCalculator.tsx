import { useState } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  InputAccessoryView, 
  Button,
  SafeAreaView,
  TouchableOpacity, Keyboard, StyleSheet,
} from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; // or react-native-vector-icons/MaterialIcons

import { styles } from "./styles/paceStyles";

const accessoryId = "paceKeyboard";

const PRESETS = [
  { label: "6:00 mile", minutes: 6, seconds: 0 },
  { label: "7:30 mile", minutes: 7, seconds: 30 },
  { label: "9:00 mile", minutes: 9, seconds: 0 }
];

export default function PaceCalculator() {
  const [minutes, setMinutes] = useState(9);
  const [seconds, setSeconds] = useState(30);
  const [direction, setDirection] = useState<"mileToKm" | "kmToMile">(
    "mileToKm"
  );

  const clampMinutes = (v: number) => Math.min(60, Math.max(0, v));
  const clampSeconds = (v: number) => Math.min(59, Math.max(0, v));


  const totalSeconds = minutes * 60 + seconds;
  const baseSeconds =
    direction === "mileToKm"
      ? totalSeconds / 1.609
      : totalSeconds * 1.609;

  const format = (s: number) =>
    `${Math.floor(s / 60)}:${Math.round(s % 60)
      .toString()
      .padStart(2, "0")}`;

  const splits = {
    "200m": baseSeconds * 0.2,
    "400m": baseSeconds * 0.4,
    "800m": baseSeconds * 0.8
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.title}>Pace Calculator</Text>

        {/* Presets */}
        <View style={styles.presetRow}>
          {PRESETS.map((p) => (
            <Pressable
              key={p.label}
              style={styles.presetButton}
              onPress={() => {
                setMinutes(p.minutes);
                setSeconds(p.seconds);
                setDirection("mileToKm");
              }}
            >
              <Text style={styles.presetText}>{p.label}</Text>
            </Pressable>
          ))}
        </View>

        {/* Input */}
        <View style={styles.timeRow}>
          <TextInput
            value={String(minutes)}
            onChangeText={(v) => setMinutes(clampMinutes(Number(v) || 0))}
            keyboardType="numeric"
            style={styles.timeInput}
          />
          <Text style={styles.colon}>:</Text>
          <TextInput
            value={String(seconds)}
            onChangeText={(v) => setSeconds(clampSeconds(Number(v) || 0))}
            keyboardType="numeric"
            style={styles.timeInput}
          />
          <InputAccessoryView nativeID={accessoryId}>
            <View style={styles.accessory}>
              <TouchableOpacity onPress={() => Keyboard.dismiss()} style={styles.checkButton}>
                <MaterialIcons name="check" size={24} color="#4CAF50" />
              </TouchableOpacity>
            </View>
          </InputAccessoryView>
        </View>
        

        {/* Direction */}
        <View style={styles.toggleRow}>
          <Pressable onPress={() => setDirection("mileToKm")}>
            <Text
              style={[
                styles.toggleText,
                direction === "mileToKm" && styles.activeToggle
              ]}
            >
              Mile → KM
            </Text>
          </Pressable>
          <Pressable onPress={() => setDirection("kmToMile")}>
            <Text
              style={[
                styles.toggleText,
                direction === "kmToMile" && styles.activeToggle
              ]}
            >
              KM → Mile
            </Text>
          </Pressable>
        </View>

        {/* Result */}
        <View style={styles.result}>
          <Text style={styles.paceValue}>{format(baseSeconds)}</Text>
          <Text style={styles.unit}>
            per {direction === "mileToKm" ? "km" : "mile"}
          </Text>
        </View>

        {/* Splits */}
        <View style={styles.splitsCard}>
          <Text style={styles.splitsTitle}>Track Splits (1 Lap = 400m)</Text>
          {Object.entries(splits).map(([k, v]) => (
            <View key={k} style={styles.splitRow}>
              <Text style={styles.splitLabel}>{k}</Text>
              <Text style={styles.splitValue}>{format(v)}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.footer}>Created by Sachin Maharjan</Text>
      </View>
    </SafeAreaView>
  );
}
