import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@src/hooks/theme";
import { useI18n } from "@src/hooks/i18n";
import { Stack, router } from "expo-router";
import { Language } from "@src/constants/languages";

export default function LanguageSettings() {
  const { colors } = useTheme();
  const { t, locale, setLocale } = useI18n();
  // 用于临时存储选择的语言
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(locale);

  const languages = [
    { code: 'zh' as Language, label: '简体中文', icon: 'language' },
    { code: 'en' as Language, label: 'English', icon: 'language' },
  ];

  // 保存语言设置
  const handleSave = () => {
    setLocale(selectedLanguage);
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
          title: t("setting_page.i18n"),
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
              <Text style={{ color: colors.tint }}>{t("cancel")}</Text>
            </TouchableOpacity>
          ),
          // 添加右侧保存按钮
          headerRight: () => (
            <TouchableOpacity
              onPress={handleSave}
              style={{ marginRight: 10 }}
            >
              <Text style={{
                color: selectedLanguage !== locale ? colors.tint : colors.text + '50',
                fontWeight: 'bold'
              }}>
                {t("save")}
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <View style={{
        flex: 1,
        backgroundColor: colors.background,
      }}>
        {languages.map((lang, index) => (
          <TouchableOpacity
            key={lang.code}
            onPress={() => setSelectedLanguage(lang.code)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 16,
              borderBottomWidth: index !== languages.length - 1 ? 1 : 0,
              borderBottomColor: colors.border,
              backgroundColor: selectedLanguage === lang.code
                ? colors.tint + '20'
                : 'transparent'
            }}
          >
            <Ionicons
              name={lang.icon as any}
              size={24}
              color={colors.text}
            />
            <View style={{ marginLeft: 12, flex: 1 }}>
              <Text style={{ color: colors.text, fontSize: 16 }}>
                {lang.label}
              </Text>
            </View>
            {selectedLanguage === lang.code && (
              <Ionicons name="checkmark" size={24} color={colors.tint} />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
} 