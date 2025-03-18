import { useI18n } from "@src/hooks/i18n";
import React from "react";
import { Alert, Button, Text, View } from "react-native";
export default function Language() {
  const { t, locale, setLocale } = useI18n();
  return (
    <View>
      <Text>{t("hello")}</Text>
      <Text>{t("welcome")}</Text>
      <Button
        title={t("buttons.login")}
        onPress={() => {
          /* ... */
        }}
      />
      <Button
        title={locale === "en" ? "切换到中文" : "Switch to English"}
        onPress={() => setLocale(locale === "en" ? "zh" : "en")}
      />
    </View>
  );
}
