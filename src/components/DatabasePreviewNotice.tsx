import { Text, View } from "react-native";
import { useI18n } from "@src/hooks/i18n";
import { useTheme } from "@src/hooks/theme";

export default function DatabasePreviewNotice() {
  const { t } = useI18n();
  const { colors } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        backgroundColor: colors.background,
      }}
    >
      <Text style={{ color: colors.text, fontSize: 18, fontWeight: "600" }}>
        {t("database_preview.title")}
      </Text>
      <Text
        style={{ color: colors.text, marginTop: 12, textAlign: "center" }}
      >
        {t("database_preview.description")}
      </Text>
    </View>
  );
}
