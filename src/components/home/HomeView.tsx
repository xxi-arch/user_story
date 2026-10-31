import { RealmProvider, useQuery } from "@realm/react";
import { User } from "@src/models/User";
import { Attr } from "@src/models/Attr";
import React from "react";
import { View, Text, FlatList } from "react-native";

// 将原生数据库依赖放在路由目录之外，网页打包时使用同名的 Web 组件。
export default function HomeView() {
  return (
    <RealmProvider schema={[User, Attr]} schemaVersion={3}>
      <UserList />
    </RealmProvider>
  );
}

function UserList() {
  const user = useQuery(User);

  return (
    <View>
        <Text>11</Text>
      <FlatList<User>
        data={user}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
}
