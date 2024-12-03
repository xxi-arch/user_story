import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";

export default function TabsLayout() {
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: '#1eaa61', // 设置选中颜色
    }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "首页",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="userbook"
        options={{
          title: "通讯录",
          tabBarIcon: ({ color, size }) => (
            <Feather name="users" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "设置",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
