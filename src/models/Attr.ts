import Realm, { ObjectSchema } from "realm";

export class Attr extends Realm.Object {
  title!: string;
  value!: string;

  static schema: Realm.ObjectSchema = {
    name: "Attr",
    embedded: true, // 设置为嵌入式对象
    properties: {
      title: "string",
      value: "string",
    },
  };
}
