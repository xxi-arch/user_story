import { Stack } from "expo-router";
import { useTheme } from "@src/models/them";

export default function SettingsLayout() {
  const { colors } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.text,
        // 设置状态栏样式
        statusBarStyle: 'auto',
        // 设置状态栏背景色
        // statusBarColor: colors.background,
        // 设置标题居中
        headerTitleAlign: 'center',
        // 设置返回按钮标题（可选）
        headerBackTitle: "返回",
      }}
    />
  );
} 