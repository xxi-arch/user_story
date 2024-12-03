import { Alert, Button, Text, useColorScheme, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Link, router, Tabs } from "expo-router";
import { useThemeColor } from "./hooks/useThemeColor";
import { useI18n } from "./hooks/useI18n";
export { useColorScheme } from "react-native";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text> // 首页内容
    </View>
  );
};
const SettingsScreen = () => {
  return (
    <View>
      <Text>Settings Screen</Text> // 设置页内容
    </View>
  );
};

export default function Index() {
  const m = useColorScheme();
  console.log("useColorScheme", m);
  const { t, locale, setLocale } = useI18n();

  const theme = useThemeColor({ dark: "red", light: "blue" }, "background");
  return (
    <View>
      <Text
        style={{
          backgroundColor: theme,
        }}
      >
        主题测试
      </Text>

      <View style={{ paddingTop: 50 }}>
        <Button
          title="弹框"
          onPress={() => {
            alert("你好");
          }}
        ></Button>
      </View>

      <View style={{ paddingTop: 50 }}>
        <Button
          title="到个人中心-顶部状态栏测试"
          onPress={() => {
            router.push("/my");
          }}
        ></Button>
      </View>

      <View style={{ paddingTop: 50 }}>
        <Button
          title="多语言测试"
          onPress={() => {
            router.push("/language");
          }}
        ></Button>
      </View>
    </View>
  );
}
