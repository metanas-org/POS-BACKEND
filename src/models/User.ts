import { Model } from "objection";

class User extends Model {
  static get tableName() {
    return "users";
  }

  static get relationMappings() {
    return {};
  }
}

export default User;
