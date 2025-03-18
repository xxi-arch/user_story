import AsyncStorage from "@react-native-async-storage/async-storage";
import { useI18n } from "@src/hooks/i18n";
import { useTheme } from "@src/hooks/theme";
import { Redirect } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  const { themeMode, setTheme, colors, systemColorScheme } = useTheme();

  const { setLocale } = useI18n()

  const init = async () => {
    let theme = await AsyncStorage.getItem('themeMode');
    if (theme) {
      setTheme(theme as any)
    }
    const locale = await AsyncStorage.getItem("locale");
    if (locale) {
      setLocale(locale as any);
    }
  }

  useEffect(() => {
    init()
  }, [])

  return <Redirect href="/(tabs)/home" />;
}
