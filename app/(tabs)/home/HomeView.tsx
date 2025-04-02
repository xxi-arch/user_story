import { useQuery, useRealm } from "@realm/react";
import { User } from "@src/models/User";
import React from "react";
import { View, Text, FlatList } from "react-native";

export default  function HomeView() {
  const realm = useRealm();
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
