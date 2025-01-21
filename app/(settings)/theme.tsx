import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme, initializeTheme, themeModeAtom, ThemeMode } from "@src/models/them";
import { useSetAtom } from 'jotai';
import { Stack, router } from "expo-router";

export default function ThemeSettings() {
  const { themeMode, setTheme, colors, systemColorScheme } = useTheme();
  const setThemeModeAtom = useSetAtom(themeModeAtom);
  // 用于临时存储选择的主题，只有点击保存后才真正应用
  const [selectedTheme, setSelectedTheme] = useState<ThemeMode>(themeMode);

  // 在组件加载时初始化主题
  useEffect(() => {
    const loadTheme = async () => {
      const initialTheme = await initializeTheme();
      setThemeModeAtom(initialTheme);
      setSelectedTheme(initialTheme);
    };
    loadTheme();
  }, []);

  // 主题选项配置
  const themeOptions: { mode: ThemeMode; label: string; icon: string }[] = [
    { mode: 'light', label: '浅色模式', icon: 'sunny' },
    { mode: 'dark', label: '深色模式', icon: 'moon' },
    { mode: 'system', label: '跟随系统', icon: 'phone-portrait-outline' },
  ];

  // 保存主题设置
  const handleSave = () => {
    setTheme(selectedTheme);
    router.navigate("/(tabs)/settings");
  };

  // 取消设置
  const handleCancel = () => {
    router.navigate("/(tabs)/settings");
  };

  return (
    <>
      <Stack.Screen 
        options={{
          title: "主题设置",
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTintColor: colors.text,
          // 添加左侧返回按钮
          headerLeft: () => (
            <TouchableOpacity 
              onPress={handleCancel}
              style={{ marginLeft: 10 }}
            >
              <Text style={{ color: colors.tint }}>取消</Text>
            </TouchableOpacity>
          ),
          // 添加右侧保存按钮
          headerRight: () => (
            <TouchableOpacity 
              onPress={handleSave}
              style={{ marginRight: 10 }}
            >
              <Text style={{ 
                color: selectedTheme !== themeMode ? colors.tint : colors.text + '50',
                fontWeight: 'bold'
              }}>
                保存
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <View style={{ 
        flex: 1, 
        backgroundColor: colors.background,
      }}>
        {themeOptions.map((option, index) => (
          <TouchableOpacity 
            key={option.mode}
            onPress={() => setSelectedTheme(option.mode)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 16,
              borderBottomWidth: index !== themeOptions.length - 1 ? 1 : 0,
              borderBottomColor: colors.border,
              backgroundColor: selectedTheme === option.mode 
                ? colors.tint + '20' 
                : 'transparent'
            }}
          >
            <Ionicons 
              name={option.icon as any}
              size={24} 
              color={colors.text}
            />
            <View style={{ marginLeft: 12, flex: 1 }}>
              <Text style={{ color: colors.text, fontSize: 16 }}>
                {option.label}
              </Text>
              {option.mode === 'system' && (
                <Text style={{ color: colors.text + '80', fontSize: 12 }}>
                  当前系统为{systemColorScheme === 'dark' ? '深色' : '浅色'}模式
                </Text>
              )}
            </View>
            {selectedTheme === option.mode && (
              <Ionicons name="checkmark" size={24} color={colors.tint} />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
} 