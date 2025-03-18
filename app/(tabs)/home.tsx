import React, { useState } from "react";
import { Text, View, TouchableOpacity, Modal, Pressable } from "react-native";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@src/hooks/theme";
import { useI18n } from "@src/hooks/i18n";

export default function HomeScreen() {
  const [showDropdown, setShowDropdown] = useState(false);
  const { themeMode, setTheme, colors, systemColorScheme } = useTheme();
  const { t, locale } = useI18n()
  console.log(themeMode, "themeMode")
  const DropdownMenu = () => (
    <Modal
      transparent={true}
      visible={showDropdown}
      onRequestClose={() => setShowDropdown(false)}
      animationType="fade"
    >
      <Pressable
        style={{ flex: 1 }}
        onPress={() => setShowDropdown(false)}
      >
        <View style={{
          position: 'absolute',
          right: 10,
          top: 60,
          backgroundColor: colors.background2,
          borderRadius: 8,
          padding: 8,
          elevation: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

        }}>
          <TouchableOpacity
            onPress={() => {
              setShowDropdown(false);
              // TODO: Implement add contact functionality
              alert('添加联系人');
            }}
            style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}
          >
            <Ionicons name="person-add-outline" size={20} color={colors.text} />
            <Text style={{ marginLeft: 10 ,color:colors.text,fontWeight:600 }}>添加联系人</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setShowDropdown(false);
              // TODO: Implement QR scan functionality
              alert('扫码功能开发中');
            }}
            style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}
          >
            <Ionicons name="scan-outline" size={20} color={colors.text} />
            <Text style={{ marginLeft: 10 ,color:colors.text,fontWeight:600 }}>扫码</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  );

  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <TouchableOpacity
              onPress={() => setShowDropdown(true)}
              style={{ marginRight: 15 }}
            >
              <Ionicons name="add-circle-outline" size={24} color={colors.text} />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor: colors.background}}>
        <Text className="text-red-500 text-2xl">Home11 Screen {themeMode}  {locale} </Text>
      </View>
      <DropdownMenu />
    </>
  );
} 