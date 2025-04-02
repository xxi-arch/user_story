import Realm, { ObjectSchema } from "realm";

interface Attr {
  title: string;
  value: string;
}

interface Option {
  // 是否折叠
  zhedie: boolean;
}

export class User extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  createdAt!: Date;
  updatedAt!: Date;

  /** 用户名称 */
  name!: string;
  /** 备注 */
  remark!: string;
  /** 电话 */
  tel!: string;
  /** 标签 */
  tags!: string[];
  /** 其他属性 */
  attrs!: Attr[];

  static generate(description: string) {
    return {
      _id: new Realm.BSON.ObjectId(),
      description,
      createdAt: new Date(),
    };
  }

  static schema: ObjectSchema = {
    name: "User",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      createdAt: "date",
      updatedAt: "date",
      
      name: { type: "string", default: "" },
      tel: { type: "string",optional: true },
      remark: { type: "string", optional: true },
      tags: { type: "list", objectType:"string", default: [] },
      attrs: { type: "list",objectType:"Attr", default: [] },
    
    },
  };
}
// 导出模式数组（用于 Realm 配置）
//export const TaskSchema = Task;
