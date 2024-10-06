import React from "react";

import { Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={{
          width: 120,
          height: 120,
          borderWidth: 1,
          borderRadius: 5,
          backgroundColor: "#1BA9FF",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => router.push("/screen01")}
      >
        <Text
          style={{
            fontFamily: "Roboto",
            fontSize: 20,
            color: "#fff",
          }}
        >
          Screen_01
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 120,
          height: 120,
          borderWidth: 1,
          borderRadius: 5,
          backgroundColor: "#1BA9FF",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => router.push("/screen02")}
      >
        <Text
          style={{
            fontFamily: "Roboto",
            fontSize: 20,
            color: "#fff",
          }}
        >
          Screen_02
        </Text>
      </TouchableOpacity>
    </View>
  );
}
