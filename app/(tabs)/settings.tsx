import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@src/models/them";
import { useI18n } from "@src/hooks/useI18n";
import { router } from "expo-router";

export default function SettingsScreen() {
  const { colors, themeMode, systemColorScheme } = useTheme();
  const { locale } = useI18n();

  // 获取当前主题模式的显示文本
  const getThemeText = () => {
    switch(themeMode) {
      case 'light':
        return '浅色模式';
      case 'dark':
        return '深色模式';
      case 'system':
        return `跟随系统(${systemColorScheme === 'dark' ? '深色' : '浅色'})`;
      default:
        return '浅色模式';
    }
  };

  const settingsOptions = [
    {
      title: '主题设置',
      icon: 'color-palette-outline',
      onPress: () => router.push("/(settings)/theme"),
      value: getThemeText()
    },
    {
      title: '语言设置',
      icon: 'language-outline',
      onPress: () => router.push("/(settings)/language"),
      value: locale === 'zh' ? '简体中文' : 'English'
    }
  ];

  return (
    <View style={{ 
      flex: 1, 
      backgroundColor: colors.background
    }}>
      {settingsOptions.map((option, index) => (
        <TouchableOpacity 
          key={option.title}
          onPress={option.onPress}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 16,
            borderBottomWidth: 1,
            borderBottomColor: colors.border,
          }}
        >
          <Ionicons 
            name={option.icon as any}
            size={24} 
            color={colors.text}
          />
          <View style={{ marginLeft: 12, flex: 1 }}>
            <Text style={{ color: colors.text, fontSize: 16 }}>
              {option.title}
            </Text>
            <Text style={{ color: colors.text + '80', fontSize: 12, marginTop: 4 }}>
              {option.value}
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color={colors.text} />
        </TouchableOpacity>
      ))}
    </View>
  );
} 