import Realm from "realm";

// 定义 Task 模型
// class Task extends Realm.Object {
//   static schema = {
//     name: 'Task',
//     primaryKey: '_id',
//     properties: {
//       _id: 'string',
//       description: 'string',
//       isComplete: { type: 'bool', default: false },
//       createdAt: { type: 'date', default: new Date() }
//     }
//   };
// }

export class Task extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  description!: string;
  isComplete!: boolean;
  createdAt!: Date;

  

  static generate(description: string) {
    return {
      _id: new Realm.BSON.ObjectId(),
      description,
      createdAt: new Date(),
    };
  }

  static schema: any = {
    name: "Task",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      description: "string",
      total: "int?",
      isComplete: { type: "bool", default: false },
      createdAt: "date",
    },
  };
}
// 导出模式数组（用于 Realm 配置）
//export const TaskSchema = Task;
