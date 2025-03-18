import { Alert, Button, Text, useColorScheme, View } from "react-native";
import { Link, router, Tabs } from "expo-router";
import { useI18n } from "@src/hooks/i18n";
import { useThemeColor } from "@src/hooks/theme/useThemeColor";


export { useColorScheme } from "react-native";

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
