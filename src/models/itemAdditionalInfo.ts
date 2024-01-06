import { Model } from "objection";

class ItemAdditionalInfo extends Model {
  static get tableName() {
    return "item_additional_infos";
  }

  id!: string;
  item_id!: string;
  additional_info_id!: string;
  value!: string[];
  organization_id!: string;
  client_id!: string;
  is_active!: boolean;
  created_at!: string;
  updated_at!: string;
  is_deleted!: boolean;
  created_by!: string;
  updated_by!: string;

  static get jsonSchema() {
    return {
      type: "object",
      properties: {
        id: { type: "string", format: "uuid" },
        item_id: { type: "string", format: "uuid" },
        additional_info_id: { type: "string", format: "uuid" },
        value: { type: "array", items: { type: "string" } },
        organization_id: { type: "string", format: "uuid" },
        client_id: { type: "string", format: "uuid" },
        is_active: { type: "boolean" },
        created_at: { type: "string", format: "date-time" },
        updated_at: { type: "string", format: "date-time" },
        is_deleted: { type: "boolean" },
        created_by: { type: "string", format: "uuid" },
        updated_by: { type: "string", format: "uuid" },
      },
    };
  }

  static relationMappings = {
    item: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/item",
      join: {
        from: "item_additional_infos.item_id",
        to: "items.id",
      },
    },
    additionalInfo: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/additionalInfo",
      join: {
        from: "item_additional_infos.additional_info_id",
        to: "additional_infos.id",
      },
    },
    organization: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/organization",
      join: {
        from: "item_additional_infos.organization_id",
        to: "organizations.id",
      },
    },
    client: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/client",
      join: {
        from: "item_additional_infos.client_id",
        to: "clients.id",
      },
    },
  };

  $beforeInsert() {
    this.created_at = new Date().toISOString();
    this.updated_at = this.created_at;
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
}

export default ItemAdditionalInfo;
