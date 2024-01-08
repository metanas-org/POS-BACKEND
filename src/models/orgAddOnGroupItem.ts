import { Model } from "objection";

class OrgAddOnGroupItem extends Model {
  static get tableName() {
    return "org_add_on_group_items";
  }

  id!: string;
  group_id!: string;
  item_detail_id!: string;
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
        group_id: { type: "string", format: "uuid" },
        item_detail_id: { type: "string", format: "uuid" },
        organization_id: { type: "string", format: "uuid" },
        client_id: { type: "string" },
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
    group: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/orgAddOnGroup",
      join: {
        from: "org_add_on_group_items.group_id",
        to: "org_add_on_groups.id",
      },
    },
    itemDetail: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/itemDetail",
      join: {
        from: "org_add_on_group_items.item_detail_id",
        to: "item_details.id",
      },
    },
    organization: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/organization",
      join: {
        from: "org_add_on_group_items.organization_id",
        to: "organizations.id",
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

export default OrgAddOnGroupItem;
