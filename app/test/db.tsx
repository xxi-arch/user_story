import { useRealm, useQuery, RealmProvider } from "@realm/react";
import { Task } from "@src/models/task";

import { FlatList, View, Text, Button } from "react-native";

export default () => {
  const realm = useRealm();
  const tasks = useQuery(Task);

  const addTask = () => {
    let res = Task.generate("New Task");
    console.log("xxxxxxxx", res);

    realm.write(() => {
      realm.create("Task", res);
    });
  };

  const delAll = () => {
    realm.write(() => {
      realm.deleteAll();
    });
  };

  return (
    <View>
      <Button title="Add Task" onPress={addTask} />
      <Button title="del  all" onPress={delAll} />
      <FlatList<Task>
        data={tasks}
        renderItem={({ item }) => {
          return <Text>{item.description}</Text>;
        }}
      />

      <Text>{tasks.length}</Text>
      <Text>{JSON.stringify(tasks)}</Text>
    </View>
  );
};
