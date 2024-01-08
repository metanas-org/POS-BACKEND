import { Model } from "objection";

class ItemVariant extends Model {
  static get tableName() {
    return "item_variants";
  }

  id!: string;
  item_detail_id!: string;
  org_variant_type_id!: number;
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
        item_detail_id: { type: "string", format: "uuid" },
        org_variant_type_id: { type: "integer" },
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
    itemDetail: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/itemDetail",
      join: {
        from: "item_variants.item_detail_id",
        to: "item_details.id",
      },
    },
    orgVariantType: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/orgVariantValue",
      join: {
        from: "item_variants.org_variant_type_id",
        to: "org_variant_values.id",
      },
    },
    organization: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/organization",
      join: {
        from: "item_variants.organization_id",
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

export default ItemVariant;
