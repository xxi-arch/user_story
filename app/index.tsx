import { Alert, Button, Text, useColorScheme, View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Link, Tabs } from "expo-router";
export { useColorScheme } from 'react-native';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text> // 首页内容
    </View>
  );
};
const SettingsScreen = () => {
  return (
    <View>
      <Text>Settings Screen</Text> // 设置页内容
    </View>
  );
};

export default function Index() {
  const m = useColorScheme();
  console.log("useColorScheme", m)
  return (
    <View>
      <Text style={{
        backgroundColor:"red"

      }}>333</Text>
      <Button title="ddd" onPress={() => {
        alert(1)
      }}>
      </Button>
      <Link href={"/my"} >
        <Text>sss</Text>
      </Link>
    </View>
  );
}
