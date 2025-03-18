import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@src/hooks/theme";
import { useI18n } from "@src/hooks/i18n";
import { router } from "expo-router";

export default function SettingsScreen() {
  const { colors, themeMode, systemColorScheme } = useTheme();
  const { locale,t } = useI18n();



  const settingsOptions = [
    {
      title: t("setting_page.theme"),
      icon: 'color-palette-outline',
      onPress: () => router.push("/(settings)/theme"),
      value: t(`setting_page.theme_options.${themeMode}`)
    },
    {
      title: t("setting_page.i18n"),
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