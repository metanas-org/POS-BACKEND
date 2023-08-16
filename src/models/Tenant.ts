import { Model } from "objection";

class Tenant extends Model {
  static get tableName() {
    return "tenants";
  }

  static get relationMappings() {
    return {};
  }
}

export default Tenant;
