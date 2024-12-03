import { Stack } from "expo-router";
import React from "react";
import { Alert, Button, Text, View } from "react-native";
export default function My() {
  return (
    <View>
      <Stack.Screen
        options={{
          title: "首页",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          // 自定义右侧按钮
          headerRight: () => (
            <View style={{ marginRight: 15 }}>
              <Text style={{ color: "#fff" }}>更多</Text>
            </View>
          ),
        }}
      />

      <Text style={{ backgroundColor: "red" }}>3333</Text>
    </View>
  );
}
